import React from "react";
import { Instagram, Twitter } from "lucide-react";
import NFTItemsGrid from "./NftItemGrid";

const NFTCollectionPage = () => {
  return (
    <>
    <div className="min-h-screen bg-[#F8F8F8]">
      <div className="w-full bg-white">
        {/* Header with Back Button */}
        <div className="mx-8 p-4 border-b border-gray-100">
          <button className="flex items-center gap-1 text-[15px] text-gray-600">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </button>
        </div>

        {/* Banner Section */}
        <div className="relative w-[90%] mx-auto rounded-3xl overflow-hidden">
          {/* Larger Banner Image */}
          <div
            className="h-96 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/path-to-your-image.jpg')`,
              filter: "blur(8px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

          {/* Profile Picture */}
          <div className="absolute left-12 bottom-8">
            <div className="h-[100px] w-[100px]  mt-8 rounded-full bg-white border-[4px] border-white flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src="/path-to-profile.jpg"
                alt="Profile"
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Stats Grid Positioned Over Background with Proper Spacing */}
          <div className="absolute right-14 bottom-8 flex gap-8 bg-white/20 backdrop-blur-md px-8 py-4 rounded-lg w-max">
            {[
              { value: "1.219 ETH", label: "Floor price" },
              { value: "438 ETH", label: "Volume" },
              { value: "21.9K", label: "Total Items" },
              { value: "10.4K", label: "Owners" },
              { value: "5%", label: "Royalties" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col text-center text-white">
                <span className="text-[18px] font-semibold">{stat.value}</span>
                <span className="text-[14px]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="px-10 pt-16 ml-14">
          {/* Collection Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <h1 className="text-[22px] font-bold text-gray-900">Doodles</h1>
              <svg
                className="w-5 h-5 text-[#1DA1F2]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <p className="text-[15px] text-gray-600 leading-relaxed max-w-2xl">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry, has been the industry's standard.
            </p>

            <div className="text-[14px]">
              <span className="text-gray-500">Address - </span>
              <span className="text-[#1DA1F2]">
                0x32bb5a147b5371fd901aa4a72b7f82c58a87e36d
              </span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="absolute top-6 right-8 flex gap-3">
          <button className="p-1 text-gray-600 hover:text-gray-900">
            <Instagram className="w-5 h-5" />
          </button>
          <button className="p-1 text-gray-600 hover:text-gray-900">
            <Twitter className="w-5 h-5" />
          </button>
        </div> 
      </div>
      <NFTItemsGrid/>
    </div>
   
    </>
  );
};

export default NFTCollectionPage;
