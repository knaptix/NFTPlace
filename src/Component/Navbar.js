import React, { useState, useRef, useEffect } from "react";
import { BiSearch, BiShoppingBag, BiWallet, BiMenu, BiX, BiMoon, BiSun } from "react-icons/bi";
import { User, Heart, Globe, Settings, Headphones, LogOut } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";

import WalletLogin from "./WalletModel";
import { useWallet } from './walletContext'; // Fix: Import from local wallet context

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const { isWalletConnected, walletAddress, disconnectWallet } = useWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const profileMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    { icon: User, label: 'Profile', path: '/profilepage' },
    { icon: Heart, label: 'Favourites', path: '/favourite' },
    { icon: Globe, label: 'Language', path: '/language' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: Headphones, label: 'Help & Support', path: '/help' },
    { icon: LogOut, label: 'Logout', path: '/logout' },
  ];

  const handleLogout = () => {
    disconnectWallet();
    window.location.href = '/';
  };

  const handleMenuItemClick = (item) => {
    if (item.toggle) {
      setDarkMode(!darkMode);
    } else if (item.label === 'Logout') {
      handleLogout();
    } else if (item.path) {
      navigate(item.path);
    }
    setIsProfileMenuOpen(false);
  };

  // Function to handle wallet button click
  const handleWalletButtonClick = () => {
    if (isWalletConnected) {
      disconnectWallet();
      navigate('/');
    } else {
      setIsWalletModalOpen(true);
    }
  };

  // Update the wallet connection handler
  const handleWalletConnect = () => {
    setIsWalletModalOpen(false);
    // The navigation will happen automatically through ProtectedRoute
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
        <div className=" mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-2">
              <div className={`w-8 h-8 ${darkMode ? "bg-gray-700" : "bg-[#1B1A1E]"} rounded-lg flex items-center justify-center`}>
                <img src="log.png" alt="Logo" className="w-6 h-6" />
              </div>
              <span className="font-extrabold text-[24px]">NYWNFT</span>
            </Link>

            {/* Search Bar */}
            <div className="hidden md:block flex-1 max-w-[440px] mx-8">
              <div className="relative">
                <BiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for NFTs, Collections, creators"
                  className={`w-full pl-10 pr-4 py-2 rounded-full focus:outline-none ${darkMode
                    ? "bg-gray-700 text-white focus:ring-gray-500"
                    : "bg-[#F3F3F3] focus:ring-gray-200"
                    }`}
                />
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-medium hover:text-gray-400 ">Marketplace</Link>
              <Link to="/CreateNFt" className="text-sm font-medium hover:text-gray-400 ">Create</Link>
              <Link to="/CurrentBid" className="text-sm font-medium hover:text-gray-400 ">Current Bids</Link>

              <Link to="/cart" className="flex items-center text-sm font-medium hover:text-gray-400">
                <LuShoppingCart className="w-10 h-10 mr-1" />

              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Dark Mode Toggle Button */}



              <Link to="https://pancakeswap.finance/swap?chain=eth&outputCurrency=0x26cAFCfc1B820a74B0e069c2C65b816d2AF241cD" className="text-sm font-medium hover:text-gray-400 ">
                <button className={`hidden md:flex items-center space-x-2 px-4 rounded-full py-4 ${darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "text-[#F3F3F3] bg-black hover:bg-gray-200 hover:text-black"
                  } transition-colors duration-200`}>
                  NYWNFT/WETH
                </button>
              </Link>

              {/* Wallet Button - Conditional rendering */}
              <button
                onClick={handleWalletButtonClick}
                className={`hidden md:flex items-center space-x-2 px-4 rounded-full py-4 ${darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-[#F3F3F3] text-black hover:bg-gray-200"
                  } transition-colors duration-200`}
              >

                {/* <span className="text-sm">
                  {isWalletConnected ? `Disconnect (${walletAddress.slice(0, 6)}...)` : "Connect Wallet"}
                </span> */}
                <span className="text-sm">
                  {isWalletConnected ? `Disconnect Wallet` : "Connect Wallet"}
                </span>
              </button>

              {/* Cart Icon */}


              {/* Profile Menu */}
              <div className="relative" ref={profileMenuRef}>
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/9203/9203764.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 z-50">
                    {menuItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleMenuItemClick(item)}
                        className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="flex-1 text-left">{item.label}</span>
                        {item.label === 'Dark Mode' && (
                          <div className={`w-8 h-4 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-gray-300'} relative transition-colors duration-200`}>
                            <div className={`absolute w-3 h-3 rounded-full bg-white top-0.5 transition-transform duration-200 ${darkMode ? 'translate-x-4 left-1' : 'left-1'}`} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <BiX className="h-6 w-6" /> : <BiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4 border-t pt-4">
              <div className="relative mb-4">
                <BiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for NFTs, Collections, creators"
                  className={`w-full pl-10 pr-4 py-2 rounded-full focus:outline-none ${darkMode ? "bg-gray-700 text-white" : "bg-[#F3F3F3]"
                    }`}
                />
              </div>
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-sm font-medium hover:text-gray-400 ">Marketplace</Link>
                <Link to="/CreateNFt" className="text-sm font-medium hover:text-gray-400 ">Create</Link>
                <Link to="/CurrentBid" className="text-sm font-medium hover:text-gray-400 ">Current Bids</Link>
                <Link to="https://pancakeswap.finance/?chain=eth&outputCurrency=0x26cafcfc1b820a74b0e069c2c65b816d2af241cd" className="text-sm font-medium hover:text-gray-400 ">NYWNFT/WETH</Link>
                <Link to="/cart" className="flex items-center text-sm font-medium hover:text-gray-400">
                  <LuShoppingCart className="w-10 h-10 mr-1" />

                </Link>
                <button
                  onClick={handleWalletButtonClick}
                  className={`flex items-center justify-center space-x-2 px-4 rounded-full py-3 w-full ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-[#F3F3F3] hover:bg-gray-200"
                    } transition-colors duration-200`}
                >

                  <span className="text-base">
                    {isWalletConnected ? "Disconnect Wallet" : "Connect Wallet"}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Wallet Login Modal */}
      <WalletLogin
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        darkMode={darkMode}
        onWalletConnect={handleWalletConnect}
      />
    </>
  );
};

export default Navbar;