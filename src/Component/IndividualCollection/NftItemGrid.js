import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Filter, ChevronDown } from "lucide-react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-2 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`px-3 py-2 rounded-lg border transition-colors ${
            currentPage === page ? "bg-gray-900 text-white" : "bg-white hover:bg-gray-100"
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-50"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const NFTCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
      <div className="relative aspect-[4/3]">
        <img 
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors">
          <Heart className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-[20px] font-bold text-gray-900">{data.title}</h3>
        <div className="text-[15px] text-gray-500">Price</div>
        <div className="text-[17px] font-medium text-gray-900">{data.price}</div>
      </div>
    </div>
  );
};

const NFTCardsGrid = () => {
  const itemsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = 32;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const uniqueImages = [
    "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
    "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
    "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
    "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
    "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg",
    "https://cdn.prod.website-files.com/6615636a03a6003b067c36dd/661ffd0dbe9673d914edca2d_6423fc9ca8b5e94da1681a70_Screenshot%25202023-03-29%2520at%252010.53.43.jpeg"
  ];

  const items = Array.from({ length: totalItems }, (_, i) => ({
    id: i + 1,
    title: `NFT Item ${i + 1}`,
    price: "Not for sale",
    image: uniqueImages[i % uniqueImages.length],
  }));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full bg-[#F8F8F8]">
      <div className="mx-8 py-4 flex justify-between items-center">
        <h2 className=" font-bold text-gray-900 ml-14 text-[28px]">Items</h2>
        <hr className="bg-white h-3 w-3 mt-3"/>
        <div className="flex space-x-2 mt-4 ">
          <button className="px-4 py-2 rounded-full border flex items-center space-x-1  ">
            <span>Newest first</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="px-4 py-2 rounded-full border flex items-center space-x-1">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>
      <div className="mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4 ml-12 mr-12">
          {displayedItems.map((item) => (
            <NFTCard key={item.id} data={item} />
          ))}
        </div>
        <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default NFTCardsGrid;