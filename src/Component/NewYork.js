import React from 'react';

const NewYorkWorldSection = () => {
  return (
    <div className="bg-[#EEF6FF] mx-2 sm:mx-5 min-h-screen flex items-center p-6 sm:p-10 rounded-[20px]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content Section */}
        <div className="text-center md:text-left">
          <div className="mb-6">
            <h2 className="text-[#000C2D] font-sans font-extrabold text-[28px] sm:text-[36px] md:text-[40px] leading-tight">
              Diversity & Technology
            </h2>

            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-sans font-extrabold text-[#1A202C] leading-tight">
              NEW YORK WORLD
            </h1>
          </div>

          <p className="text-[#314066] text-[16px] sm:text-[18px] md:text-[20px] font-sans leading-relaxed mb-6">
            Ever dreamt of being part of the New York World? NYWNFTs, the bridge
            between Blockchain and AI, lets you own a piece of the action.
            Generate and mint NFTs, unlocking the future of creativity in the
            heart of the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-[#1A202C] text-white text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-sans transition-all duration-300 hover:bg-[#374151]">
              Join Community
            </button>
            <button className="bg-[#EBF2FE] text-[#1A202C] text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-medium border border-[#E2E8F0] transition-all duration-300 hover:bg-[#DCE6F8]">
              Whitepaper
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end">
          <img
            src="Logo.png"
            alt="Statue of Liberty with NYC skyline"
            className="w-[80%] sm:w-[75%] md:w-[70%] lg:w-[60%] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NewYorkWorldSection;
