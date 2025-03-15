import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginWithWallet, logoutWallet, getUserProfile } from '../services/api';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletToken, setWalletToken] = useState(localStorage.getItem('walletToken') || null);
  const [walletAddress, setWalletAddress] = useState(localStorage.getItem('walletAddress') || null);
  const [userData, setUserData] = useState(null);

  const isWalletConnected = Boolean(walletToken && walletAddress);

  useEffect(() => {
    if (walletToken) {
      localStorage.setItem('walletToken', walletToken);
    } else {
      localStorage.removeItem('walletToken');
    }

    // if (walletAddress) {
    //   localStorage.setItem('walletAddress', walletAddress);
    // } else {
    //   localStorage.removeItem('walletAddress');
    // }
  }, [walletToken, walletAddress]);

  // Add initialization effect
  useEffect(() => {
    const initializeWallet = async () => {
      const token = localStorage.getItem('walletToken');
      const address = localStorage.getItem('walletAddress');

      if (token && address) {
        try {
          const response = await getUserProfile(token);
          if (response.status && response.data) {
            setWalletToken(token);
            setWalletAddress(address);
            setUserData(response.data);
          } else {
            // Clear invalid data
            localStorage.removeItem('walletToken');
            localStorage.removeItem('walletAddress');
          }
        } catch (error) {
          console.error('Failed to initialize wallet:', error);
          localStorage.removeItem('walletToken');
          localStorage.removeItem('walletAddress');
        }
      }
    };

    initializeWallet();
  }, []);

  const authenticateToken = async (address) => {
    try {
      const response = await loginWithWallet(address);
      if (response.status && response.data) {
        setWalletToken(response.data.token);
        setWalletAddress(response.data.walletAddress);
        setUserData(response.data);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Authentication error:', error);
      return false;
    }
  };

  const disconnectWallet = async () => {
    try {
      await logoutWallet();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setWalletAddress(null);
      setWalletToken(null);
      setUserData(null);
      localStorage.clear(); // Clear all localStorage data

      // If using MetaMask, you might want to disconnect from it as well
      if (window.ethereum && window.ethereum.disconnect) {
        try {
          await window.ethereum.disconnect();
        } catch (err) {
          console.error('MetaMask disconnect error:', err);
        }
      }
    }
  };

  const value = {
    walletToken,
    walletAddress,
    userData,
    isWalletConnected,
    authenticateToken,
    disconnectWallet
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
