import React from 'react';
import { ArrowLeft, Instagram, Twitter } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="w-full px-8 bg-white">
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex items-center gap-4">
          <ArrowLeft className="w-6 h-6" />
          <span className="font-semibold">Back</span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative w-full">
        <div className="h-96 bg-gradient-to-r from-green-800 to-green-900 relative overflow-hidden w-full rounded-3xl">
          {/* Decorative planets */}
          <div className="absolute left-1/4 top-1/2 w-12 h-12 rounded-full bg-yellow-200 opacity-80"></div>
          <div className="absolute right-1/4 top-1/2 w-12 h-12 rounded-full bg-purple-400 opacity-80"></div>
        </div>

        {/* Profile Picture */}
        <div className="absolute -bottom-16 left-8">
          <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white bg-pink-200">
            <img 
              src="/api/placeholder/96/96"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-20 px-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-xl font-bold flex items-center gap-1">
              YFI FAN
              <span className="text-blue-500">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </span>
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Lorem ipsum dummy text of the printing and typesetting industry, has been the industry's standard
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-sm font-medium">
              Follow
            </button>
            <button className="px-4 py-1.5 border border-gray-300 rounded-full text-sm font-medium">
              Share
            </button>
          </div>
        </div>

        {/* Social Stats */}
        <div className="flex gap-6 mt-4">
          <div className="flex gap-1">
            <span className="font-semibold">31.9K</span>
            <span className="text-gray-500">Followers</span>
          </div>
          <div className="flex gap-1">
            <span className="font-semibold">1.2K</span>
            <span className="text-gray-500">Following</span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-2 mt-4">
          <Instagram className="w-5 h-5 text-gray-500" />
          <Twitter className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
