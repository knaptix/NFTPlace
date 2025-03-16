import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { getCreatedNft, getOwnedNft } from '../../services/api';

const NFTCard = ({ data }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border p-3">
    <div className="relative">
      <img 
        src={data.imageUrl || "https://via.placeholder.com/150"}  
        alt={data.name}
        className="w-full aspect-[4/3] object-cover rounded-lg"
      />
      <button className="absolute top-3 right-3 rounded-full hover:bg-black/10 p-1.5 transition">
        <Heart className="w-5 h-5 text-white" />
      </button>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-gray-500 text-xs">{data.collectionName}</span>
        {/* Remove or add verification logic based on your data */}
        <span className="text-blue-500">✔</span>
      </div>
      <h3 className="font-medium text-sm text-gray-900">{data.name}</h3>
      <div className="mt-3">
        <span className="text-xs text-gray-500">Status</span>
        <p className="text-sm font-semibold">
          {data.onSale ? "Listed" : "Not Listed"}
        </p>
      </div>
   
    </div>
  </div>
);

const Created = () => {
  const [nftList, setNftList] = useState([]);


  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await getOwnedNft();
        console.log(response);
        setNftList(response?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNfts();
  }, []);
  return (
    <div className="w-full mx-auto p-4 text-black">
      <div className="flex justify-end gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm border hover:bg-gray-50">
          <span>Newest first   </span>
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm border hover:bg-gray-50">
          <span>Filters</span>
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="w-full mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {nftList?.length > 0 ? (
          nftList.map((nft) => (
            <NFTCard key={nft._id} data={nft}  />
          ))
        ) : (
          <p className="text-center text-gray-500 w-full col-span-full text-bolder">No Data Found</p>
        )}
      </div>

    </div>
    </div>
  );
};

export default Created;
