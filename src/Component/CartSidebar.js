import React from "react";
import { IoCloseOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose, cartItems = [], onRemoveFromCart, onCheckout }) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <IoCloseOutline className="h-6 w-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div
            className="flex-1 overflow-y-auto p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <li key={product.title} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.main_image}
                        alt={product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{product.title}</h3>
                          <p className="ml-4">₹{product.price}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onRemoveFromCart(product.title);
                          }}
                          className="font-medium text-orange-500 hover:text-gray-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
              <p>Subtotal</p>
              <p>₹{cartItems.reduce((total, item) => total + item.price, 0)}</p>
            </div>
            {/* <Link to="/checkout" state={{ cartItems }}>
              <button
                onClick={onCheckout}
                className="w-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 px-6 py-3 border hover:border-orange-500 rounded-md transition-colors"
              >
                Checkout
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
