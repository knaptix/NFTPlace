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
    <div className="mx-4 mt-6 md:mx-8 lg:mx-16">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-4 overflow-x-auto">
        <div className="flex gap-6 md:gap-8 whitespace-nowrap overflow-x-auto scrollbar-hide">
          {[
            { id: 'NFTs', label: 'NFTs' },
            { id: 'Collections', label: 'Collections' },
            { id: 'Created', label: 'Created' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-lg md:text-2xl font-bold ${
                activeTab === tab.id
                  ? 'text-black border-b-2 border-black'
                  : 'text-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">{renderTabContent()}</div>
    </div>
  );
});

export default NFTTab;
