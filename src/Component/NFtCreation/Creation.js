import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MdCreate } from "react-icons/md";
import { FaImage } from "react-icons/fa";
const NFTCreation = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // 3 images
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen flex items-center bg-gray-100 mb-32 overflow-hidden">
      <div className="w-full h-full bg-white rounded-none md:rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center  md:rounded-l-3xl">
        <div className="flex items-center justify-start gap-4">
      <MdCreate className="text-3xl md:text-6xl text-gray-900" />
      <h1 className="text-3xl md:text-[72px] font-sans font-extrabold text-gray-900">
        <span>Create</span>
      </h1>
    </div>
         

          {/* Action Cards */}
          <div className="mt-10 space-y-4">
            {/* Drop Card */}
            <div className="p-5 md:p-6 border rounded-2xl shadow-lg hover:shadow-xl cursor-pointer flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img src="/icons/icon10.png" alt="Drop Icon" className="w-8 h-8" />
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold">Drop</h3>
                  <p className="text-black   mt-4 text-1xl md:text-md">
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
              <FaImage className="w-8 h-8" />
                <div className="flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold">Collection or NFT</h3>
                  <p className="text-black mt-4  text-1xl md:text-md">
                  Create a new NFT collection or add an NFT to an existing one. Your items will display immediately. List for sale when you're ready.
                  </p>
                </div>
              </div>
              <Link to="/create">
                <ArrowRight className="w-10 h-10 text-black" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Hardcoded Image Swiper */}
        <div className="hidden md:flex flex-col items-center justify-center  relative w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            <img
              src="3image.jpg"
              alt="NFT 1"
              className={`absolute w-full h-full object-cover  transition-opacity duration-1000 ${
                currentImageIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="2image.jpg"
              alt="NFT 2"
              className={`absolute w-full h-full object-cover  transition-opacity duration-1000 ${
                currentImageIndex === 1 ? "opacity-100" : "opacity-0"
              }`}
            />
            <img
              src="1image.jpg"
              alt="NFT 3"
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                currentImageIndex === 2 ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCreation;
