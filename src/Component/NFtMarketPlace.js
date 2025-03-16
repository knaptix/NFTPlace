import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NFTMarketplace = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

    fetchCollections();
  }, []);

  // Split the collections for layout
  const firstRow = collections.slice(0, 5);
  const secondRow = collections.slice(5);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-screen">
        <p className="text-xl font-semibold">Loading collections...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen w-screen text-center">
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

  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4">
      {/* Header */}
      <h2 className="text-4xl font-bold my-6 text-center text-gray-900">
        Discover Marketplace
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-xl">
        Browse, collect, and own digital assets from the best creators.
      </p>

      {/* NFT Grid - First Row (5 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full">
        {firstRow.map((collection) => (
          <div
            key={collection._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transform transition-all hover:scale-105 flex flex-col items-center"
          >
            <img
              src={collection.imageUrl}
              alt={collection.collectionName}
              className="w-full h-52 object-cover rounded-lg"
            />
            <div className="mt-4 text-center w-full">
              <h3 className="text-lg font-semibold text-gray-900">
                {collection.collectionName}
              </h3>
              <p className="text-sm text-gray-600">
                Category: {collection.categoryName}
              </p>
              <p className="text-sm text-gray-600">
                NFT Standard: ERC-1155
              </p>

              {/* Conditional Rendering */}
              {collection.onSale ? (
                <Link to={`/buy/id=${collection.tokenId}&contract=${collection.contractAddress}`}>
                  <button className="w-full mt-3 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all rounded">
                    Buy
                  </button>
                </Link>
              ) : (
                <Link to={`/details/${collection.tokenId}`}>
                  <button className="w-full mt-3 py-2 bg-gray-400 text-white font-medium hover:bg-gray-500 transition-all rounded">
                    Not Listed
                  </button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* NFT Grid - Second Row (Remaining Cards) */}
      {secondRow.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl w-full mt-6">
          {secondRow.map((collection) => (
            <div
              key={collection._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transform transition-all hover:scale-105 flex flex-col items-center"
            >
              <img
                src={collection.imageUrl}
                alt={collection.collectionName}
                className="w-full h-52 object-cover rounded-lg"
              />
              <div className="mt-4 text-center w-full">
                <h3 className="text-lg font-semibold text-gray-900">
                  {collection.collectionName}
                </h3>
                <p className="text-sm text-gray-600">
                  Category: {collection.categoryName}
                </p>
                <p className="text-sm text-gray-600">
                  NFT Standard: ERC-1155
                </p>

                {/* Conditional Rendering */}
                {collection.onSale ? (
                  <Link to={`/buy/id=${collection.tokenId}&contract=${collection.contractAddress}`}>
                    <button className="w-full mt-3 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all rounded">
                      Buy
                    </button>
                  </Link>
                ) : (
                  <Link to={`/details/${collection.tokenId}`}>
                    <button className="w-full mt-3 py-2 bg-gray-400 text-white font-medium hover:bg-gray-500 transition-all rounded">
                      Not Listed
                    </button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Collections Found */}
      {collections.length === 0 && (
        <div className="text-center p-10 bg-gray-100 rounded-lg mt-10 w-full max-w-lg">
          <p className="text-gray-500 text-lg">No collections found.</p>
        </div>
      )}
    </div>
  );
};

export default NFTMarketplace;
