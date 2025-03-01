import React, { createContext, useState, useContext, useEffect } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletToken, setWalletToken] = useState(localStorage.getItem('walletToken') || null);
  const [walletAddress, setWalletAddress] = useState(localStorage.getItem('walletAddress') || null);

  // Save walletToken in localStorage whenever it changes
  useEffect(() => {
    if (walletToken) {
      localStorage.setItem('walletToken', walletToken);
    } else {
      localStorage.removeItem('walletToken');
    }
  }, [walletToken]);

  // Save walletAddress in localStorage whenever it changes
  useEffect(() => {
    if (walletAddress) {
      localStorage.setItem('walletAddress', walletAddress);
    } else {
      localStorage.removeItem('walletAddress');
    }
  }, [walletAddress]);

  const authenticateToken = (token, address) => {
    setWalletToken(token);
    setWalletAddress(address);
  };

  const logout = () => {
    setWalletToken(null);
    setWalletAddress(null);
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setWalletToken(null);
    localStorage.removeItem('walletToken');
    localStorage.removeItem('walletAddress');
  };

  return (
    <WalletContext.Provider value={{ walletToken, walletAddress, authenticateToken, logout, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
