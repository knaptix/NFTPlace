import { ArrowLeft } from 'lucide-react';

export default function AuctionCards() {
  const items = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1365200314/photo/crypto-virtual-museum.jpg?s=612x612&w=0&k=20&c=d81dk8Zp23A5S8Hk6RoPsAfaelRdQqidFsrmS5Zc53k=",
      title: "Corrupted angel",
      collection: "Gods Unchained",
      bid: "1.21 ETH",
      timeRemaining: "02:12:50",
    },
    {
      id: 2,
      image:
        "https://media.istockphoto.com/id/1365200314/photo/crypto-virtual-museum.jpg?s=612x612&w=0&k=20&c=d81dk8Zp23A5S8Hk6RoPsAfaelRdQqidFsrmS5Zc53k=",
      title: "Corrupted angel",
      collection: "Gods Unchained",
      bid: "1.21 ETH",
      timeRemaining: "02:12:50",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1365200314/photo/crypto-virtual-museum.jpg?s=612x612&w=0&k=20&c=d81dk8Zp23A5S8Hk6RoPsAfaelRdQqidFsrmS5Zc53k=",
      title: "Corrupted angel",
      collection: "Gods Unchained",
      bid: "1.21 ETH",
      timeRemaining: "02:12:50",
    },
  ];

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6">
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-2xl sm:text-3xl font-bold font-sans hover:text-gray-600 mb-8"
      >
        <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800" />
        Back
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 mb-12">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-3 sm:p-5 border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="relative aspect-[4/3]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white rounded-lg">
                <p className="text-2xl font-bold">{item.timeRemaining}</p>
                <p className="text-sm mt-1">Time remaining</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              <h3 className="text-gray-500 text-sm flex items-center">
                {item.collection} <span className="text-blue-500 bg-blue-500 rounded-lg ml-2">✔️</span>
              </h3>
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <div className="space-y-2">
                <p className="text-gray-500 bg-gray-100 text-center py-2.5 rounded-lg">
                  Highest bid – {item.bid}
                </p>
                <p className="bg-indigo-100 text-indigo-800 text-center py-2.5 rounded-lg font-semibold">
                  Your bid – {item.bid}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
