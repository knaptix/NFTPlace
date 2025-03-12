import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { WalletProvider } from "./Component/walletContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WalletProvider>
      {" "}
      {/* Wrap App here */}
      <BrowserRouter>
        <App />
    
      </BrowserRouter>
    </WalletProvider>
  </React.StrictMode>
);
