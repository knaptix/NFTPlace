import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import CartSidebar from "./Component/CartSidebar";
import Home from "./Component/Home";
import OrderCheckout from "./Component/OrderCheckout";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      {/* Conditionally render Navbar and CartSidebar */}
      {location.pathname !== "/checkout" && (
        <>
          <Navbar onCartClick={() => setIsCartOpen(true)} />
          <CartSidebar
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<OrderCheckout />} />
      </Routes>
    </div>
  );
};

export default App;
