import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Portfolio = ({ isActive = false, onClick = () => {} }) => {
  const [formData, setFormData] = useState({
    title: "",
    productName: "",
    ProductDeployedLink: "", // Kept as a string
    Category: "",
    Description: "",
  });

  const [loading, setLoading] = useState(false);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  // Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isFormSubmitting) {
      toast.info("Form is already being submitted.");
      return;
    }

    setLoading(true);
    setIsFormSubmitting(true);

    try {
      await axios.post(
        "https://renderverseadminboardbackend-1.onrender.com/api/architecture/upload", // Direct URL
        formData
      );

      toast.success("Project added successfully!");

      // Reset form
      setFormData({
        title: "",
        productName: "",
        ProductDeployedLink: "", // Reset as string
        Category: "",
        Description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(`Error submitting form: ${error.message}`);
    } finally {
      setLoading(false);
      setIsFormSubmitting(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        <ToastContainer />
        <button
          className={`w-full p-3 mb-6 rounded-lg font-semibold text-lg ${
            isActive ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
          }`}
          onClick={onClick}
        >
          Add Project
        </button>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter project title"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Product Name</label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter product name"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Category</label>
            <input
              type="text"
              name="Category"
              value={formData.Category}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter category"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">Description</label>
            <textarea
              name="Description"
              value={formData.Description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter description"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Deployed Link</label>
            <input
              type="text"
              name="ProductDeployedLink"
              value={formData.ProductDeployedLink}
              onChange={handleInputChange} // Keep it as a string
              className="w-full p-2 border rounded-md"
              placeholder="Enter deployed links (comma-separated)"
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="py-2 px-6 bg-gray-400 text-white rounded-md"
              onClick={onClick}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-6 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
              disabled={loading || isFormSubmitting}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Portfolio;
