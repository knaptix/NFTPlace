import React from "react";

import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import AuctionCards from "./Component/CurrentBid/CurrentBid";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";


const App = () => {
  return (
    <div>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CurrentBid" element={<AuctionCards />} />
      </Routes>
      <Footer />
     
    </div>
  );
};

export default App;