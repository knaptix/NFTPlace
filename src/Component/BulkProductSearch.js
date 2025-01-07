import React, { useState } from "react";
import { FaAmazon, FaShoppingCart, FaSearch } from "react-icons/fa";
import { SiFlipkart } from "react-icons/si";

const BulkProductSearch = () => {
  const [budget, setBudget] = useState(1000);

  return (
    <div className="min-h-screen bg-gray-100 pt-16 px-4 pb-16">
      {/* Title outside the white box */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Bulk Shopping, Simplified
        </h1>
        <p className="text-gray-600 text-lg">
          Find the best bulk deals across multiple platforms
        </p>
      </div>

      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Add Product for Bulk Purchase
        </h2>

        <form className="space-y-8">
          {/* Product Name with Icon */}
          <div className="space-y-2">
            <label
              htmlFor="product-name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name or URL
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="product-name"
                placeholder="Enter product name or paste URL"
                className="block w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>

          {/* Quantity with modern styling */}
          <div className="space-y-2">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <div className="relative">
              <input
                type="number"
                id="quantity"
                min="1"
                placeholder="Enter quantity"
                className="block w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900 placeholder-gray-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 text-sm">units</span>
              </div>
            </div>
          </div>

          {/* Preferred Platform with improved styling */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Preferred Platform
            </label>
            <div className="grid grid-cols-3 gap-4">
              <label className="relative flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-all group">
                <input
                  type="radio"
                  name="platform"
                  value="amazon"
                  className="absolute opacity-0"
                />
                <div className="flex flex-col items-center space-y-2">
                  <FaAmazon className="text-2xl text-orange-500" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500">
                    Amazon
                  </span>
                </div>
              </label>

              <label className="relative flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-all group">
                <input
                  type="radio"
                  name="platform"
                  value="flipkart"
                  className="absolute opacity-0"
                />
                <div className="flex flex-col items-center space-y-2">
                  <SiFlipkart className="text-2xl text-blue-800" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500">
                    Flipkart
                  </span>
                </div>
              </label>

              <label className="relative flex items-center justify-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-orange-500 transition-all group">
                <input
                  type="radio"
                  name="platform"
                  value="both"
                  className="absolute opacity-0"
                />
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex -space-x-1">
                    <FaAmazon className="text-xl text-orange-500" />
                    <SiFlipkart className="text-xl text-blue-800" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500">
                    Both
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Budget Slider with improved styling */}
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Budget (Optional)
            </label>
            <input
              type="range"
              min="0"
              max="5000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹0</span>
              <span className="font-medium text-orange-500">₹{budget}</span>
              <span>₹5000</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 border  text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <FaShoppingCart className="text-xl" />
            <span>Add to Cart</span>
          </button>
        </form>

        {/* Smart Suggestions with improved styling */}
        <div className="mt-8 bg-gray-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            Smart Suggestions
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <a href="#" className="text-sm text-orange-500 hover:text-gray-800">
                Similar product with 15% more discount
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <a href="#" className="text-sm text-orange-500 hover:text-gray-800">
                Bulk deal: Buy 5 get 1 free
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BulkProductSearch;
