import React from "react";

const StatsPanel = () => {
  const stats = [
    {
      id: 1,
      value: "9526",
      label: "Total Items",
      image: "icons/icon2.png", // Replace with actual image URL
    },
    {
      id: 2,
      value: "0.50",
      label: "Total Price",
      image: "icons/icon1.png", // Replace with actual image URL
    },
    {
      id: 3,
      value: "1420",
      label: "Total Users",
      image: "icons/icon3.png", // Replace with actual image URL
    },
    {
      id: 4,
      value: "10.1K",
      label: "Total Board",
      image: "icons/icon4.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="w-full bg-[#d4d3d3] py-4 sm:py-6 px-2 sm:px-4 mb-6 sm:mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="flex flex-row items-center justify-center sm:justify-start space-x-3 sm:space-x-4 p-4 sm:p-6"
          >
            <div className="p-2 sm:p-3 bg-blue-50 rounded-lg">
              <img src={stat.image} alt={stat.label} className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D3D3D3]" />
            </div>
            <div className="text-left">
              <div className="text-[20px] sm:text-[24px] md:text-[32px] font-bold font-sans text-gray-900">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-sans text-gray-500">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPanel;
