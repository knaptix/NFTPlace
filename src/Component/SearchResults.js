// src/Component/SearchResults.js
import React, { useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
// import boatAirdopes from "../assets/boat-airdopes-181-tr.jpg";
// import iPhone from "../assets/R.jpeg";
// import zFold from "../assets/Galaxy_Z_Fold3-1536x1449.jpg";
// import skullCandy from "../assets/OIP.jpeg";

const SearchResults = ({ product }) => {
    const searchResultsRef = useRef(null);

  useEffect(() => {
    // Smooth scroll to search results when component mounts
    searchResultsRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  if (!product) {
    return null;  // Return null if there's no product data
  }
  // // Sample product data - you can modify or fetch this as needed
  // const searchProducts = [
  //   {
  //     id: 1,
  //     name: "Product Automation 1",
  //     description: "Streamline your workflow with our advanced automation solution",
  //     price: "$499",
  //     image: boatAirdopes,
  //   },
  //   {
  //     id: 2,
  //     name: "E-commerce Tool 2",
  //     description: "Powerful e-commerce automation tools for your business",
  //     price: "$599",
  //     image: iPhone,
  //   },
  //   {
  //     id: 3,
  //     name: "Digital Solution 3",
  //     description: "Transform your digital presence with automation",
  //     price: "$399",
  //     image: zFold,
  //   },
  //   {
  //     id: 4,
  //     name: "Automation Suite 4",
  //     description: "Complete automation suite for e-commerce businesses",
  //     price: "$699",
  //     image: boatAirdopes,
  //   },
  //   {
  //     id: 5,
  //     name: "Smart Tool 5",
  //     description: "Smart automation tools for modern businesses",
  //     price: "$449",
  //     image: skullCandy,
  //   },
  //   {
  //     id: 6,
  //     name: "E-commerce Pro 6",
  //     description: "Professional grade e-commerce automation",
  //     price: "$549",
  //     image: zFold,
  //   }
  // ];

  return (
    <div ref={searchResultsRef} className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Search Results
        </h2>
        
        {/* Displaying the fetched product */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            key={product.id}
            image={product.image}  // Pass the product image
            name={product.title}    // Product name from the API
            description={product.description || "No description available"} // Optional description
            price={product.price}   // Product price from the API
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;