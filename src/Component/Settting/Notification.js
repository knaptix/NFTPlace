import React, { useState } from "react";

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    itemSold: true,
    bidActivity: true,
    dealsActivity: true,
    dealsOffer: true,
    priceChanges: true,
    auctionExpiration: true,
    outbid: true,
    ownedItemsUpdate: true,
    successfulPurchase: true,
    successfulMint: true,
    minimumBidThreshold: "0.0005",
  });

  const handleToggle = (setting) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }));
  };

  const handleThresholdChange = (e) => {
    setSettings((prev) => ({
      ...prev,
      minimumBidThreshold: e.target.value,
    }));
  };

  const notificationItems = [
    {
      id: "itemSold",
      label: "Item sold",
      description: "When someone purchased one of your items",
    },
    {
      id: "bidActivity",
      label: "Bid activity",
      description: "When someone bids on one of your items",
    },
    {
      id: "dealsActivity",
      label: "Deals activity",
      description: "When someone accepted one of your deals",
    },
    {
      id: "dealsOffer",
      label: "Deals offer",
      description: "When someone offers a deal on your items",
    },
    {
      id: "priceChanges",
      label: "Price changes",
      description: "When an item you made an offer on changes in price",
    },
    {
      id: "auctionExpiration",
      label: "Auction expiration",
      description: "When a timed auction you created ends",
    },
    {
      id: "outbid",
      label: "Outbid",
      description: "When an offer you placed is exceeded by another user",
    },
    {
      id: "ownedItemsUpdate",
      label: "Owned items update",
      description:
        "When a significant update occurs for one of the items you have purchased on NYWNET",
    },
    {
      id: "successfulPurchase",
      label: "Successful purchase",
      description: "When you successfully buy an item",
    },
    {
      id: "successfulMint",
      label: "Successful mint",
      description: "When you successfully mint an item",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full px-4 py-8">
        <div className="w-full bg-white rounded-lg shadow">
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              {notificationItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 border-b border-gray-200"
                >
                  <div className="space-y-1 flex-1 mr-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                  <button
                    onClick={() => handleToggle(item.id)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                      settings[item.id] ? "bg-indigo-600" : "bg-gray-200"
                    }`}
                  >
                    <span className="sr-only">Toggle {item.label}</span>
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        settings[item.id] ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}

              <div className="pt-4">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Minimum Bid Threshold
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Receive notifications only when you receive offers with a
                  value greater than or equal to this amount of ETH
                </p>
                <input
                  type="text"
                  value={settings.minimumBidThreshold}
                  onChange={handleThresholdChange}
                  className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="eg 0.0005"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button className="px-6 py-3.5 bg-[#02082B] text-white rounded-2xl font-medium shadow-sm hover:bg-[#02082B]/90 transition-colors">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
