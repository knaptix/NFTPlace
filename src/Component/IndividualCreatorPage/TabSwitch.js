import React, { useState } from 'react';
import Owned from './Owned';
import Created from './Created';
import OnSale from './OnSale';
import Collections from './Collections';

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState('owned');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'owned':
        return <Owned />;
      case 'created':
        return <Created />;
      case 'onsale':
        return <OnSale />;
      case 'collections':
        return <Collections />;
      default:
        return <Owned />;
    }
  };

  return (
    <div className="mx-8  mt-10 md:mx-16 lg:mx-24">
      <div className="border-b border-gray-200 mb-4">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('owned')}
            className={`pb-4 px-1 text-[36px]  font-sans  font-bold ${
              activeTab === 'owned'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            Owned
          </button>
          <button
            onClick={() => setActiveTab('created')}
            className={`pb-4 px-1 text-[36px] font-sans font-bold  ${
              activeTab === 'created'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            Created
          </button>
          <button
            onClick={() => setActiveTab('onsale')}
            className={`pb-4 px-1 text-[36px] font-sans font-bold  ${
              activeTab === 'onsale'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            OnSale
          </button>
          <button
            onClick={() => setActiveTab('collections')}
            className={`pb-4 px-1 text-[36px] font-sans font-bold  ${
              activeTab === 'collections'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            Collections
          </button>  
        </div>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default TabSwitch;
