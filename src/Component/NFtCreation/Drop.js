import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { ethers } from "ethers";

const SmartContractForm = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [contractName, setContractName] = useState("");
  const [contractSymbol, setContractSymbol] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [sendImage, setSendImage] = useState(null);

  const [error, setError] = useState("");
  const [startTime, setStartTime] = useState(""); // New state for start time
  const [transactionHash, setTransactionHash] = useState(null); // Store transaction hash
  const [isLoading, setIsLoading] = useState(false); // State to track loading status

  const location = useLocation(); // This gives you the current location (URL)
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type"); // This will give you 'collection' from 'type=collection'
 console.log(type,"type")
  const contractAddress = "0xB136A4aA0334f833C425cba7f05eFE17C85f7d60";
  const contractABI = [
    {
      inputs: [
        { internalType: "address", name: "_collectionImpl", type: "address" },
        { internalType: "address", name: "_dropImpl", type: "address" },
        { internalType: "address", name: "_marketplace", type: "address" },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "collection",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        { indexed: false, internalType: "bool", name: "isDrop", type: "bool" },
      ],
      name: "CollectionCreated",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "newMarketplace",
          type: "address",
        },
      ],
      name: "MarketplaceUpdated",
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
      inputs: [],
      name: "collectionImplementation",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "name", type: "string" },
        { internalType: "string", name: "description", type: "string" },
        { internalType: "bool", name: "isDrop", type: "bool" },
        { internalType: "uint256", name: "startTime", type: "uint256" },
      ],
      name: "createCollection",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "dropImplementation",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "user", type: "address" }],
      name: "getUserCollections",
      outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "", type: "address" }],
      name: "isCollectionCreatedByUs",
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
        { internalType: "address", name: "_marketplace", type: "address" },
      ],
      name: "setMarketplace",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "", type: "address" },
        { internalType: "uint256", name: "", type: "uint256" },
      ],
      name: "userCollections",
      outputs: [{ internalType: "address", name: "", type: "address" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "address", name: "collection", type: "address" },
      ],
      name: "verifyCollection",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "view",
      type: "function",
    },
  ];

  const handleCreateCollection = async () => {
    console.log("call:::");
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    try {
      // Set loading to true when the process starts
      setIsLoading(true);

      // Connect to MetaMask
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      // Connect to the contract
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // Convert startTime to Unix timestamp
      const startTimeUnix = new Date(startTime).getTime();
      console.log(startTimeUnix, "startTimeUnix");

      const tx = await contract.createCollection(
        contractName,
        contractSymbol,
        type==="collection"?true:false,
        startTimeUnix // Ensure startTime is passed as an integer
      );

      console.log("Transaction sent:", tx.hash);
      setTransactionHash(tx.hash); // Store transaction hash

      // Wait for transaction to be mined
      const receipt = await tx.wait();
      console.log("Transaction confirmed:", receipt);

      // Extract CollectionCreated event to get the new contract address
      const collectionCreatedEvent = receipt.events.find(
        (event) => event.event === "CollectionCreated"
      );

      if (collectionCreatedEvent) {
        const newContractAddress = collectionCreatedEvent.args.collection;
        console.log("New contract address:", newContractAddress);
        handleApiCall(tx.hash, newContractAddress);

       // alert("Collection created successfully!");
      } else {
        console.error("CollectionCreated event not found in receipt.");
        alert("Collection created, but failed to retrieve contract address.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      // Set loading to false when the process is done
      setIsLoading(false);
    }
  };

  // Extract the query parameters from the URL

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSendImage(file)
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {


    // Validate required fields
    if (!contractName || !contractSymbol || !blockchain || !startTime) {
      setError("All fields are required.");
      return;
    }
    if (!selectedImage) {
      setError("Please upload an image.");
      return;
    }

    // Call handleCreateCollection to deploy the contract
    handleCreateCollection();
  };

  const handleApiCall = async (hash, contract) => {
    // Prepare FormData to handle both image and text fields
    const formData = new FormData();
    formData.append("field1", sendImage);
    formData.append("field2", sendImage);

    formData.append("collectionName", contractName);
    formData.append("contractAddress", "ssssssss")
    formData.append("description", contractSymbol);
    formData.append("collectionCreationHash", "sssss")
    formData.append("nftStandard", "ERC-1155");

    const token = localStorage.getItem("walletToken"); // Get the wallet token from localStorage

    try {
      const response = await fetch("http://localhost:5000/api/collection/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the Authorization header
        },
        body: formData, // Send FormData as body (not JSON)
      });

      if (!response.ok) {
        const errorText = await response.text(); // Log detailed error text
        console.error(`Failed to create collection: ${errorText}`);
        throw new Error("Failed to create the collection contract.");
      }

      const data = await response.json(); // Parse the JSON response
      console.log("Collection created successfully:", data);
      alert("Contract created successfully!");
    } catch (error) {
      console.error("Error creating contract:", error);
      alert("An error occurred while creating the contract.");
    }
  };
  const token = localStorage.getItem("walletToken"); // Get the wallet token from localStorage

console.log(token,"token")
  return (
    <div className="min-h-screen bg-white p-6">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 ml-7 text-4xl font-bold font-sans pt-6 pb-4 hover:text-gray-600"
        >
          <ArrowLeft className="w-10 h-10 scale-100 text-gray-800" />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">

        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">
            Let's create a smart contract for your drop
          </h1>
          <p className="text-gray-600 mb-8">
            You'll need to deploy an ERC-721 contract onto the blockchain before
            you can create a drop.
          </p>

          {/* Logo Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="w-40 h-40 object-cover rounded-lg mb-2"
              />
            ) : (
              <div className="mb-4">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
            )}
            <p className="text-sm text-gray-500">PNG, JPG, GIF up to 5MB</p>
            <p className="text-sm text-gray-500 mb-4">600 x 400</p>
            <input
              type="file"
              accept="image/png, image/jpeg, image/gif"
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

          {/* Error Display */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Form Inputs */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contract name
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="My contract name"
                value={contractName}
                onChange={(e) => setContractName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Contract symbol
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="MCN"
                value={contractSymbol}
                onChange={(e) => setContractSymbol(e.target.value)}
              />
            </div>
          </div>

          {/* Blockchain Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Blockchain
            </label>
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
            >
              <option value="">Select blockchain</option>
              <option value="Ethereum">Ethereum</option>
            </select>
          </div>

          {/* Start Time Selection */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Start Time
            </label>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
          <button
            onClick={handleSubmit}
            className={`bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors ${isLoading ? "cursor-wait" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
            ) : (
              "Continue"
            )}
          
          </button>
        </div>
        </div>

        {/* Contract Types */}
        {/* <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-4">
            Customize your contract type
          </label>
          <div className="space-y-4">
            <div
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedType === "proxy"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
              onClick={() => setSelectedType("proxy")}
            >
              <h3 className="font-medium mb-2">Proxy Contract</h3>
              <p className="text-sm text-gray-600">
                Recommended for most creators. This type of contract is cheaper
                to deploy but will have slightly higher gas costs for minting.
                It also lets you split royalties from the get-go.
              </p>
            </div>
            <div
              className={`p-4 border rounded-lg cursor-pointer transition-all ${
                selectedType === "standard"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
              onClick={() => setSelectedType("standard")}
            >
              <h3 className="font-medium mb-2">Standard Contract</h3>
              <p className="text-sm text-gray-600">
                Your own custom contract. This type of contract is more
                expensive to deploy but minting is slightly cheaper and will
                cost less gas fees.
              </p>
            </div>
          </div>
        </div> */}

        {/* Submit Button */}
      </div>
    </div>
  );
};

export default SmartContractForm;
