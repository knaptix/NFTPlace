import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const ProductCard = ({ image, name, price, description, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full cursor-pointer">
      <div className="h-48 overflow-hidden flex items-center justify-center p-4">
        <img
          src={image}
          alt={name}
          className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">₹{price}</span>
          <div className="flex flex-col gap-2">
            <Link to="/checkout">
              <button
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300"
              >
                <ShoppingCartIcon className="h-5 w-5 flex-shrink-0" />
                View Order
              </button>
            </Link>
            <span 
              onClick={onAddToCart}
              className="text-orange-500 text-center cursor-pointer"
            >
              View in Cart
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
