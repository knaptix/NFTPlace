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
        return <Created />;
      case 'created':
        return  <Owned />;
      case 'onsale':
        return <OnSale />;
      case 'collections':
        return <Collections />;
      default:
        return <Owned />;
    }
  };

  return (
    <div className="mx-4 mt-6 md:mx-8 lg:mx-16">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-4 overflow-x-auto">
        <div className="flex gap-6 md:gap-8 whitespace-nowrap overflow-x-auto scrollbar-hide">
          {[
            { id: 'owned', label: 'Owned' },
            { id: 'created', label: 'Created' },
            { id: 'onsale', label: 'On Sale' },
            { id: 'collections', label: 'Collections' },
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
};

export default TabSwitch;
