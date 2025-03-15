import React, { useState, useEffect } from "react";

const ExploreGaming = () => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch collections from the API
    useEffect(() => {
        const fetchCollections = async () => {
            try {
                console.log("Fetching data from API...");
                const response = await fetch("https://nywnftbackend-production.up.railway.app/api/collection/all");

                if (!response.ok) {
                    throw new Error(`API request failed with status: ${response.status}`);
                }

                const result = await response.json();
                console.log("API Response Data:", result);

                if (result && result.status === true && Array.isArray(result.data)) {
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

    // Function to generate the image URL using pathName and imageName
    const getImageUrl = (imageName) => {
        if (!imageName) {
            console.warn("No image name provided, using fallback image.");
            return "https://via.placeholder.com/150"; // Fallback image
        }

        const basePath = "https://nywnftbackend-production.up.railway.app/api/image?pathName=";
        const pathName = "NFT_IMAGE_PATH_COLLECTION"; // Ensure this is the correct path
        const imageUrl = `${basePath}${pathName}&imageName=${imageName}`;

        console.log("Generated Image URL:", imageUrl); // Log the generated URL
        return imageUrl;
    };

    // Loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl font-semibold">Loading collections...</p>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen">
                <p className="text-xl font-semibold text-red-600">Error: {error}</p>
                <div className="mt-4">
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                        onClick={() => window.location.reload()}
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="bg-gray-50  py-10 w-full">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold my-6 text-center text-gray-900">
                        {/* Welcome to the NFT Marketplace */}
                        Explore Gaming
                    </h2>
                    {/* <p className="text-center text-gray-600 mb-8">
                        Browse, collect, and own digital assets from the best creators around the world.
                    </p> */}

                    {/* 🔹 NFT Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {collections.map((collection) => (
                            <div key={collection._id} className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transform transition-all hover:scale-105">
                                <img
                                    src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg" // Ensure this is the correct image name
                                    alt={collection.collectionName}
                                    className="w-full h-52 object-cover rounded-lg"
                                />
                                <div className="mt-4 text-center">
                                    <h3 className="text-lg font-semibold text-gray-900">{collection.collectionName}</h3>
                                    <p className="text-sm text-gray-600">Category: {collection.categoryName}</p>
                                    <p className="text-sm text-gray-600">NFT Standard: {collection.nftStandard}</p>
                                    <p className="text-sm text-gray-600">Royalty: {collection?.royalty?.percentage}%</p>
                                    <button className="w-full mt-3 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all rounded">
                                        View Collection
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No NFTs message */}
                    {collections.length === 0 && (
                        <div className="text-center p-10 bg-gray-100 rounded-lg mt-10">
                            <p className="text-gray-500 text-lg">No collections found.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ExploreGaming;