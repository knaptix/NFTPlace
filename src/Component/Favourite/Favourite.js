import React, { useState } from 'react';

import NFTMarketplaces from './Nft';
import Collects from './Collects';
import FollowingList from './FollowingList';

const Favourite = () => {
  const [activeTab, setActiveTab] = useState('owned');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'nft':
        return <NFTMarketplaces />;
     
      case 'Collections':
        return <Collects />;
        
        case 'Followed creators':
        return <FollowingList />;
      default:
        return <NFTMarketplaces />;
    }
  };

  return (
    <div className="mx-8  mt-10 md:mx-16 lg:mx-24">
      <div className="border-b border-gray-200 mb-4">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('nft')}
            className={`pb-4 px-1 text-[22px]  font-sans  font-bold ${
              activeTab === 'nft'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            Owned
          </button>
          <button
            onClick={() => setActiveTab('Collections')}
            className={`pb-4 px-1 text-[22px] font-sans font-bold  ${
              activeTab === 'Collections'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            Collections
          </button>
          <button
            onClick={() => setActiveTab('Followed creators')}
            className={`pb-4 px-1 text-[22px] font-sans font-bold  ${
              activeTab === 'Followed creators'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
           Followed creators
          </button>
          
        </div>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Favourite;
