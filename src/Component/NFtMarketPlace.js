import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const NFTMarketplace = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        console.log("Fetching data from API...");
        const response = await fetch("https://nywnftbackend-1.onrender.com/api/nft/get");

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response Data:", result);

        if (result?.status === true && Array.isArray(result.data)) {
          console.log(`Found ${result.data.length} collections`);
          // Filter collections to only include items with onSale: true
          // const filteredCollections = result.data.filter(collection => collection.onSale);
          const filteredCollections = result.data;

          // Extract cards 31, 32, and 33
          const cards = [
            filteredCollections[32] || null, // Card 31 (index 30)
            filteredCollections[33] || null, // Card 32 (index 31)
            filteredCollections[34] || null  // Card 33 (index 32)
          ].filter(card => card !== null);

          setSelectedCards(cards);
        } else {
          console.warn("API did not return expected data format:", result);
          setError("Invalid data format received from API");
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
        setError(`Failed to fetch collections: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold">Loading selected cards...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen text-center">
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

  // No cards found
  if (selectedCards.length === 0) {
    return (
      <div className="text-center p-10 bg-gray-100 rounded-lg mt-10 max-w-lg mx-auto">
        <p className="text-gray-500 text-lg">Cards 31, 32, and 33 not found.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header */}
      <h2 className="text-4xl font-bold my-6 text-center text-gray-900">
        Discover Marketplace
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-xl">
        Browse, collect, and own digital assets from the best creators.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {selectedCards.map((collection, index) => (
          <div
            key={collection._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 flex flex-col items-center transform transition-all hover:scale-105"
          >
            {/* <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-lg absolute top-2 right-2">
              Card #{31 + index}
            </div> */}
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
                    Price: <span className="font-bold">{collection.price} NYW</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to={`/buy/id=${collection.tokenId}&contract=${collection.contractAddress}`}
                  className="w-full"
                >
                  <button className="w-full py-2 bg-gray-900 text-white font-medium transition-all rounded">
                    Buy
                  </button>
                </Link>
                <button className="w-12 h-10 flex items-center justify-center bg-gray-900 text-white font-medium transition-all rounded">
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTMarketplace;
