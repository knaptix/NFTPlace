import React, { useState } from 'react';

const Toggle = ({ isChecked, onChange }) => (
  <div 
    className={`w-12 h-6 rounded-full p-1 cursor-pointer ${isChecked ? 'bg-blue-600' : 'bg-gray-300'}`}
    onClick={onChange}
  >
    <div 
      className={`w-4 h-4 rounded-full bg-white transform transition-transform ${isChecked ? 'translate-x-6' : 'translate-x-0'}`}
    />
  </div>
);

const MinimumOffersSettings = () => {
  const [offerProtection, setOfferProtection] = useState(false);
  const [noGasFees, setNoGasFees] = useState(false);
  
  const collections = [
    { id: 1, name: "Pudgy Penguins", floorPrice: "1.218" },
    { id: 2, name: "Pudgy Penguins", floorPrice: "1.218" },
    { id: 3, name: "Pudgy Penguins", floorPrice: "1.218" },
    { id: 4, name: "Pudgy Penguins", floorPrice: "1.218" },
    { id: 5, name: "Pudgy Penguins", floorPrice: "1.218" },
    { id: 6, name: "Pudgy Penguins", floorPrice: "1.218" },
    { id: 7, name: "Pudgy Penguins", floorPrice: "1.218" }
  ];

  return (
    <div className="w-full bg-white">
      <div className="w-full px-4 md:px-6">
        {/* Offer Protection */}
        <div className="border-b pb-4">
          <div className="flex justify-between items-start py-4">
            <div>
              <h3 className="text-base font-medium mb-1">Offer protection</h3>
              <p className="text-sm text-gray-600">
                Check for item trait changes and items flagged as stolen before a offer is accepted.
                <a href="#" className="text-blue-600 ml-1 hover:underline">Learn more</a>
              </p>
            </div>
            <Toggle 
              isChecked={offerProtection} 
              onChange={() => setOfferProtection(!offerProtection)} 
            />
          </div>
        </div>

        {/* Cancel with no gas fees */}
        <div className="border-b pb-4">
          <div className="flex justify-between items-start py-4">
            <div>
              <h3 className="text-base font-medium mb-1">Cancel with no gas fees</h3>
              <p className="text-sm text-gray-600">
                Cancel all protected offers without paying gas fees.
                <a href="#" className="text-blue-600 ml-1 hover:underline">Learn more</a>
              </p>
            </div>
            <Toggle 
              isChecked={noGasFees} 
              onChange={() => setNoGasFees(!noGasFees)} 
            />
          </div>
        </div>

        {/* Set minimum offers */}
        <div className="py-4">
          <h3 className="text-base font-medium mb-1">Set minimum offers</h3>
          <p className="text-sm text-gray-600 mb-6">
            Set a minimum offer for collections to ignore low offers.
          </p>

          {/* Collection List */}
          <div className="space-y-4">
            {collections.map((collection) => (
              <div key={collection.id} className="flex items-center gap-4">
                <div className="flex items-center flex-1">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg mr-3 flex-shrink-0">
                    <img 
                      src="https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31" 
                      alt={collection.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{collection.name}</p>
                    <p className="text-sm text-gray-500">Floor price - {collection.floorPrice} ETH</p>
                  </div>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter minimum price"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm 
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-center">
  <button className="px-6 py-3.5 bg-[#02082B] text-white rounded-2xl font-medium shadow-sm hover:bg-[#02082B]/90 transition-colors">
    Save changes
  </button>
</div>

        </div>
      </div>
    </div>
  );
};

export default MinimumOffersSettings;