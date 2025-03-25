import React, { useEffect, useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { getAllCategory, getCollectionByUserID } from "../../services/api";
import { ethers } from "ethers";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import { nftDrop_Abi } from "../../services/config";
import { toast } from "react-hot-toast";
import axios from "axios";

const NFTCreationForm = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [collection, setCollection] = useState([]);
  const [collectionid, setColletionId] = useState();
  const [categoryId, setCategoryId] = useState(1);

  const [sendImage, setSendImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [contractName, setContractName] = useState("");
  const [collectinName, setCollectionName] = useState("");
  const [contractAddress, setContractAddress] = useState("");
  const [contractSymbol, setContractSymbol] = useState("");
  const [category, setCategory] = useState(""); // Default category
  const [price, setPrice] = useState("");
  const [supply, setSupply] = useState("");
  const [royalty, setRoyalty] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    getAllCategory().then((res) => {
      setCategories(res?.data);
      if (res?.data.length > 0) {
        // Set the default category to the first category if available
        setCategory(res?.data[0].name.toLowerCase());
      }
    });
    getCollectionByUserID().then((res) => setCollection(res?.data));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    // Check if file is provided and it's an image (jpg, jpeg, png)
    if (file) {
      const fileType = file.type;
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];

      if (!validTypes.includes(fileType)) {
        toast.error("Only JPG, JPEG, and PNG image files are allowed!");
        return; // Return early to prevent setting invalid file
      }

      setSendImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const PINATA_API_KEY = "71104b4fafb0e1ceff45"; // Replace with your Pinata API Key
  const PINATA_SECRET_KEY =
    "6ca7cdaf040946de76a5b6e258c3d95c53b9d778955eea85c31c5f48ca5d98e2"; // Replace with your Pinata Secret Key
  const PINATA_API_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";

  const handleCreateCollection = async () => {
    // Validation
    if (
      !contractAddress ||
      !contractName ||
      !category ||
      !price ||
      !supply ||
      !sendImage
    ) {
      setValidationError("All fields are required.");
      return;
    }

    if (!window.ethereum) {
      toast.error("MetaMask is not installed!");
      return;
    }
    // if (royalty > 10) {
    //   toast.error("royalty cannot be greater than 10!");
    //   return;
    // }

    try {
      setIsLoading(true);

      // Upload image to Pinata
      const imageURI = await uploadImageToPinata(sendImage); // sendImage is the image file selected by the user

      if (!imageURI) {
        toast.error("Failed to upload image to Pinata.");
        return;
      }
      const metadata = {
        name: contractName,
        description: contractSymbol,
        image: imageURI, // The IPFS URL of the uploaded image
        attributes: [
          { trait_type: "Category", value: category },
          { trait_type: "Supply", value: supply },
        ],
      };

      const metadataURI = await uploadMetadataToPinata(metadata);
      if (!metadataURI) {
        toast.error("Failed to upload metadata to Pinata.");
        return;
      }
      // Interact with Ethereum blockchain
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress(); // Get the signer wallet address

      const contractABI = nftDrop_Abi;
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      const tx = await contract.createNFT(
        metadata.name,
        metadata.description,
        metadataURI,
        supply
      );

      console.log("Transaction sent:", tx.hash);

      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt);

      const nftCreatedEvent = receipt.events.find(
        (event) => event.event === "NFTCreated"
      );

      if (nftCreatedEvent) {
        const newId = nftCreatedEvent.args.tokenId.toString();
        console.log("New Token ID:", newId);

        // Call the API to store the collection
        await handleApiCall(newId, contractAddress, tx.hash);
      } else {
        console.error("NFTCreated event not found in receipt.");
        toast.error("NFT created, but failed to retrieve token ID.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to upload the image to Pinata
  const uploadImageToPinata = async (imageFile) => {
    const formData = new FormData();
    formData.append("file", imageFile);

    const headers = {
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_KEY,
    };

    try {
      const response = await axios.post(PINATA_API_URL, formData, { headers });
      const imageURI = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log("Image uploaded to Pinata. URI:", imageURI);
      return imageURI;
    } catch (error) {
      console.error("Error uploading image to Pinata:", error);
      return null;
    }
  };

  // Function to upload metadata to Pinata
  const uploadMetadataToPinata = async (metadata) => {
    const formData = new FormData();
    const metadataBlob = new Blob([JSON.stringify(metadata)], {
      type: "application/json",
    });
    formData.append("file", metadataBlob, "metadata.json");

    const headers = {
      pinata_api_key: PINATA_API_KEY,
      pinata_secret_api_key: PINATA_SECRET_KEY,
    };

    try {
      const response = await axios.post(PINATA_API_URL, formData, { headers });
      const metadataURI = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log("Metadata uploaded to Pinata. URI:", metadataURI);
      return metadataURI;
    } catch (error) {
      console.error("Error uploading metadata to Pinata:", error);
      return null;
    }
  };
  const handleApiCall = async (tokenId, contractAddress, hash) => {
    //debugger
    const formData = new FormData();
    formData.append("nftImg", sendImage);
    formData.append("name", contractName);
    formData.append("contractAddress", contractAddress);
    formData.append("transactionHash", hash);
    formData.append("description", contractSymbol);
    formData.append("categoryId", categoryId);
    formData.append("collectionId", collectionid);

    // formData.append("royalty[percentage]", royalty);
    // formData.append("royalty[recipient]", signer); // Send the signer address
    formData.append("tokenId", tokenId);
    formData.append("quantity", supply);
    const token = localStorage.getItem("walletToken");

    try {
      const response = await fetch("https://nywnftbackend-1.onrender.com/api/nft/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to create collection: ${errorText}`);
        throw new Error("Failed to create the collection contract.");
      }

      const data = await response.json();
      navigate("/profilepage");
      console.log("Collection created successfully:", data);
      toast.success("Contract created successfully!");
    } catch (error) {
      console.error("Error creating contract:", error);
      toast.error("An error occurred while creating the contract.");
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 ml-7 text-2xl font-bold pt-6 pb-4 hover:text-gray-600"
      >
        <ArrowLeft className="w-6 h-6 text-gray-800" />
      </button>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 h-[400px]">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-40 h-40 object-cover rounded-lg mb-2"
            />
          ) : (
            <Upload className="w-12 h-12 text-gray-400 mb-2" />
          )}
          <p className="text-sm text-gray-500">
            PNG, JPG, WEBP, MP4, or MP3. Max 100MB
          </p>
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp , image/jpg"
            onChange={handleImageChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            Upload
          </label>
        </div>

        <div className="space-y-6">
          {validationError && (
            <div className="text-red-500">{validationError}</div>
          )}

          <label className="block  text-2xl font-bold">Choose your collection *</label>
          <div>
            <div className="relative w-full">
              <button
                className="w-full p-4 border rounded-md text-black flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                {!collectinName ? "Collection" : collectinName}
                <span>{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
              </button>
              {isOpen && (
                <div className="absolute w-full bg-gray-800 text-white border border-gray-700 rounded-md mt-2">
                  <Link to="/drop?type=collection">
                    <button
                      className="w-full text-left p-4 hover:bg-blue-500 flex justify-between items-center border-b-[1px]"
                      onClick={() => setIsOpen(false)}
                    >
                      + Create a new collection
                    </button>
                  </Link>
                  {collection.map((item) => (
                    <button
                      key={item._id}
                      className="w-full text-left p-4 hover:bg-blue-500 flex justify-between items-center border-b-[1px]"
                      onClick={() => {
                        console.log(item.collectionId);
                        setColletionId(item.collectionId);
                        setCollectionName(item.collectionName);

                        setContractAddress(item.contractAddress);
                        setIsOpen(false); // Close the dropdown after selection
                      }}
                    >
                      {item.collectionName}
                      <span className="text-gray-200 text-sm">
                        {item.nftStandard} · {item.description}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <input
            type="text"
            placeholder="Name *"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setContractName(e.target.value)}
          />
          <textarea
            placeholder="Description *"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setContractSymbol(e.target.value)}
          ></textarea>

          <select
            className="w-full p-2 border rounded-md"
            value={category} // Set default value to the selected category
            onChange={(e) => {
              const selectedCategory = categories.find(
                (cat) => cat.categoryId === parseInt(e.target.value)
              );
              setCategory(selectedCategory?.name); // Set category name
              setCategoryId(selectedCategory?.categoryId); // Set categoryId
            }}
          >
            {console.log(categories)}
            {categories.map((category) => (
              <option key={category._id} value={category.categoryId}>
                {category.name}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Enter Price"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Supply *"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setSupply(e.target.value)}
          />
          {/* <input
            type="text"
            placeholder="Royalties (e.g., 10%)"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setRoyalty(e.target.value)}
          /> */}

          <button
            className={`w-full ${
              isLoading ? "bg-gray-500" : "bg-blue-900"
            } text-white py-3 rounded-md hover:bg-blue-800`}
            onClick={handleCreateCollection}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create NFT"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCreationForm;
