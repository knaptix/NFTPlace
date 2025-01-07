import Navbar from "./Component/Navbar";

import './styles/swiper-custom.css';


import CartSidebar from "./Component/CartSidebar";

import React, { useState } from "react";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import OrderCheckout from "./Component/OrderCheckout";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [setShowCheckout] = useState(false);

  return (
    <div>
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setShowCheckout(true);
          setIsCartOpen(false); // Close cart when proceeding to checkout
        }}
      />
      
      <Routes>
        <Route path="/checkout" element={<OrderCheckout/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  );
};

export default App;
