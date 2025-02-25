import React, { useState, useEffect } from "react";

// Constants for filter and sorting options
const filters = ["All", "Art", "Music", "Gaming", "PFPs", "Photography"];
const sortingOptions = ["Price - Low to High", "Price - High to Low"];

const NFTMarketplace = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("NFTs");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState(sortingOptions[0]);

  // Fetch collections from the API
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch("https://nywnftbackend-production.up.railway.app/api/collection/all");
        const result = await response.json();

        console.log("API Response:", result); // Debugging: Check API response

        if (result.data && Array.isArray(result.data)) {
          setCollections(result.data); // Set collections from the API
        } else {
          setCollections([]); // Ensure collections is always an array if the response is invalid
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
        setCollections([]); // In case of an error, set collections to an empty array
      } finally {
        setLoading(false); // Stop loading after the fetch attempt
      }
    };

    fetchCollections();
  }, []);

  // Loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Filter collections based on the selected filter
  const filteredCollections = collections.filter((collection) =>
    selectedFilter === "All" || collection.name.toLowerCase().includes(selectedFilter.toLowerCase())
  );

  // Sort filtered collections based on the selected sorting option
  const sortedCollections = [...filteredCollections].sort((a, b) => {
    return selectedSort === "Price - Low to High" ? a.price - b.price : b.price - a.price;
  });

  // Function to generate the image URL using pathName and imageName
  const getImageUrl = (imageName) => {
   
    console.log("Generated Image URL:", imageName); // Debugging: Log the image URL
  
    const basePath = "https://nywnftbackend-production.up.railway.app/api/image?pathName=";
    const pathName = "NFT_IMAGE_PATH_COLLECTION"; // This can be dynamic if needed
    const imageUrl = `${basePath}${pathName}&imageName=${imageName}`;
  
    console.log("Generated Image URL:", imageUrl); // Debugging: Log the image URL
    return imageUrl;
  };
  return (
    <div className="bg-gray-50 min-h-screen py-10 w-full">
      {/* 🔹 Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold my-6 text-center text-gray-900">
          Welcome to the NFT Marketplace 🎨✨
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Browse, collect, and own digital assets from the best creators around the world.
        </p>

        {/* 🔹 Filter & Sorting Section */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === filter
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown */}
          <select
            className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-medium cursor-pointer shadow-sm hover:bg-gray-300"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedCollections.map((collection) => (
            <div key={collection.id} className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transform transition-all hover:scale-105">
            <img
              src={getImageUrl(collection.imageUrl)} // Use the getImageUrl function to get the correct image URL
              alt={collection.name}
              className="w-full h-52 object-cover rounded-lg"
            />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{collection.name}</h3>
                <p className="text-sm text-gray-600">{collection.price} ETH</p>
                <button className="w-full mt-3 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all">
                  Buy Now 🚀
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No NFTs message */}
        {sortedCollections.length === 0 && (
          <div className="text-center text-gray-500 mt-10">No NFTs found. Try a different category! 🧐</div>
        )}
      </div>
    </div>
  );
};

export default NFTMarketplace;
