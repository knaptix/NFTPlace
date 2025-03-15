import React, { useEffect, useState } from "react";
import { Heart, X } from "lucide-react";
import ListingModal from "./ListingModal";
import { getCreatedNft, getOwnedNft } from "../../services/api";
import {
  nft_Abi,
  NftMarketPlace,
  NftMarketPlace_Abi,
} from "../../services/config";
import { toast } from "react-hot-toast";
import { ethers } from "ethers";

// NFT Card Component
const NFTCard = ({ data, onList }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border p-3">
    <div className="relative">
      <img
        src={data.imageUrl || "https://via.placeholder.com/150"}
        alt={data.name}
        className="w-full aspect-[4/3] object-cover rounded-lg"
      />
      <button className="absolute top-3 right-3 rounded-full hover:bg-black/10 p-1.5 transition">
        <Heart className="w-5 h-5 text-white" />
      </button>
    </div>
    <div className="p-4">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-gray-500 text-xs">{data.collectionName}</span>
        <span className="text-blue-500">✔</span>
      </div>
      <h3 className="font-medium text-sm text-gray-900">{data.name}</h3>
      <div className="mt-3">
        <span className="text-xs text-gray-500">Status</span>
        <p className="text-sm font-semibold">
          {data.isForSale ? "Listed" : "Not Listed"}
        </p>
      </div>
      {/* Display the button only if the NFT is not listed */}
      {!data.isForSale && (
        <button
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md"
          onClick={() => onList(data)} // Pass the whole nft data to onList function
        >
          List for Sale
        </button>
      )}
    </div>
  </div>
);

// ListForSaleModal Component
const ListForSaleModal = ({ nft, onClose }) => {
  console.log(nft);
  const [isLoading, setIsLoading] = useState(false);

  const [price, setPrice] = useState(nft.price || "1 ");
  const [quantity, setQuantity] = useState(nft.quantity || "10");

  const [listingModalOpen, setListingModalOpen] = useState(false);

  // const handleCompleteListing = () => {
  //   setListingModalOpen(true); // Open listing modal
  // };
  const handleCreateCollection = async () => {
    // Validation
    if (!price || !quantity) {
      toast.error("All fields are required.");
      return;
    }

    if (!window.ethereum) {
      toast.error("MetaMask is not installed!");
      return;
    }

    try {
      setIsLoading(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const useAddress = await signer.getAddress();
      const contractABI = NftMarketPlace_Abi;
      const TokenABI = nft_Abi;
      const contract = new ethers.Contract(NftMarketPlace, contractABI, signer);
      const nftContract = new ethers.Contract(
        nft?.contractAddress,
        TokenABI,
        signer
      );

      console.log(
        useAddress,
        nft?.contractAddress,
        NftMarketPlace,
        "useAddress, NftMarketPlace"
      );
      // Check if the marketplace contract is approved for all NFTs
      const isApproved = await nftContract.isApprovedForAll(
        useAddress,
        NftMarketPlace
      );
      console.log("Approval Status:", isApproved);

      if (isApproved) {
        const tx = await contract.listNFT(
          nft?.contractAddress,
          nft?.tokenId,
          price * 10 ** 3,
          quantity
        );

        console.log("Transaction sent:", tx.hash);

        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt);

        const NFTListedEvent = receipt.events.find(
          (event) => event.event === "NFTListed"
        );

        if (NFTListedEvent) {
          const newId = NFTListedEvent.args.tokenId.toString();
          console.log("New Token ID:", newId);
          toast.success("NFT List successfully!");

          // Call the API to store the collection

          await handleApiCall(newId,  nft?.contractAddress, tx.hash);
          // await handleApiCall(newId);
        } else {
          console.error("NFTCreated event not found in receipt.");
          toast.error("NFT created, but failed to retrieve token ID.");
        }
      } else {
        const data = await nftContract.setApprovalForAll(NftMarketPlace, true);
        const dataRec = await data.wait();
        toast.success("approval successfully!");
        const tx = await contract.listNFT(
          nft?.contractAddress,
          nft?.tokenId,
          price * 10 ** 3,
          quantity
        );

        console.log("Transaction sent:", tx.hash);

        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt);

        const NFTListedEvent = receipt.events.find(
          (event) => event.event === "NFTListed"
        );

        if (NFTListedEvent) {
          const newId = NFTListedEvent.args.tokenId.toString();
          console.log("New Token ID:", newId);
          toast.success("NFT List successfully!");

          // Call the API to store the collection

          await handleApiCall(newId,  nft?.contractAddress, tx.hash);
        } else {
          console.error("NFTCreated event not found in receipt.");
          toast.error("NFT created, but failed to retrieve token ID.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleApiCall = async (tokenId, contractAddress, hash) => {
    // Fetch token from localStorage
    const token = localStorage.getItem("walletToken");

    // Prepare data for the API call
    const fdata = {
      tokenId: tokenId,
      price: price,
      contractAddress: contractAddress,
      transactionHash: hash,
      quantity: quantity,
    };

    try {
      // Make API call
      const response = await fetch(
        "https://nywnftbackend-production.up.railway.app/api/nft/list-for-sale",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Ensure content type is set to JSON
          },
          body: JSON.stringify(fdata), // Convert fdata to JSON string
        }
      );

      if (!response.ok) {
        // If the response is not OK, throw an error with the response text
        const errorText = await response.text();
        console.error(`Failed to create collection: ${errorText}`);
        throw new Error("Failed to create the collection contract.");
      }

      // Parse and handle successful response
      const data = await response.json();
      console.log("NFT listed successfully:", data);
      toast.success("NFT listed successfully!");
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error creating contract:", error);
      toast.error("An error occurred while creating the contract.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 w-[800px] h-[500px] relative">
        <button onClick={onClose} className="absolute top-3 right-3">
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <h2 className="text-lg font-semibold mb-3">Quick List</h2>

        <div className="flex items-center gap-3 border-b pb-3">
          <img
            src={nft.imageUrl}
            alt={nft.name}
            className="w-12 h-12 rounded-md"
          />
          <div>
            <p className="text-sm text-gray-700 font-semibold">{nft.name}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              {nft.collectionName} <span className="text-blue-500">✔</span>
            </p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-semibold">{price}</p>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-500">Set Price</label>
          <div className="flex border rounded-md mt-1">
            <input
              type="text"
              className="w-full p-2 text-sm outline-none"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <span className="p-2 text-sm bg-gray-200">NYWFNT</span>
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm text-gray-500">Set Quantity</label>
          <div className="flex border rounded-md mt-1">
            <input
              type="text"
              className="w-full p-2 text-sm outline-none"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span className="p-2 text-sm bg-gray-200"></span>
          </div>
        </div>
        <div className="mt-4 border-t pt-3 text-sm">
          <p className="flex justify-between">
            <span>Total Price:</span>
            <span>{price}</span>
          </p>
          <p className="flex justify-between">
            <span>Total Quantity:</span>
            <span>{quantity}</span>
          </p>
          {/* <p className="flex justify-between">
            <span>Royalties:</span>
            <span>{nft?.royalty?.percentage} %</span>
          </p> */}
        </div>

        <button
          className={`mt-4 w-full py-2 rounded-md ${
            isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white"
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
            "Complete Listing"
          )}
        </button>

        {/* Render the ListingModal conditionally based on listingModalOpen state */}
        {listingModalOpen && (
          <ListingModal
            open={listingModalOpen}
            onClose={() => {
              setListingModalOpen(false);
              onClose(); // Close the parent modal as well if needed
            }}
            nft={{ ...nft, price }}
          />
        )}
      </div>
    </div>
  );
};

// Owned Component to display NFTs
const Owned = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [nftList, setNftList] = useState([]);

  const handleListForSale = (nft) => {
    setSelectedNFT(nft); // Pass entire NFT data to the modal
  };

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        // Get NFTs that you created
        const response = await getCreatedNft();
        setNftList(response?.data);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchNfts();
  }, []);

  return (
    <div className="w-full mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {nftList?.length > 0 ? (
          nftList.map((nft) => (
            <NFTCard key={nft._id} data={nft} onList={handleListForSale} />
          ))
        ) : (
          <p className="text-center text-gray-500 w-full col-span-full text-bold">
            No Data Found
          </p>
        )}
      </div>

      {/* If an NFT is selected, show the ListForSaleModal */}
      {selectedNFT && (
        <ListForSaleModal
          nft={selectedNFT}
          onClose={() => setSelectedNFT(null)}
        />
      )}
    </div>
  );
};

export default Owned;
