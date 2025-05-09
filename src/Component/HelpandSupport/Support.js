import React, { useState } from 'react';
import { Mail, Ticket, ChevronDown, ChevronUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const HelpCenter = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('General');

  const faqData = {
    General: [
      { question: 'What is NYWNFT?', answer: 'NYWNFT is a decentralized marketplace for buying, selling, and trading NFTs (Non-Fungible Tokens). It allows artists, collectors, and investors to engage in secure and transparent transactions using blockchain technology..' },
      { question: 'How does NYWNFT work?', answer: 'NYWNFT operates on blockchain technology, where digital assets (NFTs) are tokenized and stored on a secure, decentralized network. Users can list, buy, and auction NFTs using cryptocurrency.' },
      { question: 'Do I need a crypto wallet to use NYWNFT?', answer: 'Yes, you need a crypto wallet (such as MetaMask, Trust Wallet, or Coinbase Wallet) to interact with the platform, store NFTs, and make transactions.' },
      { question: 'How does NYWNFT work?', answer: 'NYWNFT operates on blockchain technology, where digital assets (NFTs) are tokenized and stored on a secure, decentralized network. Users can list, buy, and auction NFTs using cryptocurrency.' },

      { question: 'Is NYWNFT secure?', answer: 'Yes, NYWNFT uses blockchain encryption, smart contracts, and wallet authentication to ensure secure transactions. However, users should protect their private keys and beware of scams.' },
      { question: 'What should I do if I encounter a scam or fraud ? ', answer: 'Report suspicious activity to NYWNFT Support immediately. Always verify seller profiles, check smart contracts, and avoid sharing private keys..' },
      { question: 'How can I contact NYWNFT support ? ', answer: 'You can reach out to our support team via email, live chat, or social media for assistance with transactions, technical issues, or general inquiries.' },
    ],
    'Create, Buy, Sell': [
      { question: 'How do I buy an NFT on NYWNFT ?', answer: 'Connect your crypto wallet. Browse the marketplace and select an NFT. Click "Buy Now" or place a bid if its an auction. Confirm the transaction in your wallet..' },
      { question: 'How can I create an NFT on NYWNFT ?', answer: '1. Go to the "Create" section. Upload your digital artwork or asset.  Choose a blockchain, set metadata, and define properties.  Confirm the minting process in your wallet..' },
      { question: 'How do I sell my NFTs? ?', answer: '1. Connect your wallet and go to the "Sell" section. 2. Upload your NFT or choose from your existing collection. 3. Set a fixed price or start an auction. 4. Confirm and list your NFT.' },
      
      { question: 'What fees does NYWNFT charge ?', answer: 'NYWNFT charges a transaction fee on sales and a gas fee (blockchain network fee) for minting or transferring NFTs. Fees vary based on the blockchain used.' },
      { question: 'What file formats are supported for NFTs ?', answer: 'NYWNFT supports JPEG, PNG, GIF, MP4, MP3, WAV, and 3D models (GLB, OBJ, etc.) for NFT creation.' },
      { question: 'Can I set royalties on my NFTs?', answer: 'Yes, creators can set royalties (a percentage of resale value) to earn passive income every time their NFT is resold.' },
    ],
    'Payments & Transactions': [
      { question: 'What cryptocurrencies are accepted on NYWNFT?', answer: 'NYWNFT primarily supports ETH (Ethereum), MATIC (Polygon), and USDT. Additional cryptocurrencies may be available based on blockchain integration.' },
      { question: 'How long does a transaction take?', answer: 'Transaction speed depends on network congestion. Ethereum transactions may take a few minutes to an hour, while Layer 2 solutions (Polygon) offer faster transactions.' },
      { question: ' Are transactions reversible ?', answer: 'No, blockchain transactions are permanent and irreversible. Ensure all details are correct before confirming any transaction.' },
    ],
  };

  const guides = [
    { title: 'What is NFT?', description: 'This blog explains what NFTs are, their purpose, and how they function in the digital world. It provides an overview of their uses and significance in various industries..', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s' },
    { title: 'How to create NFT on NYWNFT?', description: 'This blog explains what NFTs are, their purpose, and how they function in the digital world. It provides an overview of their uses and significance in various industries..', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s' },
    { title: 'How to buy NFT on NYWNFT?', description: 'This blog explains what NFTs are, their purpose, and how they function in the digital world. It provides an overview of their uses and significance in various industries..', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s' },
    { title: 'How to sell your NFT on NYWNFT?', description: 'This blog explains what NFTs are, their purpose, and how they function in the digital world. It provides an overview of their uses and significance in various industries..', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJbgkLUFaZ9k3JDwqzaHAXK8AGcDtVz_qSQ&s' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Basic Guides */}
      <section>
  <h2 className="text-2xl font-bold mb-6 text-center font-sans text-[32px]">Basic Guides</h2>
  <Swiper
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 10 }, // 1 slide on very small screens
      480: { slidesPerView: 1.5, spaceBetween: 15 }, // 1.5 slides on small screens
      640: { slidesPerView: 2, spaceBetween: 15 }, // 2 slides on tablets
      1024: { slidesPerView: 3, spaceBetween: 20 }, // 3 slides on larger screens
    }}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    className="pb-8"
  >
    {guides.map((guide, index) => (
      <SwiperSlide key={index} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-[280px] h-[350px]">
        <img src={guide.image} alt={guide.title} className="w-full h-40 rounded-md mb-4 object-cover" />
        <h3 className="font-medium text-lg">{guide.title}</h3>
        <p className="text-sm text-gray-600">{guide.description}</p>
      </SwiperSlide>
    ))}
  </Swiper>
</section>


      {/* FAQs */}
      <section className="mt-16 px-4">
  <h2 className="text-2xl font-bold mb-6 text-center font-sans text-[28px] sm:text-[32px]">FAQs</h2>

  {/* FAQ Category Tabs */}
  <div className="flex flex-wrap gap-2 justify-center mb-6">
    {Object.keys(faqData).map((tab) => (
      <button
        key={tab}
        className={`px-4 py-2 rounded-xl text-base sm:text-lg md:text-xl ${
          activeTab === tab ? 'bg-[#000C2D] text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {tab}
      </button>
    ))}
  </div>

  {/* FAQ List */}
  <div className="space-y-6 mt-3">
    {faqData[activeTab].map((faq, index) => (
      <div key={index} className="border-b pb-4 mt-4">
        <button
          className="w-full flex justify-between items-center text-left font-sans"
          onClick={() => setOpenFaq(openFaq === index ? null : index)}
        >
          <span className="font-bold text-gray-900 text-lg sm:text-xl">{faq.question}</span>
          {openFaq === index ? (
            <FiMinus className="w-5 h-5 text-gray-500" />
          ) : (
            <IoMdAdd className="w-5 h-5 text-gray-500" />
          )}
        </button>
        {openFaq === index && <p className="mt-2 text-gray-600 text-sm sm:text-base">{faq.answer}</p>}
      </div>
    ))}
  </div>
</section>


      {/* Need Help */}
      <section className="mt-16 px-4">
  <h2 className="text-2xl font-bold mb-6 text-[28px] sm:text-[32px] text-center font-sans">Need Help?</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
    {/* Email Support Card */}
    <div className="bg-gray-100 p-6 rounded-lg w-full sm:w-[20rem] mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#000000]">Connect via email</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-6">
        Need help? Find our official support email address to reach out for any queries, technical issues, or assistance. Our team is here to help and will respond as soon as possible.
      </p>
      <a href="mailto:info@nywnft.com?subject=Inquiry&body=Hi, I’d like to get in touch...">
  <button className="bg-[#000C2D] text-white px-4 py-2 rounded-lg flex items-center justify-center w-full sm:w-auto mx-auto">
    <Mail className="w-5 h-5 mr-2" />
    Mail us
  </button>
</a>

    </div>

    {/* Ticket Support Card */}
    <div className="bg-gray-100 p-6 rounded-lg w-full sm:w-[20rem] mx-auto">
      <h3 className="text-lg sm:text-xl font-semibold mb-4 text-[#000000]">Raise a ticket</h3>
      <p className="text-gray-600 text-sm sm:text-base mb-6">
        Need help? Find our official support email address to reach out for any queries, technical issues, or assistance. Our team is here to help and will respond as soon as possible.
      </p>
        <a href="mailto:info@nywnft.com?subject=Inquiry&body=Hi, I’d like to get in touch...">
  <button className="bg-[#000C2D] text-white px-4 py-2 rounded-lg flex items-center justify-center w-full sm:w-auto mx-auto">
    <Mail className="w-5 h-5 mr-2" />
    Mail us
  </button>
</a>
    </div>
  </div>
</section>

    </div>
  );
};

export default HelpCenter;