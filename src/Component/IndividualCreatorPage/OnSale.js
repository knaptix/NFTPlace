import React, { useEffect, useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { getOnSale } from '../../services/api';

const NFTCard = ({ image, title, isVerified, price }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md border">
    <div className="relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full aspect-[4/3] object-cover" 
      />
      <button className="absolute top-3 right-3 rounded-full bg-black/30 p-1.5 hover:bg-black/50 transition-colors">
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
      <div className="mt-3 flex justify-between items-center">
        <div>
          <span className="text-xs text-gray-500">Price</span>
          <p className="text-sm text-gray-900">{price} ETH</p>
        </div>
        <button className="bg-black text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 hover:bg-gray-900">
          <ShoppingCart className="w-4 h-4" /> On sale
        </button>
      </div>
    </div>
  </div>
);

const OnSale = () => {
  const nfts = [
    // {
    //   image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max",
    //   title: "Corrupted angel",
    //   isVerified: true,
    //   price: "1.2"
    // },
    // {
    //   image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max",
    //   title: "Corrupted angel",
    //   isVerified: true,
    //   price: "1.2"
    // },
    // {
    //   image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max",
    //   title: "Corrupted angel",
    //   isVerified: true,
    //   price: "1.2"
    // },
    // {
    //   image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max",
    //   title: "Corrupted angel",
    //   isVerified: true,
    //   price: "1.2"
    // }
  ];
  const [nftList, setNftList] = useState([]);


  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await getOnSale();
        console.log(response);
        setNftList(response?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNfts();
  }, []);
  return (
    <div className="w-full mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {nfts.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>
    </div>
  );
};

export default OnSale;
