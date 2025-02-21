import React, { useState } from 'react';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    bio: '',
    walletAddress: '0x8c279b9b60c14...',
  });

  const [socialConnections, setSocialConnections] = useState({
    xApp: false,
    instagram: false,
  });

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto py-8">
        <div className="w-full bg-white rounded-lg shadow-md p-6">
          {/* Profile Picture Section */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="text-center sm:text-left">
                <h2 className="text-base font-medium">Profile Picture</h2>
                <p className="text-sm text-gray-500">PNG file (max. 2MB)</p>
              </div>
              <div className="flex space-x-3">
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                  📤 Upload
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                  ❌ Delete
                </button>
              </div>
            </div>

            {/* Profile Banner */}
            <div className="w-full h-32 bg-gray-200 rounded-lg relative">
              <div className="absolute bottom-3 left-3 text-xs sm:text-sm">
                <h2 className="font-medium">Profile Banner</h2>
                <p className="text-gray-500">1400 x 350 px (Max. 2MB)</p>
              </div>
              <div className="absolute bottom-3 right-3 flex space-x-3">
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                  📤 Upload
                </button>
                <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                  ❌ Delete
                </button>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-mail Address</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                rows={3}
                placeholder="Tell me about your story"
              />
            </div>

            {/* Social Media Integration */}
            <div>
              <h3 className="text-lg font-medium mb-4">Integrate social media accounts</h3>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">𝕏</span>
                  </div>
                  <button className="px-4 py-1 border border-green-500 text-green-500 rounded-full text-sm hover:bg-green-50">
                    Connect
                  </button>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  <button className="px-4 py-1 border border-green-500 text-green-500 rounded-full text-sm hover:bg-green-50">
                    Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Wallet Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Wallet address</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  value={profile.walletAddress}
                  readOnly
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-50"
                />
                <button className="ml-2 p-2 text-gray-400 hover:text-gray-600">
                  🔗 Copy
                </button>
              </div>
            </div>

            {/* Verification Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Account & Collection verification</h3>
              <p className="text-sm text-gray-600 mb-4">
              A verified account has a badge that appears next to the account name. Below are the minimum requirements to apply for verification and badging. Approval is not guaranteed. 
                <a href="#" className="text-blue-600 hover:underline ml-1">Learn more</a>
              </p>
             <p className="text-sm text-gray-600 mb-4">  Applying for account verification will also send any eligible collections for badge review. Creators don’t need to separately apply for account verification and collection badging. To be eligible to apply, your account must have</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">✔</div>
                  <span className="text-sm">A profile picture & banner image</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <span className="text-sm">A verified email address</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                  <span className="text-sm">Ownership of at least one collection with 25 ETH+ of secondary volume</span>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <button className="px-6 py-3.5 bg-[#02082B] text-white rounded-2xl font-medium shadow-sm hover:bg-[#02082B]/90 transition-colors">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
