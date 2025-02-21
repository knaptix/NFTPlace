import React, { useState } from 'react';

import MinimumOffersSettings from './OfferSetting';
import HelpAndSupport from './HelpandSupport';
import NotificationSettings from './Notification';
import ProfileSettings from './Profile';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile setting');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile setting':
        return <ProfileSettings />;
      case 'Account support':
        return <HelpAndSupport />;
      case 'Notification Settings':
        return <NotificationSettings />;
      case 'Offer Settings':
        return <MinimumOffersSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div className="mx-4 mt-6 md:mx-8 lg:mx-16">
      <div className="border-b border-gray-200 mb-4 overflow-x-auto">
        <div className="flex gap-6 md:gap-8 whitespace-nowrap overflow-x-auto">
          {[
            { id: 'profile setting', label: 'Profile Settings' },
            { id: 'Account support', label: 'Account Support' },
            { id: 'Notification Settings', label: 'Notification Settings' },
            { id: 'Offer Settings', label: 'Offer Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-lg font-bold ${
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
      <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md">{renderTabContent()}</div>
    </div>
  );
};

export default Settings;
