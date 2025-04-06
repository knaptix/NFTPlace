import React, { useEffect, useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import NFTCollection from "./NFtCard";

import TabSwitchers from "./TabSwitcher";
import { Link, useLocation, useParams } from "react-router-dom";
import { getNftBId } from "../../services/api";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ethers } from "ethers";
import {
  NftMarketPlace,
  NftMarketPlace_Abi,
  nwfntToken,
  nwfntToken_Abi,
} from "../../services/config";
const NFTDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [nft, setNft] = useState({});
  const location = useLocation();
  const [quantity, setQuantity] = useState(0);

  // Extract the query string portion from the URL (remove '/buy/')
  const queryString = location.pathname.split("/buy/")[1];

  // Split the query string by '&' and then by '=' to get key-value pairs
  const params = {};
  queryString.split("&").forEach((param) => {
    const [key, value] = param.split("=");
    params[key] = value;
  });

  // Now you can access `id` and `contract`
  const id = params.id;
  const contract = params.contract;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchNft = async () => {
      try {
        const response = await axios.get(
          `https://nywnftbackend-1.onrender.com/api/nft/get/tokenId?tokenId=${id}&contractAddress=${contract}`
        );

        setNft(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchNft();
  }, [id]); // Thi
  const handleCreateCollection = async () => {
    if (quantity <= nft?.data?.quantity) {
      if (!window.ethereum) {
        toast.error("MetaMask is not installed!");
        return;
      }
      if (!quantity) {
        toast.error("Enter quantity  !")
        return;
      }
      if (quantity <  1) {
        toast.error("quantity must be greater than 1 !")
        return;
      }
      if (!Number.isInteger(Number(quantity))) {
        toast.error("Quantity must be a whole number!");
        return;
      }
      try {
        setIsLoading(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const userAddress = await signer.getAddress();

        if (userAddress.toLowerCase() === nft?.data?.walletAddress.toLowerCase()) {
          toast.error("You can't buy your own NFT!");
          setIsLoading(false);
          return;
        }

        const contractABI = NftMarketPlace_Abi;
        const tokenABI = nwfntToken_Abi;
        const contract = new ethers.Contract(NftMarketPlace, contractABI, signer);
        const tokenContract = new ethers.Contract(nwfntToken, tokenABI, signer);

        // Check ETH balance for gas fees
        const ethBalance = await provider.getBalance(userAddress);
        const minEthRequired = ethers.utils.parseEther("0.0011"); // Adjust minimum ETH required

        if (ethBalance.lt(minEthRequired)) {
          toast.error("Insufficient ETH balance for gas fees!");
          setIsLoading(false);
          return;
        }

        // Check token balance
        const tokenBalance = await tokenContract.balanceOf(userAddress);
        const formattedTokenBalance = ethers.utils.formatUnits(tokenBalance, 3);

        const totalPrice = (parseFloat(nft?.data?.price || "0") * (parseFloat(quantity) + 1)).toString();

        const price = ethers.utils.parseUnits(totalPrice, 18);
        console.log("Token Address:",           nft?.data?.contractAddress,    Number(quantity)
        );

        console.log("Token Balance:", formattedTokenBalance);
        console.log("NFT Price:", ethers.utils.formatUnits(price, 18));

        if (parseFloat(formattedTokenBalance) < parseFloat(ethers.utils.formatUnits(price, 18))) {
          toast.error("Insufficient token balance to purchase NFT!");
          setIsLoading(false);
          return;
        }

        // Check allowance
        const allowance = await tokenContract.allowance(userAddress, NftMarketPlace);
        if (allowance.lt(price)) {
          toast.loading("Approving token spend...");
          const approvalTx = await tokenContract.approve(NftMarketPlace, price);
          await approvalTx.wait();
          toast.dismiss(); // Remove loading toast
          toast.success("Token approval successful!");
        }

        // Proceed with NFT purchase
        toast.loading("Processing purchase...");
        const tx = await contract.buyListedNFT(
          nft?.data?.contractAddress,
          nft?.data?.tokenId,
          nft?.data?.walletAddress,
          Number(quantity)
        );

        console.log("Transaction sent:", tx.hash);
        const receipt = await tx.wait();
        toast.dismiss(); // Remove loading toast
        console.log("Transaction confirmed:", receipt);

        const NFTSoldEvent = receipt.events.find(event => event.event === "NFTSold");

        if (NFTSoldEvent) {
          const newId = NFTSoldEvent.args.tokenId.toString();
          console.log("New Token ID:", newId);
          toast.success("NFT purchased successfully!");
          await handleApiCall(newId, nft?.data?.contractAddress, tx.hash);
        } else {
          console.error("NFTSold event not found in receipt.");
          toast.error("NFT purchased, but failed to retrieve token ID.");
        }

      } catch (error) {
        console.error("Error:", error);
        toast.dismiss(); // Remove loading toast if an error occurs
        toast.error(`Transaction failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }

    } else {
      toast.error("invalid quantity !")
    }

  };

  console.log(quantity, "quantity")

  const handleApiCall = async (tokenId, contractAddress, hash) => {
    // Fetch token from localStorage
    const token = localStorage.getItem("walletToken");

    // Prepare data for the API call
    const fdata = {
      tokenId: tokenId,
      isMinted: true,
      transactionHash: hash,
      contractAddress: contractAddress,
      price: nft?.data?.price,
      quantity:   Number(quantity),
    };

    try {
      // Make API call
      const response = await fetch("https://nywnftbackend-1.onrender.com/api/nft/buy", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // Ensure content type is set to JSON
        },
        body: JSON.stringify(fdata), // Convert fdata to JSON string
      });

      if (!response.ok) {
        // If the response is not OK, throw an error with the response text
        const errorText = await response.text();
        console.error(`Failed to create collection: ${errorText}`);
        throw new Error("Failed to create the collection contract.");
      }

      // Parse and handle successful response
      const data = await response.json();
      console.log("NFT buy successfully:", data);
      toast.success("NFT buy successfully!");
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error creating contract:", error);
      toast.error("An error occurred while creating the contract.");
    }
  };

  const handleShare = async () => {
    const shareData = {
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      toast.error('Failed to share');
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Media Player */}
          <div className="relative">
            {/* Timer Overlay */}
            {/* <div className="absolute top-4 left-0 right-0 z-10 flex justify-center">
            <div className="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              02 : 12 : 56
            </div>
          </div> */}

            {/* Main Image */}
            <div className="rounded-xl overflow-hidden">
              <img
                src={nft?.data?.imageUrl}
                alt="Concert scene"
                className="w-full object-cover aspect-square"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Verified Badge and Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-500">{nft?.data?.tokenId}</span>
                {/* <img
                  src="/api/placeholder/20/20"
                  alt="Verified"
                  className="w-5 h-5"
                /> */}
              </div>
              <h1 className="text-2xl font-bold uppercase">{nft?.data?.name}</h1>
            </div>

            {/* Creator Info */}
            <div className="flex items-center gap-6 font-bold">
              <div className="flex items-center gap-2">
                <div className="text-sm">Created by</div>
                <img
                  src={nft?.creatorProfileIMG}
                  alt="Creator"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-bold">{nft?.creatorname}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm">Owned by</div>
                <img
                  src={nft?.ownerWalletProfile}
                  alt="Owner"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-bold">{nft?.ownerName}</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              {/* <div className="flex items-center gap-1">
                <span></span>
                
              </div> */}
              <div className="flex items-center gap-1 font-bold text-gray-800 text-lg">
                <span>Quantity: {nft?.data?.quantity}</span>
                <span>Category: {nft?.data?.categoryName}</span>
              </div>
              {/* <div className="flex items-center gap-1">
              <span>❤️</span>
              <span>2 Wishlist</span>
            </div> */}
              {/* <button className="flex items-center gap-1">
                <Share2 size={16} />
                <span>Share</span>
              </button> */}
            </div>

            {/* Current Price */}
            <div className="bg-[#F3F3F3] rounded-lg p-4 space-y-4 w-2/4">
              <div className=" flex items-center gap-8">

                <div className="text-xl font-bold">Price: {nft?.data?.price} NYW</div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors space-y-2"
                >
                  <FaShareAlt size={30} />
                  {/* <span>Share</span> */}
                </button>
              </div>



              {/* Action Buttons */}
              <div className=" gap-4">
                <input
                  type="number"
                  placeholder="Enter quantity to buy"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setQuantity(e.target.value)}
                />

                <button
                  className={`mt-4 w-64 bg-black py-2 rounded-md ${isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black text-white"
                    }`}
                  onClick={handleCreateCollection}
                  disabled={isLoading} // Disable the button while loading
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center space-x-2">
                      <div className="w-5 h-5 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    "  Buy now"
                  )}
                </button>

                {/* <button className="flex-1 border border-gray-300 py-3 rounded-xl font-medium">
              Make offer
            </button>
            <button className="border border-gray-300 p-3 rounded-xl">
              🛒
            </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <TabSwitchers description={nft?.data?.description} />
      <NFTCollection />
    </>
  );
};

export default NFTDetailsPage;
