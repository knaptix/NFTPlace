import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const Overview = ({description}) => (
    <div className="w-full p-4  bg-white shadow-sm">
      <div className="mb-6  ">
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-600 text-[24px] border rounded-lg pt-5 px-5 pr-10 py-5 ">
          {description}
        </p>
      </div>
  
      {/* <div className="mb-10 pb-6  ">
      
        <h2 className="text-lg font-semibold mb-4">Traits</h2>
        <div className="space-y-2 border rounded-xl">
        <p className="text-lg font-semibold mb-3 mt-7 ml-7">Name</p>
          <div className="border rounded-lg  flex items-center  mt-3 ml-5 p-5  mr-8 mb-[4rem] ">
            <div className="flex-1 ">
              <div className="text-sm text-gray-500">Background</div>
              <div className="font-medium">Cool Grey</div>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium">4%</span>
            </div>
          </div>
          
          
        </div>
        
          
      </div> */}
  
      <div>
        <h2 className="text-lg font-semibold mb-3">Details</h2>
        <div className="space-y-3 border rounded-lg mt-5 ml-5 p-5">
          <div className="flex justify-between ">
            <span className="text-gray-600">Contract Address</span>
            <span className="text-blue-600">0xxdf2f1b36fa.....</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Token ID</span>
            <span className="text-blue-600">19377</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Token Standard</span>
            <span>ERC-721</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Chain</span>
            <span>Ethereum</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Last Updated</span>
            <span>9 hours ago</span>
          </div>
          {/* <div className="flex justify-between">
            <span className="text-gray-600">Creators Royalties</span>
            <span>5%</span>
          </div> */}
        </div>
      </div>
    </div>
  );
  
const Activity = () => {
    const priceHistoryData = [
        { month: 'JAN', volume: 450 },
        { month: 'FEB', volume: 700 },
        { month: 'MAR', volume: 600 },
        { month: 'APR', volume: 600 },
        { month: 'MAY', volume: 500 },
        { month: 'JUN', volume: 800 },
        { month: 'JUL', volume: 850 },
        { month: 'AUG', volume: 400 },
        { month: 'SEP', volume: 850 },
        { month: 'OCT', volume: 750 },
        { month: 'NOV', volume: 950 },
        { month: 'DEC', volume: 1000 }
      ];

  const offers = [
    { eth: '0.009', usd: '25.2', quantity: 1, expiration: 'in 12 Days', from: '0x73E4' },
    { eth: '0.009', usd: '25.2', quantity: 1, expiration: 'in 12 Days', from: '0x73E4' },
    { eth: '0.009', usd: '25.2', quantity: 1, expiration: 'in 12 Days', from: '0x73E4' },
    { eth: '0.009', usd: '25.2', quantity: 1, expiration: 'in 12 Days', from: '0x73E4' }
  ];

  const itemActivity = [
    { event: 'Transfer', price: '', from: '0x73E4', to: '', date: '1 Month Ago' },
    { event: 'Sale', price: '0.01 ETH', from: '0x73E4', to: '0x73E4', date: '1 Month Ago' },
    { event: 'Mint', price: '', from: 'Null Address', to: '0x73E4', date: '3 Month Ago' }
  ];

  return (
    <div className="w-full space-y-6">
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Price history</h2>
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={priceHistoryData}
            margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false}
              stroke="#E5E7EB"
            />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6B7280', fontSize: 12 }}
              domain={[0, 1000]}
              ticks={[0, 200, 400, 600, 800, 1000]}
              orientation="left"
            />
            <Bar 
              dataKey="volume" 
              fill="#1E293B" 
              radius={[2, 2, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Offers</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 font-medium">ETH Price</th>
                <th className="text-left py-3 font-medium">USD Price</th>
                <th className="text-left py-3 font-medium">Quantity</th>
                <th className="text-left py-3 font-medium">Expiration</th>
                <th className="text-left py-3 font-medium">From</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3">{offer.eth} ETH</td>
                  <td className="py-3">$ {offer.usd}</td>
                  <td className="py-3">{offer.quantity}</td>
                  <td className="py-3">{offer.expiration}</td>
                  <td className="py-3 text-blue-600">{offer.from}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 border rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Item activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 font-medium">Event</th>
                <th className="text-left py-3 font-medium">Price</th>
                <th className="text-left py-3 font-medium">From</th>
                <th className="text-left py-3 font-medium">To</th>
                <th className="text-left py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody>
              {itemActivity.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3">{item.event}</td>
                  <td className="py-3">{item.price}</td>
                  <td className="py-3 text-blue-600">{item.from}</td>
                  <td className="py-3 text-blue-600">{item.to}</td>
                  <td className="py-3">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const TabSwitchers = ({description}) => {
  console.log(description,"description")
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="mx-8 md:mx-16 lg:mx-24">
      <div className="border-b border-gray-200 mb-4">
        <div className="flex gap-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 px-1 ${
              activeTab === 'overview'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`pb-4 px-1 ${
              activeTab === 'activity'
                ? 'text-black border-b-2 border-black font-semibold'
                : 'text-gray-500'
            }`}
          >
            Activity
          </button>
        </div>
      </div>
      {activeTab === 'overview' ? <Overview description={description}/> : <Activity />}
    </div>
  );
};

export default TabSwitchers;