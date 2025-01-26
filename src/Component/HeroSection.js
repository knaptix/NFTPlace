import React, { useState } from "react";
import HeroBanner from "../assets/HeroBanner.jpg";
import { FaSearch } from "react-icons/fa";
import SearchResults from './SearchResults';  // Import the SearchResults component

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);  // Store fetched product data

  const handleSearch = async () => {
    if (!query) {
      setError("Please enter a product name.");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/scrape_amazon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from the backend.");
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setProduct(data.product);  // Store the fetched product data
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white mt-24"
      style={{
        backgroundImage: `url(${HeroBanner})`,
        height: "calc(100vh - 96px)",
      }}
    >
      <div className="p-8 rounded-lg text-center max-w-3xl w-full mx-4">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6">
          Your one stop go for Bulks!
        </h1>
        <p className="mb-8 text-lg md:text-xl lg:text-2xl">
          Enjoy our services for buying products in bulk
        </p>

        {/* Mobile Search Bar */}
        <div className="md:hidden flex flex-col gap-4">
          <div className="bg-white rounded-full shadow-lg w-full p-2">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter product name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-grow px-4 py-2 text-gray-800 placeholder-gray-500 outline-none bg-transparent text-sm rounded-full"
              />
              <button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white p-2 rounded-full flex items-center justify-center"
              >
                <FaSearch className="text-white text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Search Bar */}
        <div className="hidden md:block">
          <div className="bg-white rounded-full shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center p-2">
              <div className="flex items-center flex-grow">
                <FaSearch className="text-gray-400 text-xl ml-3" />
                <input
                  type="text"
                  placeholder="Enter product name..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-grow px-4 py-2 text-gray-800 placeholder-gray-500 outline-none bg-transparent"
                />
              </div>
              <button
                onClick={handleSearch}
                className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-2 rounded-full text-base font-semibold flex items-center justify-center gap-2"
              >
                <FaSearch className="text-sm" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>

        {loading && <p className="mt-4 text-orange-500">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>

      {/* Render SearchResults component */}
      {product && <SearchResults product={product} />}
    </header>
  );
};

export default HeroSection;
