import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { CartContext } from "./CartContext";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // Automatically process the order when the component mounts, if cart exists
  useEffect(() => {
    const processOrder = async () => {
      if (cart.length === 0) return;
      setLoading(true);
      try {
        // Process the first product in the cart
        const product = cart[0];
        const response = await fetch("http://localhost:5000/scrape_amazon", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: product.title })
        });
        const data = await response.json();

        if (data.payment_success) {
          setOrderDetails(data.order_details);
          setErrorMsg(null);
          // Optionally clear the cart after successful order:
          // clearCart();
        } else {
          setOrderDetails(null);
          setErrorMsg(data.error || "Order not placed");
        }
      } catch (error) {
        console.error("Error processing order", error);
        setErrorMsg("Error processing order. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    processOrder();
  }, [cart]);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        {loading ? (
          <p className="text-lg">Processing your order...</p>
        ) : errorMsg ? (
          <>
            <FaTimesCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Not Placed</h2>
            <p className="text-gray-600 mb-6">{errorMsg}</p>
          </>
        ) : orderDetails ? (
          <>
            <FaCheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Your order has been successfully placed.
            </p>
            <div className="text-left space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">{orderDetails.order_id || "#ORD123456"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium">
                  ₹{cart.reduce((sum, product) => sum + product.price, 0)}
                </span>
              </div>
            </div>
          </>
        ) : (
          <p className="text-lg">No order details available.</p>
        )}
        <button
          onClick={handleBackToHome}
          className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
