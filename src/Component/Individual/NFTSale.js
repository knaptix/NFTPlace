import React from 'react';
import { Share2 } from 'lucide-react';
import NFTCollection from './NFtCard';

import TabSwitchers from './TabSwitcher';

const NFTDetailsSale= () => {
  return (
    <>
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-8 items-center">
      {/* Left Column - Image */}
      <div className="relative w-full md:w-1/2">
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/04/24/a94e2d09-2f19-4bd2-a13f-6d6eff58684c_eadcc3b5.jpg?itok=X0MrjxZs&v=1713940582"
            alt="Concert scene"
            className="w-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Right Column - Details */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Title & Creator */}
        <div className="space-y-2">
          <span className="text-gray-600 text-sm">Dopeturtle1</span>
          <h1 className="text-2xl font-bold">Felly sweet - Unknown</h1>
        </div>

        {/* Creator & Owner Info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Created by</span>
            <img
              src="/api/placeholder/32/32"
              alt="Creator"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">Dopeturtle1</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">Owned by</span>
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
          <div className="text-sm text-gray-600">≈ $27.80</div>
        </div>

        {/* Action Buttons */}
        <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-medium">
          On sale
        </button>
      </div>
    </div>

    <TabSwitchers/>
    <NFTCollection/>
    </>
  );
};

export default NFTDetailsSale;