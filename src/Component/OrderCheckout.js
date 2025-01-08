import React, { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderCheckout = () => {
  const navigate = useNavigate();
  const [showOrderStatus, setShowOrderStatus] = useState(false);
  // Reset state when the component is unmounted
  useEffect(() => {
    return () => setShowOrderStatus(false);
  }, []);

  // Order Status Modal Component
  const OrderStatusModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="text-center">
          <FaCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-gray-600 mb-6">
            Your order has been successfully placed and will be processed soon.
          </p>
          <div className="text-left space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-medium">#ORD123456</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">
                {new Date().toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-medium">$45.00</span>
            </div>
          </div>
          <button
            onClick={() => {
              setShowOrderStatus(false); // Reset modal visibility state
              navigate("/"); // Navigate to home
            }}
            className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gray-100 pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button Row */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <IoArrowBack className="h-6 w-6" />
              <span className="text-lg font-medium">Back to Home</span>
            </button>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Cart and Summary */}
            <div className="lg:col-span-8">
              {/* Order Cart */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Order Cart
                </h3>
                <div className="space-y-6">
                  {/* Cart Item */}
                  <div className="flex space-x-4">
                    <img
                      src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                      alt="Product"
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-800">
                        Premium Quality Dress
                      </h4>
                      <div className="mt-1 text-sm text-gray-500">
                        <p>Size: Small</p>
                        <p>Color: Light Blue</p>
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                            -
                          </button>
                          <span>1</span>
                          <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                            +
                          </button>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800">
                            $36.00
                          </span>
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            $45.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>$36.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>$5.00</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>$4.00</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800">
                        Total
                      </span>
                      <div className="text-right">
                        <span className="text-lg font-semibold text-gray-800">
                          $45.00
                        </span>
                        <button
                          onClick={() => setShowOrderStatus(true)}
                          className="ml-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                        >
                          Proceed to Pay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Customer Details */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Customer Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                      alt="Customer"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        David Kent
                      </h4>
                      <p className="text-sm text-gray-600">
                        10 Previous Orders
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Shipping Address
                    </h4>
                    <p className="text-gray-600">
                      180 North King Street,
                      <br />
                      Northhampton MA 1060
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Billing Address
                    </h4>
                    <p className="text-gray-600">
                      180 North King Street,
                      <br />
                      Northhampton MA 1060
                    </p>
                  </div>

                  <button className="w-full border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Status Modal */}
        {showOrderStatus && <OrderStatusModal />}
      </div>
    </div>
  );
};

export default OrderCheckout;
