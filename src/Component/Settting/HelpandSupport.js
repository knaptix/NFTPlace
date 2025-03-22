import React, { useState } from 'react';

const HelpAndSupport = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8 space-y-6">
      <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
        {/* General Help Section */}
        <div className="border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">General Help</h2>
          <p className="text-sm text-gray-600">
            Visit our{' '}
            Help & Support page
            {' '}to learn how to get started with buying, selling, and creating.
          </p>
        </div>

        {/* Raise Ticket Section */}
        <div className="border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Raise Ticket</h2>
          <p className="text-sm text-gray-600">
            Can't find the answers you're looking for?<br />
            You can{' '}
            Raise a ticket
            {' '}here.
          </p>
        </div>

        {/* Compromised Account Section */}
        <div className="border-b pb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Help with a Compromised Account</h2>
          <p className="text-sm text-gray-600 mb-4">
            If you believe your account has been compromised, let us know and we can lock your account.
            This will disable items in your wallet from being bought, sold, or transferred using NYWNFT.
          </p>

          {/* Text Area */}
          <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Describe your issue"
          />

          {/* Checkbox */}
          <div className="mt-4 flex items-start gap-2">
            <input
              type="checkbox"
              id="verification"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <label htmlFor="verification" className="text-sm text-gray-700 cursor-pointer">
              I understand I must complete an identity verification process to unlock my account.
            </label>
          </div>

          {/* Lock Account Button */}
          <button className="mt-4 w-full sm:w-auto px-6 py-2 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100 transition-colors">
            Lock Account
          </button>
        </div>

        {/* Cancel Listings Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Cancel All Ethereum Listings & Offers</h2>
          <p className="text-sm text-gray-600 mb-4">
            This method saves gas compared to cancelling an individual listing or offer.
          </p>

          <button className="w-full sm:w-auto px-6 py-2 bg-red-50 text-red-600 rounded-lg text-sm hover:bg-red-100 transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
