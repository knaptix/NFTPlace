import React from 'react';
import { ArrowLeft, Instagram, Plus, Share2 } from 'lucide-react';
import TabSwitch from './TabSwitch';

const ProfilePage = () => {
  return (
    <div className="w-full px-4 sm:px-8 bg-white">
      {/* Header */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-2xl sm:text-4xl font-bold font-sans pt-4 pb-4 hover:text-gray-600"
      >
        <ArrowLeft className="w-8 sm:w-10 h-8 sm:h-10 text-gray-800" />
        Back
      </button>

      {/* Cover Image */}
      <div className="relative w-full">
        <div className="h-[250px] sm:h-[400px] bg-gradient-to-r from-green-800 to-green-900 relative overflow-hidden w-full rounded-3xl">
          {/* Decorative planets */}
          <div className="absolute left-1/4 top-1/2 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-yellow-200 opacity-80"></div>
          <div className="absolute right-1/4 top-1/2 w-8 sm:w-12 h-8 sm:h-12 rounded-full bg-purple-400 opacity-80"></div>
        </div>

        {/* Profile Picture */}
        <div className="absolute -mt-20 sm:-mt-32 left-1/2 transform -translate-x-1/2 sm:left-8 sm:translate-x-0">
          <div className="w-32 h-32 sm:w-[20rem] sm:h-[20rem] mt-10 sm:mt-16 rounded-3xl overflow-hidden border-4 sm:border-8 border-gray-300 bg-pink-200">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-16 sm:mt-10 px-4 sm:px-20 text-center sm:text-left">
        <div className="flex flex-col  sm:flex-row justify-between items-center sm:items-start">
          <div>
            <h1 className="text-[24px] mt-7 lg:ml-80 sm:text-[32px]  font-bold flex items-center gap-1 justify-center sm:justify-start">
              YFI FAN
              <span className="text-blue-500 rounded-full bg-blue-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-[20px] lg:ml-80">
              Lorem ipsum dummy text of the <br className="hidden sm:block" />
              printing and typesetting industry, has <br className="hidden sm:block" />
              been the industry's standard.
            </p>
            <div className="flex gap-2 lg:ml-80 mt-4 justify-center sm:justify-start">
              <button className="px-4 py-1.5 bg-[#0a0e29] text-white rounded-2xl text-[16px] sm:text-[20px] font-medium flex items-center gap-1">
                <Plus className="w-6 sm:w-10 h-6 sm:h-10" /> Follow
              </button>
              <button className="px-4 py-1.5 border border-gray-300 rounded-2xl text-[16px] sm:text-[20px] font-medium flex items-center gap-1">
                <Share2 className="w-5 sm:w-6 h-5 sm:h-6 text-gray-700" /> Share
              </button>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="px-4 py-2 bg-gray-100 text-black text-sm font-medium rounded-full flex items-center gap-2">
              <Instagram className="w-5 h-5 text-gray-700" /> Instagram
            </button>
            <button className="px-4 py-2 bg-gray-100 text-black text-sm font-medium rounded-full flex items-center gap-2">
              <Share2 className="w-5 h-5 text-gray-700" /> Share
            </button>
          </div>
        </div>

        {/* Social Stats */}
        <div className="grid grid-cols-2 sm:flex gap-4 sm:gap-6 mt-6 sm:mt-4 justify-center sm:justify-end">
          <div className="bg-gray-50 px-6 py-4 rounded-lg shadow-md text-center">
            <p className="text-gray-500 text-[16px] sm:text-[20px]">Followers</p>
            <span className="font-bold text-[24px] sm:text-[32px] text-[#0A0A30]">31.9K</span>
          </div>
          <div className="bg-gray-50 px-6 py-4 rounded-lg shadow-md text-center">
            <p className="text-gray-500 text-[16px] sm:text-[20px]">Following</p>
            <span className="font-bold text-[24px] sm:text-[32px] text-[#0A0A30]">1.2K</span>
          </div>
        </div>
      </div>

      <TabSwitch />
    </div>
  );
};

export default ProfilePage;
