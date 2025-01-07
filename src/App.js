import Navbar from "./Component/Navbar"
import HeroSection from "./Component/HeroSection"
import ProductsSection from "./Component/ProductsSection"
import './styles/swiper-custom.css';
import Testimonials from "./Component/Testimonials";
import Footer from "./Component/Footer";
import BulkProductSearch from "./Component/BulkProductSearch";
import CartSidebar from "./Component/CartSidebar";
import OrderCheckout from "./Component/OrderCheckout";
import React, { useState } from "react";


const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    setIsCartOpen(false); // Close cart when proceeding to checkout
  };
  return (
    <div>
      <Navbar onCartClick={() => setIsCartOpen(true)}/>
      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => setShowCheckout(true)}
      />

      <OrderCheckout 
        isVisible={showCheckout}
        onClose={() => setShowCheckout(false)}
      />
      <HeroSection />
      <ProductsSection />
      <BulkProductSearch/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
