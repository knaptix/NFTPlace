import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    bio: '',
    walletAddress: '',
    profilePicture: null,
    bannerImage: null,
    twitterName: '',
    instagramName: ''
  });
  const [wallet,setWallet] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle file input changes for profile and banner images
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!profile.username || !profile.email || !profile.bio) {
      toast.error("Please fill out all required fields!");
      return;
    }

    // Check file size for images (max 2MB)
    if (profile.profilePicture && profile.profilePicture.size > 2 * 1024 * 1024) {
      toast.error("Profile picture must be less than 2MB.");
      return;
    }

    if (profile.bannerImage && profile.bannerImage.size > 2 * 1024 * 1024) {
      toast.error("Banner image must be less than 2MB.");
      return;
    }

    const formData = new FormData();
    formData.append('email', profile.email);
    formData.append('username', profile.username);
    formData.append('bio', profile.bio);
    formData.append('twitterName', profile.twitterName);
    formData.append('instagramName', profile.instagramName);
    formData.append('walletAddress', profile.walletAddress);

    if (profile.profilePicture) {
      formData.append('profilePicture', profile.profilePicture);
    }
    if (profile.bannerImage) {
      formData.append('bannerImage', profile.bannerImage);
    }

    const token = localStorage.getItem("walletToken"); // Get the wallet token from localStorage

    setIsLoading(true); // Show loader while submitting the form

    try {
      const response = await axios.put('https://nywnftbackend-production.up.railway.app/api/user/update-profile', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsLoading(false); // Hide loader
      toast.success("Profile updated successfully!"); // Show success toast
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      setIsLoading(false); // Hide loader
      toast.error("Error updating profile. Please try again!"); // Show error toast
      console.error('Error updating profile:', error);
    }
  };
 

  useEffect(()=>{
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("walletToken");
        const response = await axios.get('https://nywnftbackend-production.up.railway.app/api/user/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);
        setWallet(response.data?.data);
        // setProfile(response.data?.data)
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  },[])
  console.log(wallet,";dddd");
  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto py-8">
        <div className="w-full bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* Profile Picture Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0">
                {profile.profilePicture && (
                  <img
                    src={URL.createObjectURL(profile.profilePicture)}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                )}
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-base font-medium">Profile Picture</h2>
                <p className="text-sm text-gray-500">PNG file (max. 2MB)</p>
              </div>
              <div className="flex space-x-3">
                <label className="text-sm text-gray-600 hover:text-gray-900 flex items-center cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    name="profilePicture"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  📤 Upload
                </label>
                {/* <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                  ❌ Delete
                </button> */}
              </div>
            </div>

            {/* Profile Banner */}
            <div className="w-full h-32 bg-gray-200 rounded-lg relative">
              {profile.bannerImage && (
                <img
                  src={URL.createObjectURL(profile.bannerImage)}
                  alt="Banner"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
              <div className="absolute bottom-3 left-3 text-xs sm:text-sm">
                <h2 className="font-medium">Profile Banner</h2>
                <p className="text-gray-500">1400 x 350 px (Max. 2MB)</p>
              </div>
              <div className="absolute bottom-3 right-3 flex space-x-3">
                <label className="text-sm text-gray-600 hover:text-gray-900 flex items-center cursor-pointer">
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    name="bannerImage"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  📤 Upload
                </label>
                {/* <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center">
                  ❌ Delete
                </button> */}
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">E-mail Address</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
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
                  <input
                    type="text"
                    name="twitterName"
                    value={profile.twitterName}
                    onChange={handleInputChange}
                    placeholder="Enter Twitter Username"
                    className="px-4 py-1 border border-green-500 text-green-500 rounded-full text-sm"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                    IG
                  </div>
                  <input
                    type="text"
                    name="instagramName"
                    value={profile.instagramName}
                    onChange={handleInputChange}
                    placeholder="Enter Instagram Username"
                    className="px-4 py-1 border border-green-500 text-green-500 rounded-full text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Wallet Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Wallet address</label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  value={wallet?.walletAddress}
                  readOnly
                  className="block w-full rounded-md border border-gray-300 px-3 py-2 bg-gray-50"
                />
                <button className="ml-2 p-2 text-gray-400 hover:text-gray-600">
                  🔗 Copy
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button 
                type="submit" 
                className="px-6 py-3.5 bg-[#02082B] text-white rounded-2xl font-medium shadow-sm hover:bg-[#02082B]/90 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
