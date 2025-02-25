import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoDiscord, BiLogoTelegram, BiRightArrowAlt } from 'react-icons/bi';

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`py-16 mt-10 transition-colors ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4">
        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 lg:w-8 lg:h-8 bg-[#1B1A1E] rounded-lg" aria-label="NYWNFT logo"></div>
              <span className="font-semibold text-lg lg:text-base">NYWNFT</span>
            </div>
            <p className="text-base lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Ever dreamt of being part of the New York World? NYWNFT, the bridge between Blockchain and AI, lets you own a piece of the action. Generate and mint NFTs, unlocking the future of creativity in the heart of the world.
            </p>
          </div>

          {/* Adjust the grid layout for remaining sections */}
          <div className="space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-1 sm:gap-8 lg:gap-0 col-span-1 sm:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About</Link></li>
                  <li><Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link></li>
                  <li><Link to="/ventures" className="text-sm text-gray-600 hover:text-gray-900">Ventures</Link></li>
                  <li><Link to="/ventures" className="text-sm text-gray-600 hover:text-gray-900">Documentation</Link></li>
                </ul>
              </div>

              {/* Connect with us */}
              <div>
                <h3 className="font-semibold mb-4">Connect with us</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="#" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                      <BiLogoDiscord className="w-5 h-5" />
                      <span>Discord</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                      <BiLogoTelegram className="w-5 h-5" />
                      <span>Telegram</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                      <span className="w-5 h-5 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs">X</span>
                      <span>X App</span>
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:nywnft@nywnft.xyz" className="text-sm text-gray-600 hover:text-gray-900">
                      nywnft@nywnft.xyz
                    </a>
                  </li>
                </ul>
              </div>

              {/* Stay in loop */}
              <div className="sm:col-span-2 lg:col-span-1">
                <h3 className="font-semibold mb-4">Stay in loop</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating NFTs.
                </p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg pr-12"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <BiRightArrowAlt className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 lg:pb-16">
          {/* Learn about NFTs */}
          <div>
            <h3 className="font-semibold mb-4">Learn about NFTs</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">What is NFT?</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">How to buy NFTs from NYWNFT?</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">How to create / Mint NFTs on NYWNFT?</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">How to sell NFTs on NYWNFT?</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">What is Crypto wallet?</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">What is NYWNFT Coin?</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Terms of service</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Blogs</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Partners</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">Community standards</Link></li>
              <li><Link to="#" className="text-sm text-gray-600 hover:text-gray-900">NYWNFT Documentation</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-semibold mb-4">Help & Support</h3>
            <p className="text-sm text-gray-600 mb-2">For any queries mail us at -</p>
            <a href="mailto:nywnftinfo@nywnft.xyz" className="text-sm text-gray-600 hover:text-gray-900 block mb-6">
              nywnftinfo@nywnft.xyz
            </a>
          </div>

          {/* Need more help */}
          <div>
            <h3 className="font-semibold mb-4">Need more help</h3>
            <p className="text-sm text-gray-600 mb-4">
              Raise a ticket, explain the issues and we are always eager to help you
            </p>
            <button className="w-full bg-[#1B1A1E] text-white py-3 rounded-lg hover:bg-black transition-colors">
              Raise a ticket
            </button>
          </div>
        </div>

        {/* Copyright - Make it stick to bottom on mobile */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            Copyright ©2024 NYWNFT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
