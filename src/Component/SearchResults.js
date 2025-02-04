import React, { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

const SearchResults = ({ product, onAddToCart }) => {
  const searchResultsRef = useRef(null);

  useEffect(() => {
    searchResultsRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  if (!product) {
    return (
      <div ref={searchResultsRef} className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            No products found
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div ref={searchResultsRef} className="w-full bg-gray-50 py-16 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Search Results
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <ProductCard
            key={product.id}
            image={product.main_image}
            name={product.title}
            price={product.price}
            description={"No description available"}
            onAddToCart={() => onAddToCart(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
