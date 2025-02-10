import React from 'react';

const NewYorkWorldSection = () => {
  return (
    <div className="bg-[#EEF6FF] ml-2 sm:ml-5  mr-2 sm:mr-5 min-h-screen flex items-center p-6 sm:p-8 rounded-[20px] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content Section */}
        <div className="max-w-full text-center md:text-left">
          <div className="mb-6">
            <h2 className="text-[#000C2D] font-sans font-extrabold text-[30px] sm:text-[40px]">
              Diversity & Technology
            </h2>

            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] font-sans font-extrabold">
              NEW YORK WORLD
            </h1>
          </div>
          
          <p className="text-[#314066] text-[16px] sm:text-[18px] md:text-[20px] font-sans leading-relaxed mb-6 sm:mb-8">
            Ever dreamt of being part of the New York World? NYWNFTs, the
            bridge between Blockchain and AI, lets you own a piece of the
            action. Generate and mint NFTs, unlocking the future of creativity
            in the heart of the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#1A202C] text-white text-[20px] px-6 sm:px-8 py-3 rounded-full font-sans transition-colors">
              Join community
            </button>
            <button className="bg-[#EBF2FE] text-[20px] sm:text-[18px] md:text-[20px] text-[#1A202C] px-6 sm:px-8 py-3 rounded-full font-medium border border-[#E2E8F0] transition-colors">
              Whitepaper
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="Logo.png"
            alt="Statue of Liberty with NYC skyline"
            className="w-[90%] sm:w-[80%] md:w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NewYorkWorldSection;
