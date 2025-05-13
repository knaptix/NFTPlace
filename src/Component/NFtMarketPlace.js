import { ShoppingCart, Search } from "lucide-react";
import React, { useState, useEffect } from "react";

const NFTMarketplace = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);

  // Function to fetch all collections
  const fetchCollections = async () => {
    try {
      console.log("Fetching data from API...");
      setLoading(true);
      const response = await fetch("https://nywnftbackend-1.onrender.com/api/nft/get");

      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      const result = await response.json();
      console.log("API Response Data:", result);

      if (result?.status === true && Array.isArray(result.data)) {
        console.log(`Found ${result.data.length} collections`);
        setCollections(result.data);
      } else {
        console.warn("API did not return expected data format:", result);
        setError("Invalid data format received from API");
        setCollections([]);
      }
    } catch (error) {
      console.error("Error fetching collections:", error);
      setError(`Failed to fetch collections: ${error.message}`);
      setCollections([]);
    } finally {
      setLoading(false);
    }
  };

  // Function to search collections
  const searchCollections = async (query) => {
    if (!query.trim()) {
      fetchCollections();
      return;
    }

    try {
      setSearching(true);
      console.log(`Searching for: ${query}`);
      
      // Make sure we have a valid query parameter
      const searchUrl = `https://nywnftbackend-1.onrender.com/api/nft/search?q=${encodeURIComponent(query)}`;
      console.log(`Making request to: ${searchUrl}`);
      
      const response = await fetch(searchUrl);

      if (!response.ok) {
        throw new Error(`Search API request failed with status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Search Response Data:", result);

      if (result?.status === true && Array.isArray(result.data)) {
        console.log(`Found ${result.data.length} search results`);
        setCollections(result.data);
      } else {
        console.warn("Search API did not return expected data format:", result);
        // Don't set error here, just show empty results
        setCollections([]);
      }
    } catch (error) {
      console.error("Error searching collections:", error);
      setError(`Failed to search collections: ${error.message}`);
      setCollections([]);
    } finally {
      setSearching(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchCollections();
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    
    if (!searchQuery.trim()) {
      // If search is empty, just fetch all collections
      fetchCollections();
      return;
    }
    
    searchCollections(searchQuery);
  };

  // Filter collections to only include items with onSale: true
  const filteredCollections = collections.filter((collection) => collection.onSale);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <p className="text-xl font-semibold">Loading collections...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen w-full text-center">
        <p className="text-xl font-semibold text-red-600">Error: {error}</p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg mt-4"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  // Simulate Link component
  const BuyLink = ({ to, children }) => (
    <div className="w-full">
      <div 
        onClick={() => console.log(`Navigating to: ${to}`)} 
        className="cursor-pointer"
      >
        {children}
      </div>
    </div>
  );
 {console.log(filteredCollections,"ddddddd")}
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      {/* Header */}
      <h2 className="text-4xl font-bold my-6 text-center text-gray-900">
        Discover Marketplace
      </h2>
      
      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by creator, collection name, category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchSubmit();
              }
            }}
            className="w-full p-4 pr-12 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            onClick={handleSearchSubmit}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gray-900 text-white rounded-lg"
            disabled={searching}
          >
            {searching ? "..." : <Search size={20} />}
          </button>
        </div>
      </div>
      
      <p className="text-center text-gray-600 mb-8 max-w-xl">
        Browse, collect, and own digital assets from the best creators.
      </p>

      {/* Search Status */}
      {searching && (
        <div className="w-full max-w-2xl mb-4 text-center">
          <p className="text-blue-600">Searching...</p>
        </div>
      )}

      {/* NFT Grid - All Available Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {filteredCollections.map((collection) => (
          <div
            key={collection._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center transform transition-all hover:scale-105"
          >
            <img
              src={collection.imageUrl}
              alt={collection.collectionName}
              className="w-full h-52 object-cover rounded-lg"
            />
            <div className="mt-4 w-full">
              <p className="text-md text-gray-600 font-bold">
                Name: {collection.name}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 uppercase">
                {collection.collectionName}
              </h3>
              <p className="text-md text-gray-600">
                Category: {collection.categoryName}
              </p>
              <div className="flex justify-between bg-gray-100 rounded-lg p-2 mt-2 w-full mb-4">
                <div>
                  <p className="text-lg">
                    Price:{"   "}
                    <span className="font-bold">{collection.price} NYW</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <BuyLink
                  to={`/buy/id=${collection.tokenId}&contract=${collection.contractAddress}`}
                >
                  <button className="w-full py-2 bg-gray-900 text-white font-medium transition-all rounded">
                    Buy
                  </button>
                </BuyLink>
                <button className="w-12 h-10 flex items-center justify-center bg-gray-900 text-white font-medium transition-all rounded">
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Collections Found */}
      {filteredCollections.length === 0 && (
        <div className="text-center p-10 bg-gray-100 rounded-lg mt-10 w-full max-w-lg">
          <p className="text-gray-500 text-lg">
            {searchQuery ? `No results found for "${searchQuery}"` : "No collections found."}
          </p>
          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                fetchCollections();
              }}
              className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-lg"
            >
              Clear Search
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default NFTMarketplace;