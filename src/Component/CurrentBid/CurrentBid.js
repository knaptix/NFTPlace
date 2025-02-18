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
    <>
      <button
        onClick={() => window.history.back()}
        className="flex items-center gap-2 ml-7 text-4xl font-bold font-sans pt-6 pb-4 hover:text-gray-600"
      >
        <ArrowLeft className="w-10 h-10 scale-100 text-gray-800" />
        Back
      </button>
      <div className="flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 mt-20 ml-12 mb-36 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-sm mx-auto border border-gray-200"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white rounded-lg">
                  <p className="text-xl font-bold">{item.timeRemaining}</p>
                  <p className="text-sm">Time remaining</p>
                </div>
              </div>
              <div className="mt-4 px-2">
                <h3 className="text-gray-500 text-sm flex items-center">
                  {item.collection} <span className="text-blue-500 bg-blue-500 rounded-lg ml-1">✔️</span>
                </h3>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="mt-3">
                  <p className="text-gray-500 bg-gray-100 text-center py-2 rounded-lg">
                    Highest bid – {item.bid}
                  </p>
                  <p className="bg-indigo-100 text-indigo-800 text-center py-2 rounded-lg mt-2 font-semibold">
                    Your bid – {item.bid}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
