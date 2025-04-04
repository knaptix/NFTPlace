import React from "react";
import { Link } from "react-router-dom";

const NewYorkWorldSection = () => {
  return (
    <div className="bg-[#EEF6FF] mx-2 sm:mx-3 min-h-screen flex items-center justify-between p-4 sm:p-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left Content Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-[#000C2D] font-sans font-extrabold text-[24px] sm:text-[32px] md:text-[40px] leading-tight">
              Diversity & Technology
            </h2>

            <h1 className="text-[28px] sm:text-[38px] md:text-[50px] font-sans font-extrabold text-[#1A202C] leading-tight mt-2">
              NEW YORK WORLD NFT
            </h1>
          </div>

          <p className="text-[#314066] text-[14px] sm:text-[16px] md:text-[20px] font-sans leading-relaxed mb-6">
            Ever dreamt of being part of the New York World? NYWNFTs, the bridge
            between Blockchain and AI, lets you own a piece of the action.
            Generate and mint NFTs, unlocking the future of creativity in the
            heart of the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* <Link to='https://pancakeswap.finance/swap?chain=eth&outputCurrency=0x26cAFCfc1B820a74B0e069c2C65b816d2AF241cD'>
              <button className="bg-[#1A202C] text-white text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-sans transition-all duration-300 hover:bg-[#374151]">
                Get Started
              </button>
            </Link> */}
            <Link to="https://t.me/+YUAQVX-sDoM1NTdh">
              <button className="bg-[#1A202C] text-white text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-sans transition-all duration-300 hover:bg-[#374151]">
                Join Community
              </button>
            </Link>
            <Link to="https://nywnft-organization.gitbook.io/nywnft/~/changes/1/getting-started/get-started">
              <button className="bg-[#EBF2FE] text-[#1A202C] text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-medium border border-[#E2E8F0] transition-all duration-300 hover:bg-[#DCE6F8]">
                Whitepaper
              </button>
            </Link>
            {/* <Link to='https://pancakeswap.finance/swap?chain=eth&outputCurrency=0x26cAFCfc1B820a74B0e069c2C65b816d2AF241cD'>
              <button className="bg-[#EBF2FE] text-[#1A202C] text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-medium border border-[#E2E8F0] transition-all duration-300 hover:bg-[#DCE6F8]">
                Get started
              </button>
            </Link> */}
          </div>
          <Link to="https://pancakeswap.finance/swap?chain=eth&outputCurrency=0x26cAFCfc1B820a74B0e069c2C65b816d2AF241cD">
            <button className="bg-[#1A202C]  mt-4 text-[#EBF2FE] text-[18px] sm:text-[20px] px-6 sm:px-12 py-3 rounded-full font-medium border border-[#E2E8F0] ">
              Get started with NYWNFT COINS
            </button>
          </Link>
          {/* <h2>Get started with NYWNFT COINS</h2> */}
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="Logo.png"
            alt="Statue of Liberty with NYC skyline"
            className="w-full max-w-[500px] mx-auto lg:max-w-none h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NewYorkWorldSection;
