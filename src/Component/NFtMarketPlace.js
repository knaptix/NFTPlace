import React, { useState } from "react";

const tabs = ["NFTs", "Collections", "Creators"];
const filters = ["All", "Art", "Music", "Gaming", "PFPs", "Photography"];
const sortingOptions = ["Price - Low to High", "Price - High to Low"];

const nfts = [
  { id: 1, name: "Corrupted Angel", price: 1.2, image: "/api/placeholder/300/300" },
  { id: 2, name: "Dark Lunatics", price: 1.5, image: "/api/placeholder/300/300" },
  { id: 3, name: "Neon Cyber", price: 2.0, image: "/api/placeholder/300/300" },
  { id: 4, name: "Mystic Realms", price: 1.8, image: "/api/placeholder/300/300" },
  { id: 5, name: "Pixel Dungeon", price: 1.1, image: "/api/placeholder/300/300" },
  { id: 6, name: "Ghost Shadows", price: 1.6, image: "/api/placeholder/300/300" },
  { id: 7, name: "Synth City", price: 2.3, image: "/api/placeholder/300/300" },
  { id: 8, name: "Anime Galaxy", price: 1.4, image: "/api/placeholder/300/300" },
];

const NFTMarketplace = () => {
  const [activeTab, setActiveTab] = useState("NFTs");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState(sortingOptions[0]);

  // Filter NFTs based on category (for now, all are shown)
  const filteredNFTs = nfts.filter((nft) => selectedFilter === "All" || nft.name.includes(selectedFilter));

  // Sort NFTs
  const sortedNFTs = [...filteredNFTs].sort((a, b) => {
    return selectedSort === "Price - Low to High" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10 w-full">
      {/* 🔹 Top Navigation Bar */}
      <div className="w-full px-12 mb-6">
        <div className="flex space-x-6 border-b pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`text-lg font-semibold pb-2 ${
                activeTab === tab ? "text-black border-b-2 border-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 Main Section */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold my-6 text-center text-gray-900">
          Discover Marketplace ✨
        </h2>

        {/* 🔹 Filter & Sorting Section */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  selectedFilter === filter ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown */}
          <select
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 text-sm font-medium cursor-pointer"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            {sortingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* 🔹 NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {sortedNFTs.map((nft) => (
            <div key={nft.id} className="bg-white shadow-lg rounded-2xl overflow-hidden p-4">
              <img src={nft.image} alt={nft.name} className="w-full h-52 object-cover rounded-lg" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{nft.name}</h3>
                <p className="text-sm text-gray-600">{nft.price} ETH</p>
                <button className="w-full mt-3 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTMarketplace;
