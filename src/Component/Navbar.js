import React, { useState } from 'react';
import { BiSearch, BiShoppingBag, BiWallet, BiMenu, BiX } from 'react-icons/bi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b">
      {/* Desktop Navbar */}
      <div className="max-w-[1440px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#1B1A1E] rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">Logo</span>
            </div>
            <span className="font-bold text-lg">NYWNFT</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-[440px] mx-8">
            <div className="relative">
              <BiSearch className="absolute  left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for NFTs, Collections, creators"
                className="w-full pl-10 pr-4 py-2 bg-[#F3F3F3] rounded-full focus:outline-none focus:ring-1 focus:ring-gray-200"
              />
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">MARKETPLACE</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">CREATE NFTs</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">CURRENT BIDS</a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">CART</a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
           
            
            {/* Buy Coins Button - Hidden on mobile */}
            <button className="hidden md:flex items-center space-x-2 bg-[#F3F3F3] text-black px-4   rounded-full  py-4 ">
              <BiWallet className="h-5 w-5" />
              <span className="text-sm rounded-full  text-black ">Buy NYWNFT coins</span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <BiShoppingBag className="h-6 w-6" />
            </button>
            {/* Profile Picture */}
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Always visible on mobile */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <BiSearch className="absolute   left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for NFTs, Collections, creators"
              className="w-full pl-10 pr-4 py-2 bg-[#F3F3F3] rounded-full focus:outline-none focus:ring-1"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-3">
            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
              MARKETPLACE
            </a>
            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
              CREATE NFTs
            </a>
            <a href="#" className="block text-sm font-medium text-gray-700 hover:text-gray-900 py-2">
              CURRENT BIDS
            </a>
            <button className="flex items-center space-x-2 bg-[#F3F3F3] text-blackpx-4 py-2 rounded-full  hover:bg-black w-full justify-center">
              <BiWallet className="h-5 w-5" />
              <span className="text-sm ">Buy NYWNFT coins</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;