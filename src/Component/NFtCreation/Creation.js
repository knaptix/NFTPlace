import React from "react";
import { ArrowRight } from "lucide-react"; // Import Right Arrow Icon

const NFTCreation = () => {
  return (
    <div className="w-screen h-screen flex items-center bg-gray-100 mb-32 overflow-hidden ">
      <div className="w-full h-full bg-white rounded-none md:rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Section */}
        <div className="p-12 flex flex-col justify-center bg-gradient-to-b from-blue-100 to-white md:rounded-l-3xl">
          <h1 className="text-[72px] font-sans font-extrabold text-gray-900">
            <span>LET’S CREATE NFTs</span>
          </h1>
          <p className="text-gray-600 mt-6 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          {/* Action Cards */}
          <div className="mt-8 space-y-4">
            {/* Drop Card */}
            <div className="p-5 border rounded-2xl shadow-lg hover:shadow-xl cursor-pointer flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="icons/icon10.png"
                  alt="Drop Icon"
                  className="w-8 h-8"
                />{" "}
                {/* Image for Drop */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">Drop</h3>
                  <p className="text-gray-500  mr-20 text-md">
                    A drop is the release of a new project. This usually happens
                    on a specified date and time. Items will be revealed after
                    they have been purchased.
                  </p>
                </div>
              </div>
              <ArrowRight className="w-10 h-10 text-black" />{" "}
              {/* Right Arrow */}
            </div>

            {/* Collection or NFT Card */}
            <div className="p-5 border rounded-2xl shadow-lg hover:shadow-xl cursor-pointer flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src="icons/vector.png"
                  alt="Drop Icon"
                  className="w-8 h-8"
                />{" "}
                {/* Image for Drop */}
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold">Collection or NFT</h3>
                  <p className="text-gray-500 mr-20">
                    A drop is the release of a new project. This usually happens
                    on a specified date and time. Items will be revealed after
                    they have been purchased.
                  </p>
                </div>
              </div>
              <ArrowRight className="w-10 h-10 text-black" />{" "}
              {/* Right Arrow */}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center md:rounded-r-3xl">
          <img
            src="Pic.png"
            alt="NFT"
            className="w-full h-full shadow-xl rounded-3xl "
          />
        </div>
      </div>
    </div>
  );
};

export default NFTCreation;
