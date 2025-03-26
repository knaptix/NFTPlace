import { Heart, ShoppingCart } from 'lucide-react';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const NFTCard = ({ image, title, price, name }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden w-full">
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover"
        />
        <button className="absolute top-2 right-2 p-1.5 rounded-full">
          <Heart size={18} className="text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="p-3 space-y-2">
        {/* Title and Verification */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-gray-600">{name}</span>
          <img
            src="/api/placeholder/14/14"
            alt="Verified"
            className="w-3.5 h-3.5"
          />
        </div>

        <h3 className="font-medium text-base">{title}</h3>

        {/* Price Section */}
        <div className="bg-gray-50 rounded-lg p-2 flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-500">Price</div>
            <div className="font-bold text-sm">{price} NYW</div>
          </div>
          <button className="text-gray-600">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {/* Buy Button */}
        <button className="w-full bg-[#0A0B1E] text-white py-2 rounded-lg text-sm font-medium">
          Buy now
        </button>
      </div>
    </div>
  );
};

const NFTCollection = () => {
  // const nfts = [
  //   {
  //     id: 1,
  //     image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
  //     title: "Corrupted angel",
  //     price: "1.2"
  //   },
  //   {
  //     id: 2,
  //     image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
  //     title: "Corrupted angel",
  //     price: "1.2"
  //   },
  //   {
  //     id: 3,
  //     image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
  //     title: "Corrupted angel",
  //     price: "1.2"
  //   },
  //   {
  //     id: 4,
  //     image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
  //     title: "Corrupted angel",
  //     price: "1.2"
  //   }
  // ];
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
      <div className="flex flex-col justify-center items-center min-h-screen w-screen">
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
    <div className=" mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">More from this collection</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {collections.map((nft) => (
          <NFTCard
            key={nft.id}
            image={nft.imageUrl}
            title={nft.collectionName}
            price={nft.price}
            name={nft.name}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-6">
        <button className="bg-[#0A0B1E] text-white px-6 py-2 rounded-lg text-sm font-medium">
          View collection
        </button>
      </div>
    </div>
  );
};

export default NFTCollection;