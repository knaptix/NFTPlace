import React from "react";

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full cursor-pointer">
      <div className="h-48 overflow-hidden flex items-center justify-center p-4">
        <img
          src={image}
          alt={name}
          className="h-full w-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-orange-500 font-bold">{price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
