import React from "react";
import HeroBanner from "../assets/HeroBanner.jpg";
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <header
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white mt-24"
      style={{
        backgroundImage: `url(${HeroBanner})`,
        height: "calc(100vh - 96px)"
      }}
    >
      <div className=" p-8 rounded-lg text-center max-w-3xl w-full mx-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
          Your one stop go for Bulks!
        </h1>
        <p className="mb-8 text-lg md:text-xl lg:text-2xl">
          Enjoy our services for buying products on bulk
        </p>

        {/* Mobile Search Bar */}
        <div className="md:hidden flex items-center bg-white rounded-full shadow-lg w-full p-2">
          <input
            type="text"
            placeholder="Enter product, categories, service name..."
            className="flex-grow px-4 py-2 text-gray-800 placeholder-gray-500 outline-none bg-transparent text-sm"
          />
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white p-2 rounded-full flex items-center justify-center">
            <FaSearch className="text-white text-sm" />
          </button>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-full shadow-lg max-w-2xl mx-auto">
          <div className="flex items-center w-full flex-grow px-4 py-2">
            <FaSearch className="text-gray-400 text-xl min-w-[20px]" />
            <input
              type="text"
              placeholder="Enter product, categories, service name..."
              className="w-full px-4 py-2 text-gray-800 placeholder-gray-500 outline-none bg-transparent"
            />
          </div>
          <div className="p-2">
            <button className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-2 rounded-full text-base font-semibold flex items-center justify-center gap-2">
              <FaSearch className="text-sm" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
