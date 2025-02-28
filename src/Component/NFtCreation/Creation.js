import React from "react";
import { ArrowRight } from "lucide-react"; // Import Right Arrow Icon
import { Link } from "react-router-dom";

const NFTCreation = () => {
  return (
    <div className="w-screen h-screen flex items-center bg-gray-100 mb-32 overflow-hidden">
      <div className="w-full h-full bg-white rounded-none md:rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-b from-blue-100 to-white md:rounded-l-3xl">
          <h1 className="text-3xl md:text-[72px] font-sans font-extrabold text-gray-900">
            <span>CREATE</span>
          </h1>
          <p className="text-gray-600 mt-4 md:mt-6 text-base md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Action Cards */}
          <div className="mt-6 space-y-4">
            {/* Drop Card */}
            <div className="p-5 md:p-6 border rounded-2xl shadow-lg hover:shadow-xl cursor-pointer flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="icons/icon10.png"
                  alt="Drop Icon"
                  className="w-8 h-8"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold">Drop</h3>
                  <p className="text-gray-500 text-sm md:text-md">
                    A drop is the release of a new project. This usually happens
                    on a specified date and time. Items will be revealed after
                    they have been purchased.
                  </p>
                </div>
              </div>
              <Link to="/drop">
                <ArrowRight className="w-10 h-10 text-black" />
              </Link>
            </div>

            {/* Collection or NFT Card */}
            <div className="p-5 md:p-6 border rounded-2xl shadow-lg hover:shadow-xl cursor-pointer flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="icons/vector.png"
                  alt="Collection Icon"
                  className="w-8 h-8"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold">Collection or NFT</h3>
                  <p className="text-gray-500 text-sm md:text-md">
                    A drop is the release of a new project. This usually happens
                    on a specified date and time. Items will be revealed after
                    they have been purchased.
                  </p>
                </div>
              </div>
              <Link to="/create">   <ArrowRight className="w-10 h-10 text-black" /></Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex flex-col items-center justify-center md:rounded-r-3xl">
          {/* <img
            src="Pic.png"
            alt="NFT"
            className="w-full h-full object-cover rounded-3xl"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default NFTCreation;
