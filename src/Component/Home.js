import React from "react";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import BulkProductSearch from "./BulkProductSearch";
// import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <BulkProductSearch />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;
