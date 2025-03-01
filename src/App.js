import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import AuctionCards from "./Component/CurrentBid/CurrentBid";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import CartSummary from "./Component/Cart/Cart";
import NFTCreation from "./Component/NFtCreation/Creation";
import SmartContractForm from "./Component/NFtCreation/Drop";
import NFTCreationForm from "./Component/NFtCreation/CreationNft";
import NFTDetailPage from "./Component/Individual/NftBuy";
import NFTCollectionPage from "./Component/IndividualCollection/Collection";
import ProfilePage from "./Component/IndividualCreatorPage/IndividualCreate";
import HelpCenter from "./Component/HelpandSupport/Support";
import Favourite from "./Component/Favourite/Favourite";
import Settings from "./Component/Settting/Setting";
import { useWallet, WalletProvider } from "./Component/walletContext";
import ProtectedRoute from "./Component/ProtectedRoute";

const App = () => {

  const { walletToken, walletAddress } = useWallet(); // Access the token

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
      <WalletProvider>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CurrentBid" element={<AuctionCards />} />
          <Route path="/CreateNFt" element={
            <ProtectedRoute>
              <NFTCreation />
            </ProtectedRoute>
          } />
          <Route path="/drop" element={
            <ProtectedRoute>
              <SmartContractForm />
            </ProtectedRoute>
          } />
          <Route path="/create" element={
            <ProtectedRoute>
              <NFTCreationForm />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<CartSummary />} />
          <Route path="/detail" element={<NFTDetailPage />} />
          <Route path="/collection" element={<NFTCollectionPage />} />
          <Route path="/profilepage" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="/favourite" element={<Favourite />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </WalletProvider>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default App;
