import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { FaWallet, FaEthereum } from "react-icons/fa";
import { SiCoinbase, SiWalletconnect } from "react-icons/si";
import { ethers } from "ethers";

const WalletLogin = ({ isOpen, onClose }) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const navigate = useNavigate();

  const connectMetaMask = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        setIsConnected(true);
        navigate("/profilepage", { state: { walletAddress: address } });
      } catch (error) {
        console.error("MetaMask connection failed:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to continue.");
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.listAccounts().then((accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        }
      });

      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setWalletAddress("");
          setIsConnected(false);
        }
      });
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="relative w-full max-w-md p-6 bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-200">
          <BiX className="w-6 h-6" />
        </button>
        <div className="text-center mb-6">
          <FaWallet className="mx-auto text-4xl text-blue-500 mb-2" />
          <h2 className="text-2xl font-semibold">Connect to NWYFT</h2>
        </div>
        <div className="space-y-4">
          <button
            onClick={connectMetaMask}
            className={`w-full flex items-center justify-between p-3 ${
              isConnected ? "bg-green-500" : "bg-gray-800 hover:bg-gray-700"
            } rounded-lg`}
            disabled={isConnected}
          >
            <div className="flex items-center">
              <FaEthereum className="w-8 h-8 mr-3 text-orange-500" />
              <span className="text-white">{isConnected ? "Connected" : "MetaMask"}</span>
            </div>
          </button>
          <button className="w-full flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg">
            <SiCoinbase className="w-8 h-8 mr-3 text-blue-500" />
            <span className="text-white">Coinbase Wallet</span>
          </button>
          <button className="w-full flex items-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg">
            <SiWalletconnect className="w-8 h-8 mr-3 text-blue-400" />
            <span className="text-white">WalletConnect</span>
          </button>
        </div>
        {walletAddress && (
          <p className="mt-4 text-green-400 text-center">Connected: {walletAddress}</p>
        )}
        <div className="mt-6 text-center">
          <span className="text-gray-400 text-sm">More wallet options</span>
          <div className="mt-3 flex items-center bg-gray-800 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 bg-gray-800 text-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-blue-500 text-white">→</button>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500 text-center">
          By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default WalletLogin;
