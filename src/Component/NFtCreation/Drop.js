import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const SmartContractForm = () => {
  const [selectedType, setSelectedType] = useState(null);
  const [contractName, setContractName] = useState("");
  const [contractSymbol, setContractSymbol] = useState("");
  const [blockchain, setBlockchain] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const location = useLocation(); // This gives you the current location (URL)

  // Extract the query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type"); // This will give you 'collection' from 'type=collection'

  // Handle image selection
  const handleImageChange = (e) => {
    console.log(e, "ssss");
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submit (for demonstration purposes)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      contractName,
      contractSymbol,
      blockchain,
      selectedType,
      selectedImage,
    });
  };

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

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
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
              <option value="Polygon">Polygon</option>
              <option value="BSC">BSC</option>
            </select>
          </div>

          {/* Contract Types */}
          <div className="mb-8">
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
                  Recommended for most creators. This type of contract is
                  cheaper to deploy but will have slightly higher gas costs for
                  minting. It also lets you split royalties from the get-go.
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
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 text-white px-8 py-3 rounded-md hover:bg-blue-800 transition-colors"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SmartContractForm;
