import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useWallet } from './walletContext';
import WalletLogin from './WalletModel';

const ProtectedRoute = ({ children }) => {
    const { walletToken } = useWallet();
    const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

    if (!walletToken) {
        return (
            <>
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h2 className="text-2xl mb-4">Please connect your wallet to access this page</h2>
                    <button
                        onClick={() => setIsWalletModalOpen(true)}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Connect Wallet
                    </button>
                </div>
                <WalletLogin
                    isOpen={isWalletModalOpen}
                    onClose={() => setIsWalletModalOpen(false)}
                />
            </>
        );
    }

    return children;
};

export default ProtectedRoute;
