import React, { useState, useEffect } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { getCollectionByUserID } from '../../services/api';

const TableRow = ({ rank, image, name, description, nftStandard, createdDate }) => (
  <div className="flex items-center py-3 border-b text-sm md:text-base">
    <div className="w-8 text-center text-gray-500 md:w-12">{rank}</div>
    <div className="flex items-center flex-1">
      <img src={image} alt={name} className="w-8 h-8 rounded-lg mr-2 md:w-10 md:h-10 md:mr-3" />
      <span>{name}</span>
    </div>
    <div className="w-32 text-right">{description}</div>
    <div className="w-32 text-right">{nftStandard}</div>
    <div className="w-32 text-right">{createdDate}</div>
  </div>
);

const Collections = () => {
  const [collections, setCollections] = useState([]);

  // Fetch collection data from API
  useEffect(() => {
    getCollectionByUserID().then((res) => {
      if (res?.data) {
        setCollections(res.data); // Dynamically set collections from API response
      }
    });
  }, []);

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-end gap-2 mb-4 sm:mb-6">
        <button className="flex items-center gap-2 px-3 py-2 text-xs bg-white border rounded-full sm:text-sm hover:bg-gray-50">
          <span>Price - Low to High</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-xs bg-white border rounded-full sm:text-sm hover:bg-gray-50">
          <span>Filters</span>
          <Filter className="w-4 h-4" />
        </button>
      </div>

      {/* Table Header */}
      <div className="flex items-center py-3 px-4 text-xs font-medium text-gray-500 min-w-[500px] sm:text-sm">
        <div className="w-8 text-center md:w-12">#</div>
        <div className="flex-1">Collection</div>
        <div className="w-32 text-right">Description</div>
        <div className="w-32 text-right">NFT Standard</div>
        <div className="w-32 text-right">Created Date</div>
      </div>

      {/* Table Content */}
      <div className="px-4">
        {collections.map((collection, index) => (
          <TableRow
            key={collection.collectionId} // Use collectionId as key for unique identification
            rank={index + 1} // Dynamically generate the rank
            image={collection.logoImage} // Use logoImage from the API response
            name={collection.collectionName} // Use collectionName from the API response
            description={collection.description} // Use description from the API response
            nftStandard={collection.nftStandard} // Use nftStandard from the API response
            createdDate={collection.createdAt ? new Date(collection.createdAt).toLocaleDateString() : 'N/A'} // Format the creation date
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
