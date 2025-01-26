import React, { useState } from 'react';
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import BulkProductSearch from "./BulkProductSearch";
import SearchResults from "./SearchResults";
// import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Home = () => {
  const [showSearchResults, setShowSearchResults] = useState(false);
  return (
    <div>
      <HeroSection onSearch={() => setShowSearchResults(true)} />
      {showSearchResults && <SearchResults />}
      <ProductsSection />
      <BulkProductSearch />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default Home;