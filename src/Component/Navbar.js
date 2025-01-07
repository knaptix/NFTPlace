import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between h-24 px-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              className="h-12 md:h-16"
              src="https://i.ibb.co/6Yxs70d/2021-10-26-23h27-03.png"
              alt="Logo"
            />
            <span className="ml-2 md:ml-4 uppercase font-black text-sm md:text-base text-white">
              Ecom
              <br />
              Stop
            </span>
          </a>

          {/* Navigation Menu - Hidden on Mobile */}
          <nav className="hidden md:contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8">
                <a
                  href="#home"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <span>Home</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a
                  href="#about"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <span>About Us</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a
                  href="#projects"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <span>Services</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a
                  href="#services"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Login, Sign Up, and Cart */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="#login"
              className="border border-white text-white rounded-full px-4 py-1 md:px-8 md:py-2 text-sm md:text-base font-bold hover:bg-white hover:text-gray-800 transition-colors"
            >
              Login
            </a>
            <a
              href="#signup"
              className="bg-white text-gray-800 rounded-full px-4 py-1 md:px-8 md:py-2 text-sm md:text-base font-bold hover:bg-gray-200 transition-colors"
            >
              Sign Up
            </a>
            {/* Cart Icon with Counter */}
            <div className="relative">
              <button
                className="p-2 text-white hover:text-gray-300 transition-colors"
                onClick={() => setIsCartOpen(true)}
              >
                <FaShoppingCart className="text-2xl" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
