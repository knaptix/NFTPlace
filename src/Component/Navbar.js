import React, { useState } from "react";
import { BiSearch, BiShoppingBag, BiWallet, BiMenu, BiX, BiMoon, BiSun } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`border-b ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <div className="max-w-[1440px] mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 ${darkMode ? "bg-gray-700" : "bg-[#1B1A1E]"} rounded-lg flex items-center justify-center`}>
              <img src="log.png" alt="Logo" className="w-6 h-6" />
            </div>
            <span className="font-extrabold text-[24px]">NYWNFT</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:block flex-1 max-w-[440px] mx-8">
            <div className="relative">
              <BiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for NFTs, Collections, creators"
                className={`w-full pl-10 pr-4 py-2 rounded-full focus:outline-none ${darkMode ? "bg-gray-700 text-white focus:ring-gray-500" : "bg-[#F3F3F3] focus:ring-gray-200"}`}
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="text-sm font-medium hover:text-gray-400">MARKETPLACE</Link>
            <Link to="#" className="text-sm font-medium hover:text-gray-400">CREATE NFTs</Link>
            <Link to="/CurrentBid" className="text-sm font-medium hover:text-gray-400">CURRENT BIDS</Link>
            <Link to="/Cart" className="text-sm font-medium hover:text-gray-400">CART</Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle Button */}
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              {darkMode ? <BiSun className="h-6 w-6 text-yellow-500" /> : <BiMoon className="h-6 w-6 text-gray-900" />}
            </button>

            {/* Buy Coins Button */}
            <button className={`hidden md:flex items-center space-x-2 px-4 rounded-full py-4 ${darkMode ? "bg-gray-700 text-white" : "bg-[#F3F3F3] text-black"}`}>
              <BiWallet className="h-5 w-5" />
              <span className="text-sm">Buy NYWNFT coins</span>
            </button>

            {/* Cart Icon */}
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
              <BiShoppingBag className="h-6 w-6" />
            </button>

            {/* Profile Picture */}
            <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <img src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
