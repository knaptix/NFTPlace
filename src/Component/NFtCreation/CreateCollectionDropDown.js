import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function CollectionDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        className="w-full p-4 border rounded-md  text-black flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Collection
        <span>{isOpen ? <SlArrowUp /> : <SlArrowDown />}</span>
      </button>
      {isOpen && (
        <div className="absolute w-full bg-gray-800 text-white border border-gray-700 rounded-md mt-2">
          
          <Link to="/drop?type=collection">
            <button className="w-full text-left p-4 hover:bg-blue-500 flex justify-between items-center border-b-[1px]">
              + Create a new collection
            </button>
          </Link>
          <button className="w-full text-left p-4 hover:bg-blue-500 flex justify-between items-center border-b-[1px]">
            DEX{" "}
            <span className="text-gray-200 text-sm">Sepolia · ERC-1155</span>
          </button>
        </div>
      )}
    </div>
  );
}
