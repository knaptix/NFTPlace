import React, { useState } from "react";
import { Link } from "react-router-dom";
import iPhone from "../assets/R.jpeg";

const ReturnOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Sample order data - replace with your actual data
  const orders = [
    {
      id: "ORD001",
      image: iPhone,
      productName: "Nike Air Max",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-20",
      quantity: 1,
      price: "$129.99",
      status: "Delivered",
      orderNumber: "#12345",
      customerName: "John Doe",
    },
    {
      id: "ORD002",
      image: iPhone,
      productName: "Nike Air Max",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-20",
      quantity: 50,
      price: "$129.99",
      status: "Delivered",
      orderNumber: "#12345",
      customerName: "John Doe",
    },
    {
      id: "ORD003",
      image: iPhone,
      productName: "Nike Air Max",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-20",
      quantity: 16,
      price: "$129.99",
      status: "Delivered",
      orderNumber: "#12345",
      customerName: "John Doe",
    },
    {
      id: "ORD004",
      image: iPhone,
      productName: "Nike Air Max",
      orderDate: "2024-01-15",
      deliveryDate: "2024-01-20",
      quantity: 4,
      price: "$129.99",
      status: "Delivered",
      orderNumber: "#12345",
      customerName: "John Doe",
    },
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleReturnOrder = (orderId) => {
    // Implement return order logic here
    console.log(`Initiating return for order ${orderId}`);
  };

  // Filter orders based on search
  const filteredOrders = orders.filter(
    (order) =>
      order.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredOrders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      {/* Back to Home Button */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-gray-700 hover:text-orange-500"
        >
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        <h1 className="text-2xl font-bold text-orange-500">Return Order</h1>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between items-center mb-4">
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
              placeholder="Search orders..."
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-orange-500">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Order Number
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Product
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Delivery Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((order) => (
              <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-center font-medium text-gray-900">
                  {order.orderNumber}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 mr-3">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={order.image || "https://via.placeholder.com/40"}
                        alt={order.productName}
                      />
                    </div>
                    <span>{order.productName}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-center">{order.customerName}</td>
                <td className="px-6 py-4 text-center">{order.orderDate}</td>
                <td className="px-6 py-4 text-center">{order.deliveryDate}</td>
                <td className="px-6 py-4 text-center">{order.quantity}</td>
                <td className="px-6 py-4 text-center">{order.price}</td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`inline-block w-[120px] text-center px-4 py-1 rounded-full text-sm font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => handleReturnOrder(order.id)}
                    className="font-medium text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Return Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4">
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredOrders.length)}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {filteredOrders.length}
          </span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          <li>
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
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
                    ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                    : "text-gray-500 bg-white hover:bg-gray-100"
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
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

export default ReturnOrder;
