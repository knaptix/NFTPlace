import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Component/Navbar";
import CartSidebar from "./Component/CartSidebar";
import Home from "./Component/Home";
import OrderCheckout from "./Component/OrderCheckout";
import TrackOrder from "./Component/TrackOrder";

import ReturnOrder from "./Component/ReturnOrder";
import SalesPage from "./Component/SalesPage";
import InventoryManagement from "./Component/InventoryManagement";

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
        <Route path="/sales-page" element={<SalesPage />} />
        <Route path="/return" element={<ReturnOrder />} /> 
      </Routes>
    </div>
  );
};

export default App;
