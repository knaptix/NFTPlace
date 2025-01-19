import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import CartSidebar from "./Component/CartSidebar";
import Home from "./Component/Home";
import OrderCheckout from "./Component/OrderCheckout";
import TrackOrder from "./Component/TrackOrder";
import InventoryManagement from "./Component/InventoryManagement";
import ReturnOrder from "./Component/ReturnOrder";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  // Update showNavbar condition to hide navbar on return-order route as well
  const showNavbar = location.pathname === '/'
  return (
    <div>
      {showNavbar && (
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
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/return-order" element={<ReturnOrder />} /> 
      </Routes>
    </div>
  );
};

export default App;
