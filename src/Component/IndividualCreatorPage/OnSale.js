import React from 'react';
import { Heart } from 'lucide-react';

const NFTCard = ({ image, title, isVerified, price }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
    <div className="relative">
      <img 
        src={image} 
        alt={title}
        className="w-full aspect-[4/3] object-cover"
      />
      <button className="absolute top-3 right-3 rounded-full hover:bg-black/10 p-1.5 transition-colors">
        <Heart className="w-5 h-5 text-white" />
      </button>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-gray-500 text-xs">Gods Unchained</span>
        {isVerified && (
          <svg className="w-3 h-3 text-blue-500 fill-current" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
          </svg>
        )}
      </div>
      <h3 className="font-medium text-sm text-gray-900">{title}</h3>
      <div className="mt-3">
        <span className="text-xs text-gray-500">Price</span>
        <p className="text-sm text-gray-900">{price}</p>
      </div>
    </div>
  </div>
);

const onSale = () => {
  const nfts = [
    {
      image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max",
      title: "Corrupted angel",
      isVerified: true,
      price: "Not for sale"
    },
    {
      image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max",
      title: "Corrupted angel",
      isVerified: true,
      price: "Not for sale"
    },
    {
      image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max",
      title: "Corrupted angel",
      isVerified: true,
      price: "Not for sale"
    },
    {
      image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max",
      title: "Corrupted angel",
      isVerified: true,
      price: "Not for sale"
    }
  ];

  return (
    <div className="w-full mx-auto p-4">
      <div className="flex justify-end gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm border hover:bg-gray-50">
          <span>Price-Low to High</span>
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {nfts.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default onSale;
