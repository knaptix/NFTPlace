import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';

const TableRow = ({ rank, image, name, price, priceChange, volume, volumeChange, owners, items }) => (
  <div className="flex flex-wrap items-center py-3 border-b text-sm md:text-base">
    <div className="w-8 text-center text-gray-500 md:w-12">{rank}</div>
    <div className="flex items-center flex-1 min-w-[100px]">
      <img src={image} alt={name} className="w-8 h-8 rounded-lg mr-2 md:w-10 md:h-10 md:mr-3" />
      <span className="font-medium truncate">{name}</span>
    </div>
    <div className="w-16 text-right sm:w-24 md:w-32">{price} ETH</div>
    <div className="hidden w-16 text-right text-green-500 sm:block md:w-24">+{priceChange}%</div>
    <div className="w-16 text-right sm:w-24 md:w-32">{volume} ETH</div>
    <div className="w-12 text-right text-red-500 sm:w-16 md:w-24">{volumeChange}%</div>
    <div className="hidden w-16 text-right sm:block md:w-24">{owners}k</div>
    <div className="hidden w-16 text-right sm:block md:w-24">{items}k</div>
  </div>
);

const Collections = () => {
  const collections = [
    {
      rank: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s",
      name: "Doodles",
      price: "1.219",
      priceChange: "2.5",
      volume: "438.3",
      volumeChange: "-38.5",
      owners: "21.9",
      items: "10.4"
    },
    {
      rank: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s",
      name: "Pudgy Penguins",
      price: "1.219",
      priceChange: "2.5",
      volume: "438.3",
      volumeChange: "-38.5",
      owners: "21.9",
      items: "10.4"
    },
    {
      rank: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s",
      name: "Pudgy Penguins",
      price: "1.219",
      priceChange: "2.5",
      volume: "438.3",
      volumeChange: "-38.5",
      owners: "21.9",
      items: "10.4"
    },
    {
      rank: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s",
      name: "Pudgy Penguins",
      price: "1.219",
      priceChange: "2.5",
      volume: "438.3",
      volumeChange: "-38.5",
      owners: "21.9",
      items: "10.4"
    },
    {
      rank: 5,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s",
      name: "Pudgy Penguins",
      price: "1.219",
      priceChange: "2.5",
      volume: "438.3",
      volumeChange: "-38.5",
      owners: "21.9",
      items: "10.4"
    },
    {
      rank: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s",
      name: "Pudgy Penguins",
      price: "1.219",
      priceChange: "2.5",
      volume: "438.3",
      volumeChange: "-38.5",
      owners: "21.9",
      items: "10.4"
    },
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-end gap-2 mb-4 sm:mb-6">
        <button className="flex items-center gap-2 px-3 py-2 text-xs bg-white border rounded-full sm:text-sm hover:bg-gray-50">
          <span>Price - Low to High</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        <button className="flex items-center gap-2 px-3 py-2 text-xs bg-white border rounded-full sm:text-sm hover:bg-gray-50">
          <span>Filters</span>
          <Filter className="w-4 h-4" />
        </button>
      </div>

      {/* Table Header */}
      <div className="flex items-center py-3 px-4 text-xs font-medium text-gray-500 min-w-[500px] sm:text-sm">
        <div className="w-8 text-center md:w-12">#</div>
        <div className="flex-1">Collection</div>
        <div className="w-16 text-right sm:w-24 md:w-32">Floor</div>
        <div className="hidden w-16 text-right sm:block md:w-24">24h %</div>
        <div className="w-16 text-right sm:w-24 md:w-32">Volume</div>
        <div className="w-12 text-right sm:w-16 md:w-24">24h %</div>
        <div className="hidden w-16 text-right sm:block md:w-24">Owners</div>
        <div className="hidden w-16 text-right sm:block md:w-24">Items</div>
      </div>

      {/* Table Content */}
      <div className="px-4">
        {collections.map((collection) => (
          <TableRow key={collection.rank} {...collection} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
