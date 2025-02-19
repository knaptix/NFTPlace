import React from 'react';
import { Share2 } from 'lucide-react';
import NFTCollection from './NFtCard';

import TabSwitchers from './TabSwitcher';

const NFTDetailsPage = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Media Player */}
        <div className="relative">
          {/* Timer Overlay */}
          <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
            <div className="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              02 : 12 : 56
            </div>
          </div>
          
          {/* Main Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/04/24/a94e2d09-2f19-4bd2-a13f-6d6eff58684c_eadcc3b5.jpg?itok=X0MrjxZs&v=1713940582"
              alt="Concert scene"
              className="w-full object-cover aspect-square"
            />
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Verified Badge and Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-blue-500">Dopeturtle1 •</span>
              <img
                src="/api/placeholder/20/20"
                alt="Verified"
                className="w-5 h-5"
              />
            </div>
            <h1 className="text-2xl font-bold">Felly sweet - Unknown</h1>
          </div>

          {/* Creator Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="text-sm">Created by</div>
              <img
                src="/api/placeholder/32/32"
                alt="Creator"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">Dopeturtle1</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm">Owned by</div>
              <img
                src="/api/placeholder/32/32"
                alt="Owner"
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium">Dopeturtle1</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span>👁</span>
              <span>12 Views</span>
            </div>
            <div className="flex items-center gap-1">
              <span>❤️</span>
              <span>2 Wishlist</span>
            </div>
            <button className="flex items-center gap-1">
              <Share2 size={16} />
              <span>Share</span>
            </button>
          </div>

          {/* Current Price */}
          <div className="space-y-2">
            <div className="text-sm text-gray-600">Current Price</div>
            <div className="text-xl font-bold">0.01 ETH</div>
            <div className="text-sm text-gray-600">≈ $740</div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium">
              Buy now
            </button>
            <button className="flex-1 border border-gray-300 py-3 rounded-xl font-medium">
              Make offer
            </button>
            <button className="border border-gray-300 p-3 rounded-xl">
              🛒
            </button>
          </div>
        </div>
        
      </div>
      
    </div>

    <TabSwitchers/>
    <NFTCollection/>
    </>
  );
};

export default NFTDetailsPage;