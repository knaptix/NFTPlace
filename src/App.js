import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import OrderConfirmation from "./Component/OrderConfirmation";
import TrackOrder from "./Component/TrackOrder";
import ReturnOrder from "./Component/ReturnOrder";
import SalesPage from "./Component/SalesPage";
import InventoryManagement from "./Component/InventoryManagement";
import Footer from "./Component/Footer";
import NewYorkWorldSection from "./Component/NewYork";

const App = () => {
  return (
   <>
      <Navbar />
      <NewYorkWorldSection/>
      <Footer />
      
      </>
    
  );
};

export default App;
