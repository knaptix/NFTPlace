import { useState } from "react";
import { Link } from "react-router-dom";

const ListingModal = ({ open, onClose }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative text-center">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        
        {/* Title */}
        <h2 className="text-lg font-semibold mt-2">Your item has been listed!!</h2>
        
        {/* Image */}
        <div className="mt-4">
          <img
            src="/image.png"
            alt="Listed Item"
            className="mx-auto rounded-lg w-full max-w-xs"
          />
        </div>
        
        {/* Listing Details */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">Gods Unchained ✅</p>
          <p className="text-lg font-bold">Corrupted angel</p>
        </div>
        
        {/* Pricing */}
        <div className="mt-2">
          <p className="text-sm text-gray-500">Listing Price</p>
          <p className="text-lg font-bold">0.00025 ETH</p>
          <p className="text-xs text-gray-400">$8.27 USD</p>
        </div>
        
        {/* View Listing Button */}
        <Link to="/sale"><button
          className="mt-4 bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800"
          onClick={onClose}
        >
          View listing
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ListingModal;