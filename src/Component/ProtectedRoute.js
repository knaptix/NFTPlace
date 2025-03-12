import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useWallet } from './walletContext';
import WalletLogin from './WalletModel';

const ProtectedRoute = ({ children, redirectTo = "/" }) => {
    const { isWalletConnected, walletToken } = useWallet();
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (!isWalletConnected || !walletToken) {
            setIsWalletModalOpen(true); // Automatically open modal
        }
    }, [isWalletConnected, walletToken]);

    if (!isWalletConnected || !walletToken) {
        return (
            <>
                <div className="flex flex-col items-center justify-center min-h-screen">
                  
                    
                </div>
                <WalletLogin
                    isOpen={isWalletModalOpen}
                    onClose={() => setIsWalletModalOpen(false)}
                    darkMode={true}
                />
            </>
        );
    }

    return children;
};

export default ProtectedRoute;
