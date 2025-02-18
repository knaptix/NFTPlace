import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import AuctionCards from "./Component/CurrentBid/CurrentBid";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import CartSummary from "./Component/Cart/Cart";
import NFTCreation from "./Component/NFtCreation/Creation";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CurrentBid" element={<AuctionCards />} />
        <Route path="/CreateNFt" element={<NFTCreation />} />
        <Route path="/Cart" element={<CartSummary />} />
      </Routes>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default App;
