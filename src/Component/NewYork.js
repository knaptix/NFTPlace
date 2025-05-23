import React from 'react';
import { Link } from 'react-router-dom';

const NewYorkWorldSection = () => {
  return (
    <div className="bg-[#EEF6FF] mx-2 min-h-screen flex items-center justify-between p-4 sm:px-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left Content Section */}
        <div className="text-center lg:text-left w-full lg:w-1/2">
          <div className="mb-4 sm:mb-6">
            <h2 className="text-[#000C2D] text-black font-sans font-extrabold text-[24px] sm:text-[32px] md:text-[40px] leading-tight">
              This platform is owned and developed by Xiorent Technologies private limited
            </h2>

            {/* <h1 className="text-[32px] sm:text-[42px] md:text-[56px] font-sans text-black font-extrabold text-[#1A202C] leading-tight mt-2">
              This platform is owned and developed by Xiorent Technologies private limited
            </h1> */}
          </div>

          <p className="text-[#314066] text-[14px] sm:text-[16px] md:text-[20px] font-sans leading-relaxed mb-6">

            {/* This platform is owned and developed by Xiorent Technologies private limited */}
            {/* Ever dreamt of being part of the New York World? NYWNFTs, the bridge
            between Blockchain and AI, lets you own a piece of the action.
            Generate and mint NFTs, unlocking the future of creativity in the
            heart of the world. */}
          </p>
          <div className="flex flex-col sm:flex-row gap-4  mb-5 justify-center lg:justify-start">
            <Link to='https://metamask-nywnft-guide-awr31yq.gamma.site/'>
              <button className="bg-black  text-white text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-sans transition-all duration-300 hover:bg-[#374151]">
                Buy Coins Here and then Buy NFT
              </button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to='https://t.me/+YUAQVX-sDoM1NTdh'>
              <button className="bg-black text-white text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-sans transition-all duration-300 hover:bg-[#374151]">
                Join Community
              </button>
            </Link>
            <Link to='https://nywnft-organization.gitbook.io/nywnft/~/changes/1/getting-started/get-started'>
              <button className="text-black  text-[18px] sm:text-[20px] px-6 sm:px-8 py-3 rounded-full font-bold border border-[#E2E8F0] transition-all duration-300 ">
                Whitepaper
              </button>
            </Link>


          </div>

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
