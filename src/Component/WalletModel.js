import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { FaWallet, FaEthereum } from "react-icons/fa";
import { SiCoinbase, SiWalletconnect, SiMeta } from "react-icons/si";
import { ethers } from "ethers";
import { useWallet } from "./walletContext";

const WalletLogin = ({ isOpen, onClose, darkMode }) => {
  const [localWalletAddress, setLocalWalletAddress] = useState("");
  const { authenticateToken, isWalletConnected, walletAddress } = useWallet();
  const navigate = useNavigate();

  // Reset local state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setLocalWalletAddress("");
    } else if (walletAddress) {
      setLocalWalletAddress(walletAddress);
    }
  }, [isOpen, walletAddress]);

  const connectMetaMask = async () => {
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const address = accounts[0];
        setLocalWalletAddress(address);

        try {
          const success = await authenticateToken(address);
          if (success) {
            onClose();
            navigate('/profilepage');
          } else {
            setLocalWalletAddress("");
            alert('Failed to register wallet with server');
          }
        } catch (error) {
          setLocalWalletAddress("");
          console.error('Server authentication error:', error);
          alert('Failed to register wallet: ' + (error.message || 'Unknown error'));
        }
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      setLocalWalletAddress("");
      console.error('MetaMask connection error:', error);
      alert('Failed to connect to MetaMask');
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      provider.listAccounts().then((accounts) => {
        if (accounts.length > 0) {
          setLocalWalletAddress(accounts[0]);
        }
      });

      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setLocalWalletAddress(accounts[0]);
        } else {
          setLocalWalletAddress("");
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
          {/* <FaWallet className="mx-auto text-4xl text-blue-500 mb-2" /> */}
          <img src="log.png" alt="Logo" className="w-28 mb-2 mx-auto" />
          {/* <h2 className="text-2xl font-semibold">Connect to NWYFT</h2> */}
        </div>
        <div className="space-y-4">
          <button
            onClick={connectMetaMask}
            className="w-full flex items-center p-3 rounded-lg  bg-gray-800   hover:bg-gray-500 text-white"
          >
            {/* <img src="/metamask.png" alt="MetaMask" className="w-8 h-8" /> */}
            <FaEthereum className="w-8 h-8 mr-3 text-orange-500" />
            <span>Connect with MetaMask</span>
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
        {localWalletAddress && (
          <p className="mt-4 text-green-400 text-center">Connected: {localWalletAddress}</p>
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
