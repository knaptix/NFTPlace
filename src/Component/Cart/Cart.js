import React from 'react';
import { ArrowLeft, Clock, Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartSummary() {
  const cartItems = [
    {
      id: 1,
      image: "https://media.istockphoto.com/id/1365200314/photo/crypto-virtual-museum.jpg?s=612x612&w=0&k=20&c=d81dk8Zp23A5S8Hk6RoPsAfaelRdQqidFsrmS5Zc53k=",
      title: "Corrupted angel",
      collection: "Gods Unchained",
      price: "1.21 ETH",
      usdPrice: "$ 3307.35"
    },
    {
      id: 2,
      image: "https://media.istockphoto.com/id/1365200314/photo/crypto-virtual-museum.jpg?s=612x612&w=0&k=20&c=d81dk8Zp23A5S8Hk6RoPsAfaelRdQqidFsrmS5Zc53k=",
      title: "Corrupted angel",
      collection: "Gods Unchained",
      price: "1.21 ETH",
      usdPrice: "$ 3307.35"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      {/* Left margin spacer */}
      <div className="w-full md:w-24 flex-shrink-0" />

      {/* Main content area */}
      <div className="flex-1 p-4 md:p-6 pr-0 md:pr-24 px-4 md:px-6 overflow-y-auto">
        {/* Back Button */}
         <Link to="/"><button className="flex items-center gap-2 ml-1 text-4xl font-bold font-sans pt-6 pb-4 hover:text-gray-600">
          <ArrowLeft className="w-10 h-10 scale-100 text-gray-800" />
          
        </button></Link>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="border-t border-gray-100 pt-6">
              <div className="flex flex-col md:flex-row items-start">
                {/* Image */}
                <div className="w-full md:w-72 h-48 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content and Actions */}
                <div className="flex flex-col mr-8 md:flex-1 justify-between mt-4 md:mt-0 md:ml-6">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 text-sm">{item.collection}</span>
                      <span className="text-blue-500">✓</span>
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-4">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm hover:bg-gray-200">
                        <Clock className="w-4 h-4" />
                        Save for later
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm hover:bg-gray-200">
                        <Heart className="w-4 h-4" />
                        Add to favourites
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm hover:bg-gray-200">
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="flex flex-col justify-end mt-4 ml-auto">
                    <div className="text-lg font-semibold text-right">{item.price}</div>
                    <div className="text-sm text-gray-500 text-right">{item.usdPrice}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-[#DFDFDF] rounded-lg p-6 mt-8 mr-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Summary</h2>

          <div className="space-y-3 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between">
                <span>{item.title}</span>
                <span>{item.price}</span>
              </div>
            ))}
            <div className="flex justify-between font-semibold pt-3 border-t">
              <span>Total Items - {cartItems.length}</span>
              <span>2.438 ETH</span>
            </div>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
