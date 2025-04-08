import React, { useState } from 'react';
import Created from './Created';
import Collections from './Collections';
import NFTMarketplace from '../NFtMarketPlace';

const NFTTab = React.memo(() => {
  const [activeTab, setActiveTab] = useState('NFTs');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'NFTs':
        return <NFTMarketplace />;
      case 'Collections':
        return <Collections />;
      case 'Created':
        return <Created />;
      default:
        return <NFTMarketplace />;
    }
  };

  return (
    <div className="mx-6 mt-6  justify-center md:mx-8 lg:mx-16">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-4 overflow-x-auto">
        <div className="flex gap-4 md:gap-8 whitespace-nowrap overflow-x-auto scrollbar-hide justify-center sm:justify-start">
          {[
            { id: 'NFTs', label: 'NFTs' },
            { id: 'Collections', label: 'Collections' },
            // { id: 'Created', label: 'Created' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm sm:text-lg md:text-2xl font-bold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md min-h-[400px]">
        {renderTabContent()}
      </div>
    </div>
  );
});

export default NFTTab;
