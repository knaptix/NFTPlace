import React from "react";

const nftCollections = [
  { name: "Doodles", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Pudgy Penguins", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Lil Pudgys", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "403.1 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Azuki", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "439.3 ETH", volumeChange: "-18.5%", items: "29.0K", owners: "10.0K" },
  { name: "Banba Bears", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Pudgy Rods", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Gods Unchained", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Miday Maker", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "MutantApeYachtClub", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "YOU THE REAL MVP", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Bored Ape Yacht Club", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "BEANZ Official", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Asyron Blueprints", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
  { name: "Jrasan", floorPrice: "1.29 ETH", floorChange: "+2.5%", volume: "433.3 ETH", volumeChange: "-38.5%", items: "29.0K", owners: "10.0K" },
];

const NFTTable = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-left">
              <th className="p-3">Collection Name</th>
              <th className="p-3">Floor Price</th>
              <th className="p-3">Floor Change</th>
              <th className="p-3">Volume</th>
              <th className="p-3">Volume Change</th>
              <th className="p-3">Items</th>
              <th className="p-3">Owners</th>
            </tr>
          </thead>
          <tbody>
            {nftCollections.map((collection, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-gray-50 transition-all"
              >
                <td className="p-3 font-semibold text-gray-900">{collection.name}</td>
                <td className="p-3">{collection.floorPrice}</td>
                <td className="p-3 text-green-600">{collection.floorChange}</td>
                <td className="p-3">{collection.volume}</td>
                <td className="p-3 text-red-600">{collection.volumeChange}</td>
                <td className="p-3">{collection.items}</td>
                <td className="p-3">{collection.owners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NFTTable;
