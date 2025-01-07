import React from "react";

const OrderCheckout = ({ isVisible, onClose, onBack }) => {
  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <svg
              className="h-6 w-6 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Status</h2>
          <div className="flex items-center text-green-500 mb-2">
            <svg
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Order Confirmed</span>
          </div>
          <p className="text-gray-600">
            21st March 2021 at 10:34 PM
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer's Cart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Customer's Cart
              </h3>
              {/* Product List */}
              <div className="space-y-6">
                {/* Product Item */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-24 h-24">
                    <img
                      src="https://i.ibb.co/84qQR4p/Rectangle-10.png"
                      alt="Product"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-gray-800">
                      Premium Quality Dress
                    </h4>
                    <div className="mt-2 space-y-1">
                      <p className="text-sm text-gray-600">
                        Style: Italic Minimal Design
                      </p>
                      <p className="text-sm text-gray-600">Size: Small</p>
                      <p className="text-sm text-gray-600">Color: Light Blue</p>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <div className="text-gray-800">
                        <span className="font-semibold">$36.00</span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          $45.00
                        </span>
                      </div>
                      <div className="text-gray-600">Qty: 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Order Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">$56.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Discount (STUDENT)
                  </span>
                  <span className="text-gray-800">-$28.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-800">$8.00</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-800">Total</span>
                    <span className="font-semibold text-gray-800">$36.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Customer Details
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://i.ibb.co/5TSg7f6/Rectangle-18.png"
                      alt="Customer"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">David Kent</h4>
                      <p className="text-sm text-gray-600">10 Previous Orders</p>
                    </div>
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
    </div>
  );
};

export default OrderCheckout;
