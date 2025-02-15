import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import NewYorkWorldSection from "./Component/NewYork";
import StatsPanel from "./Component/StatsPanel";
import Swip from "./Component/Swip";
import NFTMarketplace from "./Component/NFtMarketPlace";


const App = () => {
  return (
    <div>
      <Navbar />
      <NewYorkWorldSection />
      <Swip />
      <NFTMarketplace />
      <StatsPanel />
      <Footer />
    </div>
  );
};

export default App;