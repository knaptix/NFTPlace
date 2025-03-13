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
        const response = await fetch(
          "https://nywnftbackend-production.up.railway.app/api/nft/get"
        );

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
      <div className="flex flex-col justify-center items-center min-h-screen w-full">
        <p className="text-xl font-semibold text-red-600">Error: {error}</p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg mt-4 text-lg"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen px-4">
      <h2 className="text-4xl font-bold my-8 text-center text-gray-900">
        Discover Marketplace
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto text-lg">
        Browse, collect, and own digital assets from the best creators.
      </p>

      {/* NFT Grid - Larger Cards on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <div
            key={collection._id}
            className="bg-white shadow-xl rounded-3xl overflow-hidden p-4 md:p-6 transform transition-all hover:scale-105 w-full mx-auto"
          >
            <img
              src={collection.imageUrl}
              alt={collection.collectionName}
              className="w-full h-64 md:h-72 object-cover rounded-xl"
            />
            <div className="mt-5 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                {collection.collectionName}
              </h3>
              <p className="text-base md:text-lg text-gray-600 mt-1">
                Category: {collection.categoryName}
              </p>
              <p className="text-base md:text-lg text-gray-600">NFT Standard: {collection.nftStandard}</p>
              <p className="text-base md:text-lg text-gray-600">Royalty: {collection?.royalty?.percentage}%</p>

              {/* Buy Button / Not Listed */}
              {collection.isForSale ? (
                <Link to={`/buy/${collection.tokenId}`}>
                  <button className="w-full mt-4 py-3 bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all rounded-xl">
                    Buy Now
                  </button>
                </Link>
              ) : (
                <button
                  className="w-full mt-4 py-3 bg-gray-400 text-white font-semibold text-lg rounded-xl cursor-not-allowed"
                  disabled
                >
                  Not Listed
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Collections Found */}
      {collections.length === 0 && (
        <div className="flex flex-col items-center justify-center p-12 bg-gray-100 rounded-lg mt-12">
          <p className="text-gray-500 text-lg">No collections found.</p>
        </div>
      )}
    </div>
  );
};

export default NFTMarketplace;