import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import iPhone from "../assets/R.jpeg";

const InventoryManagement = () => {
  const [products] = useState([
    {
      id: 1,
      image: iPhone,
      name: "Solid Lapel Neck Blouse",
      category: "CLOTHING",
      sku: "TS38790",
      variant: "11 (Varies on: Size, Color)",
      price: "$24",
      status: "Active",
    },
    {
      id: 2,
      image: iPhone,
      name: "Point Toe Heeled Pumps",
      category: "SHOES",
      sku: "TS38843",
      variant: "4 (Varies on: Size)",
      price: "$56",
      status: "Out of Stock",
    },
    {
      id: 3,
      image: iPhone,
      name: "Solid Rib-knit Crop Cami Top",
      category: "CLOTHING",
      sku: "TS12334",
      variant: "8 (Varies on: Size, Color)",
      price: "$19",
      status: "Out of Stock",
    },
    {
      id: 4,
      image: iPhone,
      name: "Crop Tank Top",
      category: "CLOTHING",
      sku: "TS77545",
      variant: "4 (Varies on: Size, Material)",
      price: "$19",
      status: "Active",
    },
    {
      id: 5,
      image: iPhone,
      name: "V-Neck Rib-knit Top",
      category: "CLOTHING",
      sku: "TS54358",
      variant: "7 (Varies on: Color, Material)",
      price: "$13",
      status: "Active",
    },
    {
      id: 6,
      image: iPhone,
      name: "Minimalist Flap Chain Bag",
      category: "BAG",
      sku: "TS00213",
      variant: "2 (Varies on: Color)",
      price: "$32",
      status: "Active",
    },
    {
      id: 7,
      image: iPhone,
      name: "Front Crop Top",
      category: "CLOTHING",
      sku: "TS36940",
      variant: "2 (Varies on: Color)",
      price: "$17",
      status: "Active",
    },
    {
      id: 8,
      image: iPhone,
      name: "Schiffy Drawstring Crop Top",
      category: "CLOTHING",
      sku: "TS13346",
      variant: "5 (Varies on: Size, Color)",
      price: "$21",
      status: "Active",
    },
    {
      id: 9,
      image: iPhone,
      name: "Pineapple Earrings",
      category: "JEWELRY",
      sku: "TS84323",
      variant: "2 (Varies on: Color)",
      price: "$8",
      status: "Out of Stock",
    },
    {
      id: 10,
      image: iPhone,
      name: "Floral Shirred Top",
      category: "CLOTHING",
      sku: "TS84432",
      variant: "8 (Varies on: Size, Color)",
      price: "$19",
      status: "Active",
    },
    {
        id: 11,
        image: iPhone,
        name: "Floral Shirred Top",
        category: "CLOTHING",
        sku: "TS84432",
        variant: "8 (Varies on: Size, Color)",
        price: "$19",
        status: "Active",
      },
      {
        id: 12,
        image: iPhone,
        name: "Iphone 16 pro",
        category: "CLOTHING",
        sku: "TS84432",
        variant: "8 (Varies on: Size, Color)",
        price: "$19",
        status: "Active",
      },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedItems(selectAll ? [] : products.map((product) => product.id));
  };

  const handleSelectItem = (productId) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(productId)) {
        return prevSelected.filter((id) => id !== productId);
      } else {
        return [...prevSelected, productId];
      }
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDropdownClick = (productId) => {
    setActiveDropdown(activeDropdown === productId ? null : productId);
  };

  const handleStatusChange = (productId, newStatus) => {
    // Add your status change logic here
    console.log(`Changing status of product ${productId} to ${newStatus}`);
    setActiveDropdown(null);
  };

  const handleDeleteProduct = (productId) => {
    // Add your delete logic here
    console.log(`Deleting product ${productId}`);
    setActiveDropdown(null);
  };

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-4">
      {/* Back to Home Button */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-gray-700 hover:text-orange-500">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Heading with Icon */}
      <div className="flex items-center mb-6">
        <svg
          className="w-8 h-8 mr-2 text-orange-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
          />
        </svg>
        <h1 className="text-2xl font-bold text-orange-500">Inventory</h1>
      </div>

      {/* Search and Actions Row */}
      <div className="flex justify-between items-center mb-4">
        {/* Search Bar */}
        <div className="w-1/3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search products..."
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg">
            Export
          </button>
          <button className="bg-orange-500 hover:bg-white hover:text-orange-500 border hover:border-orange-500 text-white px-4 py-2 rounded-lg">
            New Product
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-orange-500">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAll}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3 text-center">Product Name</th>
              <th scope="col" className="px-6 py-3 text-center">Category</th>
              <th scope="col" className="px-6 py-3 text-center">SKU</th>
              <th scope="col" className="px-6 py-3 text-center">Variant</th>
              <th scope="col" className="px-6 py-3 text-center">Price</th>
              <th scope="col" className="px-6 py-3 text-center">Status</th>
              <th scope="col" className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product) => (
              <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(product.id)}
                      onChange={() => handleSelectItem(product.id)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={product.image || 'https://via.placeholder.com/40'}
                      alt={product.name}
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 text-center">{product.name}</td>
                <td className="px-6 py-4 text-center">{product.category}</td>
                <td className="px-6 py-4 text-center">{product.sku}</td>
                <td className="px-6 py-4 text-center">{product.variant}</td>
                <td className="px-6 py-4 text-center">{product.price}</td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-block w-[120px] text-center px-4 py-1 rounded-full text-sm font-semibold ${
                      product.status === 'Active'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                  >
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 relative text-center">
                  <div ref={dropdownRef}>
                    <button 
                      onClick={() => handleDropdownClick(product.id)}
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    
                    <div 
                      className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 transition-all duration-200 ease-in-out transform origin-top-right ${
                        activeDropdown === product.id ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        <button
                          onClick={() => handleStatusChange(product.id, 'Active')}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <span className="inline-block w-full px-4 py-1 rounded-full text-center text-sm font-semibold bg-green-100 text-green-600">
                            Active
                          </span>
                        </button>
                        <button
                          onClick={() => handleStatusChange(product.id, 'Out of Stock')}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          <span className="inline-block w-full px-4 py-1 rounded-full text-sm text-center font-semibold bg-red-100 text-red-600">
                            Out of Stock
                          </span>
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="w-full px-4 py-2 text-sm text-center text-red-600 hover:bg-red-50 font-medium"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4">
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing <span className="font-semibold text-gray-900">
            {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredProducts.length)}
          </span> of <span className="font-semibold text-gray-900">{filteredProducts.length}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 ${
                currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
              }`}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                  currentPage === index + 1
                    ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
                    : 'text-gray-500 bg-white hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 ${
                currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default InventoryManagement;