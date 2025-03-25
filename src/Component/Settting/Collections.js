import React, { useEffect, useState } from 'react';

const Collections = () => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://nywnftbackend-1.onrender.com/api/collection/all')
            .then(response => response.json())
            .then(data => {
                setCollections(Array.isArray(data.data) ? data.data : []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching data:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-white">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className=" mx-auto px-4 py-6">
            {/* Top Navigation Tabs */}
           

            {/* Filters and Sorting */}
           
            {/* Table for Collections */}
            <div className="overflow-x-auto mt-6">
                <table className="w-full border border-gray-300 text-gray-700">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="p-3">#</th>
                            <th className="p-3">Collection Name</th>
                            <th className="p-3">Logo</th>
                            <th className="p-3">Contract Address</th>
                            <th className="p-3">NFT Standard</th>
                            <th className="p-3">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collections.map((collection, index) => (
                            <tr key={collection._id} className="border-b border-gray-300">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{collection.collectionName}</td>
                                <td className="p-3">
                                    <img src={collection.logoImage} alt={collection.collectionName} className="w-10 h-10 rounded-full" />
                                </td>
                                <td className="p-3">{collection.contractAddress}</td>
                                <td className="p-3">{collection.nftStandard}</td>
                                <td className="p-3">{collection.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Collections;
