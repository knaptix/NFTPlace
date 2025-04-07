import { ShoppingCart } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Created = () => {
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
          const filtered = result.data.filter(item => item.onSale); // Only on sale
          console.log(`Found ${filtered.length} on-sale collections`);
          setCollections(filtered);
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

  const firstRow = collections.slice(0, 5);
  const secondRow = collections.slice(5);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-screen">
        <p className="text-xl font-semibold">Loading collections...</p>
      </div>
    );
  }

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
    <div className="w-full min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold my-6 text-center text-gray-900">
        Discover Marketplace
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-xl">
        Browse, collect, and own digital assets from the best creators.
      </p>

      {/* First Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
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
                    Price{" "}
                    <span className="font-bold">{collection.price} NYW</span>
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

      {/* Second Row */}
      {secondRow.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-6">
          {secondRow.map((collection) => (
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
                <div className="flex items-center mt-2 justify-between bg-gray-100 rounded-lg p-2 w-full mb-4">
                  <div>
                    <p className="text-lg">
                      Price{" "}
                      <span className="font-bold">{collection.price} NYW</span>
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
      )}

      {/* No collections found */}
      {collections.length === 0 && (
        <div className="text-center p-10 bg-gray-100 rounded-lg mt-10 w-full max-w-lg">
          <p className="text-gray-500 text-lg">No listed collections found.</p>
        </div>
      )}
    </div>
  );
};

export default Created;
