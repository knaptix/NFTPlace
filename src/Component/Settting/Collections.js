import React, { useEffect, useState } from 'react';

const Collections = () => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchCollections = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://nywnftbackend-1.onrender.com/api/collection/all');
            const data = await response.json();
            const allCollections = Array.isArray(data.data) ? data.data : [];
            const filteredCollections = allCollections.slice(5);
            setCollections(filteredCollections);
            setError(null);
        } catch (err) {
            setError("Failed to fetch collections.");
        } finally {
            setLoading(false);
        }
    };

    const fetchSearchResults = async (query) => {
        if (!query.trim()) return fetchCollections(); // fallback to all
        setLoading(true);
        try {
            const response = await fetch(`https://nywnftbackend-1.onrender.com/api/nft/search?q=${encodeURIComponent(query)}`);
            const result = await response.json();
            const searchResults = Array.isArray(result.data?.collections) ? result.data.collections : [];
            setCollections(searchResults);
            setError(null);
        } catch (err) {
            setError("Search failed.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCollections();
    }, []);

    // Real-time search effect (with debounce)
    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchSearchResults(searchQuery);
        }, 500); // 500ms delay

        return () => clearTimeout(delayDebounce);
    }, [searchQuery]);

    if (loading) return <p className="text-center text-white">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="mx-auto px-4 py-6">
            {/* Real-Time Search Input */}
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Collections..."
                    className="w-full max-w-md p-2 border border-gray-300 rounded-md"
                />
            </div>

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
                            <tr key={collection._id || index} className="border-b border-gray-300">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3">{collection.collectionName || collection.name}</td>
                                <td className="p-3">
                                    <img
                                        src={collection.logoImage || collection.image}
                                        alt={collection.collectionName || collection.name}
                                        className="w-10 h-10 rounded-full"
                                    />
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
