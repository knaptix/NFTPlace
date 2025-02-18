import React, { useState } from 'react';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState('NFTs');
  const [activeFilter, setActiveFilter] = useState('All');

  const tabs = ['NFTs', 'Collections', 'Creators'];
  const filters = ['All', 'Art', 'Music', 'Gaming', 'PFPs', 'Photography'];

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Main Tabs */}
      <div className="flex space-x-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 px-1 relative ${
              activeTab === tab
                ? 'text-gray-900 font-semibold'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
            )}
          </button>
        ))}
      </div>

        </div>
     

        
         
    
  );
};

export default TabSwitcher;