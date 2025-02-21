import React from 'react';
import { Heart } from 'lucide-react';

const NFTCard = ({ image, title, price, verified }) => (
  <div className="relative flex flex-col w-full bg-white rounded-2xl overflow-hidden shadow">
    <div className="relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-52 object-cover"
      />
      <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full hover:bg-white/90">
        <Heart className="w-5 h-5 text-gray-600" />
      </button>
    </div>
    
    <div className="p-3">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        {verified && (
          <svg className="w-4 h-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        )}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-xs text-gray-500">Price</span>
          <div className="font-bold text-gray-900">{price} ETH</div>
        </div>
      </div>
      <button className="mt-4 w-full px-6 py-2 bg-[#0f1421] text-white font-semibold rounded-lg text-sm hover:bg-gray-800">
        Buy now
      </button>
    </div>
  </div>
);

const NFTMarketplaces = () => {
  const nfts = [
    {
      image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
      title: "Corrupted angel",
      price: "1.2",
      verified: true
    },
    {
      image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
      title: "Corrupted angel",
      price: "1.2",
      verified: true
    },
    {
      image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
      title: "Corrupted angel",
      price: "1.2",
      verified: true
    },
    {
      image: "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
      title: "Corrupted angel",
      price: "1.2",
      verified: true
    }
  ];

  return (
    <div className=" bg-[#F8F8F8] w-full">
      <div className="w-full px-4 py-8">
        <div className="flex justify-end items-center mb-6 px-2">
          <button className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium">
            Newest first
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium">
            <span>Filters</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-2">
          {nfts.map((nft, index) => (
            <NFTCard key={index} {...nft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTMarketplaces;
