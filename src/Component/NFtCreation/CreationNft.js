import React, { useEffect, useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import { getAllCategory, getCollectionByUserID } from "../../services/api";
import { ethers } from "ethers";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";

const NFTCreationForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [collection, setCollection] = useState([]);
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
    if (file) {
      setSendImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateCollection = async () => {
    // Validation
    if (!contractAddress || !contractName || !category || !price || !supply || !royalty || !sendImage) {
      setValidationError("All fields are required.");
      return;
    }
    
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }
    
   
    try {
      setIsLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress(); // Get the signer wallet address

      console.log(signerAddress,category,"signerAddress")
      const contractABI =[
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          name: "ApprovalForAll",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint8",
              name: "version",
              type: "uint8",
            },
          ],
          name: "Initialized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "creator",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "maxSupply",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "price",
              type: "uint256",
            },
          ],
          name: "NFTCreated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "tokenId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "buyer",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "quantity",
              type: "uint256",
            },
          ],
          name: "NFTMinted",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "newStartTime",
              type: "uint256",
            },
          ],
          name: "StartTimeUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              indexed: false,
              internalType: "uint256[]",
              name: "values",
              type: "uint256[]",
            },
          ],
          name: "TransferBatch",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "TransferSingle",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "value",
              type: "string",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
          ],
          name: "URI",
          type: "event",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address[]", name: "accounts", type: "address[]" },
            { internalType: "uint256[]", name: "ids", type: "uint256[]" },
          ],
          name: "balanceOfBatch",
          outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "_tokenURI", type: "string" },
            { internalType: "uint256", name: "maxSupply", type: "uint256" },
            { internalType: "uint256", name: "price", type: "uint256" },
            {
              internalType: "uint256",
              name: "royaltyPercentage",
              type: "uint256",
            },
          ],
          name: "createNFT",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "description",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "_name", type: "string" },
            { internalType: "string", name: "_description", type: "string" },
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "address", name: "_marketplace", type: "address" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "string", name: "_name", type: "string" },
            { internalType: "string", name: "_description", type: "string" },
            { internalType: "address", name: "_owner", type: "address" },
            { internalType: "address", name: "_marketplace", type: "address" },
            { internalType: "uint256", name: "_startTime", type: "uint256" },
          ],
          name: "initialize",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "address", name: "operator", type: "address" },
          ],
          name: "isApprovedForAll",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "marketplace",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
            { internalType: "uint256", name: "quantity", type: "uint256" },
          ],
          name: "mintNFT",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "nftDetails",
          outputs: [
            {
              components: [
                { internalType: "string", name: "uri", type: "string" },
                { internalType: "uint256", name: "maxSupply", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "currentSupply",
                  type: "uint256",
                },
                { internalType: "address", name: "creator", type: "address" },
                { internalType: "uint256", name: "price", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "royaltyPercentage",
                  type: "uint256",
                },
              ],
              internalType: "struct ICollection.NFTDetails",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256[]", name: "ids", type: "uint256[]" },
            { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "safeBatchTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "safeTransferFrom",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "operator", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
          ],
          name: "setApprovalForAll",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_startTime", type: "uint256" },
          ],
          name: "setStartTime",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "startTime",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "bytes4", name: "interfaceId", type: "bytes4" },
          ],
          name: "supportsInterface",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "tokenId", type: "uint256" },
          ],
          name: "uri",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
      ];
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const tx = await contract.createNFT(
        "img1", // Replace with actual image URI
        supply,
        price * (10 ** 3), // Price (scaling if needed)
        royalty * 10 // Royalties (scaling if needed)
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
        // alert("NFT created successfully!");

        // Call the API to store the collection

        await handleApiCall(newId, contractAddress,tx.hash, signerAddress);
      } else {
        console.error("NFTCreated event not found in receipt.");
        alert("NFT created, but failed to retrieve token ID.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiCall = async (tokenId, contractAddress,hash, signer) => {
    //debugger
    const formData = new FormData();
    formData.append("nftImg", sendImage);
    formData.append("name", contractName);
    formData.append("contractAddress", "csdhjsad");
    formData.append("transactionHash", "dcjhsdghkds");
    formData.append("description", contractSymbol);
    formData.append("category", category);
    formData.append("royalty[percentage]", royalty);
    formData.append("royalty[recipient]", 'hjsdsgysd'); // Send the signer address
    formData.append("tokenId", 2);
    formData.append("quantity", supply);
    const token = localStorage.getItem("walletToken");

    try {
      const response = await fetch(
        "https://nywnftbackend-production.up.railway.app/api/collection/create",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Failed to create collection: ${errorText}`);
        throw new Error("Failed to create the collection contract.");
      }

      const data = await response.json();
      console.log("Collection created successfully:", data);
      alert("Contract created successfully!");
    } catch (error) {
      console.error("Error creating contract:", error);
      alert("An error occurred while creating the contract.");
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 ml-7 text-2xl font-bold pt-6 pb-4 hover:text-gray-600"
      >
        <ArrowLeft className="w-6 h-6 text-gray-800" /> Back
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
            accept="image/png, image/jpeg, image/webp, video/mp4, audio/mp3"
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

          <label className="block font-medium">Choose your collection *</label>
          <div>
            <div className="relative w-full">
              <button
                className="w-full p-4 border rounded-md text-black flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
               {!collectinName?"Collection":collectinName }  
                <span>{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
              </button>
              {isOpen && (
                <div className="absolute w-full bg-gray-800 text-white border border-gray-700 rounded-md mt-2">
                  <Link to="/drop?type=collection">
                    <button className="w-full text-left p-4 hover:bg-blue-500 flex justify-between items-center border-b-[1px]" onClick={() => setIsOpen(false)}>
                      + Create a new collection
                    </button>
                  </Link>
                  {collection.map((item) => (
                    <button
                      key={item._id}
                      className="w-full text-left p-4 hover:bg-blue-500 flex justify-between items-center border-b-[1px]"
                      onClick={() => {
                        setCollectionName(item.collectionName)
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
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name.toLowerCase()}>
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
          <input
            type="text"
            placeholder="Royalties (e.g., 10%)"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setRoyalty(e.target.value)}
          />

          <button
            className={`w-full ${isLoading ? "bg-gray-500" : "bg-blue-900"} text-white py-3 rounded-md hover:bg-blue-800`}
            onClick={handleApiCall}
            // disabled={isLoading}
          >
            {/* {isLoading ? "Creating..." : "Create NFT"} */}
            Calll
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCreationForm;

{
  /* <button className="text-blue-600 text-sm">+ Add traits</button> */
}

{
  /* <div className="flex justify-between items-center">
            <span>Put on sale</span>
            <input type="checkbox" className="toggle" />
          </div> */


            {/* <div className="flex justify-between items-center">
            <span>Unlock after purchase</span>
            <input type="checkbox" className="toggle" />
          </div>
          <input
            type="text"
            placeholder="Digital key code or link"
            className="w-full p-2 border rounded-md"
          />

          <input
            type="text"
            placeholder="Date of listing's expiration"
            className="w-full p-2 border rounded-md"
          /> */}
}
{/* <div className="grid grid-cols-2 gap-4">
              <div
                className={`p-4 border rounded-lg cursor-pointer text-center ${
                  formData.collection === "create"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
                onClick={() => setFormData({ ...formData, collection: "create" })}
              >
                Create ERC-1155
              </div>
              <div
                className={`p-4 border rounded-lg cursor-pointer text-center ${
                  formData.collection === "bluewaves"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
                onClick={() =>
                  setFormData({ ...formData, collection: "bluewaves" })
                }
              >
                Blue Waves ETH
              </div>
            </div> */}
