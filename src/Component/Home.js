import React, { useContext, useState } from "react";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
// import BulkProductSearch from "./BulkProductSearch";
import SearchResults from "./SearchResults";
// import Footer from "./Footer";
import CartSidebar from "./CartSidebar";
import { CartContext } from "./CartContext";

const Home = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  // When a product is added, update context and open the sidebar
  const handleAddToCart = (product) => {
    addToCart(product);
    setIsCartSidebarOpen(true);
  };

  const handleRemoveFromCart = (productTitle) => {
    removeFromCart(productTitle);
  };

  const handleCloseSidebar = () => {
    setIsCartSidebarOpen(false);
  };

  return (
    <div>
      {/* Pass onAddToCart and setSearchedProduct to HeroSection */}
      <HeroSection onAddToCart={handleAddToCart} setSearchedProduct={setSearchedProduct} />

      {/* Pass onAddToCart to SearchResults */}
      <SearchResults product={searchedProduct} onAddToCart={handleAddToCart} />

      {/* Other sections */}
      <ProductsSection />
      {/* <BulkProductSearch />
      <Footer /> */}

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartSidebarOpen}
        onClose={handleCloseSidebar}
        cartItems={cart}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default Home;
