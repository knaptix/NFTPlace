import React, { useEffect, useState } from "react";
import { Heart, X } from "lucide-react";
import ListingModal from "./ListingModal";
import { getOwnedNft } from "../../services/api";

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
        {/* Remove or add verification logic based on your data */}
        <span className="text-blue-500">✔</span>
      </div>
      <h3 className="font-medium text-sm text-gray-900">{data.name}</h3>
      <div className="mt-3">
        <span className="text-xs text-gray-500">Status</span>
        <p className="text-sm font-semibold">
          {data.isForSale ? "Listed" : "Not Listed"}
        </p>
      </div>
      <button 
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md"
        onClick={() => onList(data.name, data.imageUrl, data.price)}
      >
        List for Sale
      </button>
    </div>
  </div>
);

const ListForSaleModal = ({ nft, onClose }) => {
  const [price, setPrice] = useState(nft.price || "0.00025 ETH");
  const [duration, setDuration] = useState("30 Days");
  const [listingModalOpen, setListingModalOpen] = useState(false);

  const getExpirationDate = () => {
    const today = new Date();
    const daysToAdd = parseInt(duration.split(" ")[0], 10);
    today.setDate(today.getDate() + daysToAdd);
    return today.toDateString();
  };

  const handleCompleteListing = () => {
    // Open the listing modal instead of closing this modal
    setListingModalOpen(true);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 w-[800px] h-[500px] relative">
        <button onClick={onClose} className="absolute top-3 right-3">
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <h2 className="text-lg font-semibold mb-3">Quick List</h2>

        <div className="flex items-center gap-3 border-b pb-3">
          <img src={nft.image} alt={nft.title} className="w-12 h-12 rounded-md" />
          <div>
            <p className="text-sm text-gray-700 font-semibold">{nft.title}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              Gods Unchained <span className="text-blue-500">✔</span>
            </p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-semibold">{price}</p>
            <p className="text-xs text-gray-500">$8.27 USD</p>
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
            <span className="p-2 text-sm bg-gray-200">ETH</span>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-500">Set Duration</label>
          <div className="flex items-center gap-2 border rounded-md p-2 mt-1">
            <select
              className="w-1/2 p-2 outline-none"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              <option>30 Days</option>
              <option>60 Days</option>
              <option>90 Days</option>
            </select>
            <p className="text-sm text-gray-500">{getExpirationDate()}</p>
          </div>
        </div>

        <div className="mt-4 border-t pt-3 text-sm">
          <p className="flex justify-between">
            <span>Total Price:</span>
            <span>{price}</span>
          </p>
          <p className="flex justify-between">
            <span>Platform Fees:</span>
            <span>5%</span>
          </p>
          <p className="flex justify-between">
            <span>Royalties:</span>
            <span>5%</span>
          </p>
        </div>

        <button 
          className="mt-4 w-full bg-black text-white py-2 rounded-md"
          onClick={handleCompleteListing}
        >
          Complete Listing
        </button>
        
        {/* Render the ListingModal conditionally based on listingModalOpen state */}
        {listingModalOpen && (
          <ListingModal 
            open={listingModalOpen} 
            onClose={() => {
              setListingModalOpen(false);
              onClose(); // Close the parent modal as well if needed
            }}
            nft={{ ...nft, price, duration }}
          />
        )}
      </div>
    </div>
  );
};

const Owned = () => {
  const [selectedNFT, setSelectedNFT] = useState(null);
  const [nftList, setNftList] = useState([]);



  const handleListForSale = (title, image, price) => {
    setSelectedNFT({ title, image, price });
  };

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await getOwnedNft();
        console.log(response);
        setNftList(response?.data);
      } catch (error) {
        console.error(error);
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
          <p className="text-center text-gray-500 w-full col-span-full text-bolder">No Data Found</p>
        )}
      </div>

      {selectedNFT && <ListForSaleModal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />}
    </div>
  );
};


export default Owned;