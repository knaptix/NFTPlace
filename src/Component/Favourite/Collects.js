import React from 'react';
import { ChevronDown, Filter } from 'lucide-react';

const TableRow = ({ rank, image, name, price, priceChange, volume, volumeChange, owners, items }) => (
  <div className="flex items-center py-4 border-b border-gray-100 hover:bg-gray-50">
    <div className="w-12 text-center text-gray-500">{rank}</div>
    <div className="flex items-center flex-1">
      <img src={image} alt={name} className="w-10 h-10 rounded-lg mr-3" />
      <span className="font-medium">{name}</span>
    </div>
    <div className="w-32 text-right">{price} ETH</div>
    <div className="w-24 text-right text-green-500">+{priceChange}%</div>
    <div className="w-32 text-right">{volume} ETH</div>
    <div className="w-24 text-right text-red-500">{volumeChange}%</div>
    <div className="w-24 text-right">{owners}k</div>
    <div className="w-24 text-right">{items}k</div>
  </div>
);

const Collects = () => {
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
      name: "Lil Pudgys",
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
      name: "Azuki",
      price: "1.219",
      priceChange: "2.5",
      volume: "438.3",
      volumeChange: "-38.5",
      owners: "21.9",
      items: "10.4"
    }
  ];

  return (
    <div className="w-full px-8 md:px-16 lg:px-24">
      <div className="flex justify-end gap-2 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm border hover:bg-gray-50">
          <span>Price - Low to High</span>
          <ChevronDown className="w-4 h-4" />
        </button>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm border hover:bg-gray-50">
          <span>Filters</span>
          <Filter className="w-4 h-4" />
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="flex items-center py-4 px-4 border-b border-gray-100 text-sm text-gray-500">
          <div className="w-12 text-center">#</div>
          <div className="flex-1">Collection</div>
          <div className="w-32 text-right">Floor Price</div>
          <div className="w-24 text-right">24h %</div>
          <div className="w-32 text-right">Volume</div>
          <div className="w-24 text-right">24h %</div>
          <div className="w-24 text-right">Owners</div>
          <div className="w-24 text-right">Items</div>
        </div>

        <div className="px-4">
          {collections.map((collection) => (
            <TableRow key={collection.rank} {...collection} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collects;
