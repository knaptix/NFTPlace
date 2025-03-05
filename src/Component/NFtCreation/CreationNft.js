import React, { useEffect, useState } from "react";
import { ArrowLeft, Upload } from "lucide-react";
import CollectionDropdown from "./CreateCollectionDropDown";
import { getAllCategory } from "../../services/api";

const NFTCreationForm = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    collection: "create",
    name: "",
    description: "",
    category: "",
    traits: [],
    price: "",
    supply: "",
    putOnSale: false,
    unlockAfterPurchase: false,
    expiration: "",
    royalties: "",
  });
  useEffect(() => {
    getAllCategory().then((res) => [setCategories(res?.data)]);
  }, []);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6">
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 ml-7 text-2xl font-bold pt-6 pb-4 hover:text-gray-600"
      >
        <ArrowLeft className="w-6 h-6 text-gray-800" /> Back
      </button>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Image Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 h-[400px]">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-40 h-40 object-cover rounded-lg mb-2"
            />
          ) : (
            <Upload className="w-12 h-12 text-gray-400 mb-2" />
          )}
          <p className="text-sm text-gray-500">
            PNG, JPG, WEBP, MP4, or MP3. Max 100MB
          </p>
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp, video/mp4, audio/mp3"
            onChange={handleImageChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            Upload
          </label>
        </div>

        {/* Right Column - Form */}
        <div className="space-y-6">
          <label className="block font-medium">Choose your collection *</label>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`p-4 border rounded-lg cursor-pointer text-center ${
                formData.collection === "create"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
              onClick={() => setFormData({ ...formData, collection: "create" })}
            >
              Create ERC-1155
            </div>
            <div
              className={`p-4 border rounded-lg cursor-pointer text-center ${
                formData.collection === "bluewaves"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200"
              }`}
              onClick={() =>
                setFormData({ ...formData, collection: "bluewaves" })
              }
            >
              Blue Waves ETH
            </div>
          </div>

          <div>
            <CollectionDropdown />
          </div>

          <input
            type="text"
            placeholder="Name *"
            className="w-full p-2 border rounded-md"
          />
          <textarea
            placeholder="Description *"
            className="w-full p-2 border rounded-md"
          ></textarea>
          <select className="w-full p-2 border rounded-md">
            {categories.map((category) => (
              <option key={category._id} value={category.name.toLowerCase()}>
                {category.name}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Type"
              className="w-1/2 p-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-2 border rounded-md"
            />
          </div>
          <button className="text-blue-600 text-sm">+ Add traits</button>

          <div className="flex justify-between items-center">
            <span>Put on sale</span>
            <input type="checkbox" className="toggle" />
          </div>

          <input
            type="number"
            placeholder="Enter Price"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Supply *"
            className="w-full p-2 border rounded-md"
          />

          <div className="flex justify-between items-center">
            <span>Unlock after purchase</span>
            <input type="checkbox" className="toggle" />
          </div>
          <input
            type="text"
            placeholder="Digital key code or link"
            className="w-full p-2 border rounded-md"
          />

          <input
            type="text"
            placeholder="Date of listing's expiration"
            className="w-full p-2 border rounded-md"
          />
          <input
            type="text"
            placeholder="Royalties (e.g., 10%)"
            className="w-full p-2 border rounded-md"
          />

          <button className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800">
            Create NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default NFTCreationForm;
