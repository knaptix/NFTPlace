"use client"

import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsTelegram, BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <footer className="bg-gray-200 text-black">
      {/* Top section with subscription and social */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-24">
          {/* Stay in the loop */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Stay in the loop</h3>
            <p className="mb-4 text-sm">
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks.
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md text-black border border-gray-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md font-medium hover:bg-gray-800 transition">subscribe</button>
            </div>
          </div>

          {/* Join the community */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Join the community</h3>
            <div className="flex gap-4">
              <Link to="https://t.me/+YUAQVX-sDoM1NTdh" className="text-black text-2xl p-2 rounded-md hover:bg-gray-300 transition">
                <BsTelegram />
              </Link>
              <Link to="https://x.com/nywnft" className="text-black text-2xl p-2 rounded-md hover:bg-gray-300 transition">
                <BsTwitterX />
              </Link>
              <Link to="mailto:info@nywnft.com" className="text-black text-3xl p-2 rounded-md hover:bg-gray-300 transition">
                <MdOutlineEmail />
              </Link>
            </div>
          </div>

          {/* Need help? */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Need help?</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="mailto:info@nywnft.com" className="bg-black px-6 py-3 rounded-md font-medium text-white text-center hover:bg-gray-800 transition">
                Contact Support
              </Link>
              <Link to="/settings" className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-black transition text-center">Raise a ticket</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black mx-4 sm:mx-6 lg:mx-8"></div>

      {/* Main footer links */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 text-left">
          {/* NYWNFT */}
          <div>
            <Link to="/" className="text-lg font-semibold mb-3">NYWNFT</Link>
            <p className="text-sm">
              NYWNFT bridges Blockchain and AI, allowing you to own a piece of the action. Generate and mint NFTs easily.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:underline">About</Link></li>
              <li><Link to="/venture" className="text-sm hover:underline">Ventures</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blogs" className="text-sm hover:underline">Blogs</Link></li>
              <li><Link to="/partnerships" className="text-sm hover:underline">Partners</Link></li>
              <li><Link to="/community-standard" className="text-sm hover:underline">Community Standards</Link></li>
              <li><Link to="https://nywnft-organization.gitbook.io/nywnft/~/changes/1/getting-started/get-started" className="text-sm hover:underline">NYWNFT Documentation</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Help & Support</h3>
            <ul className="space-y-2">
              <li><Link to="mailto:info@nywnft.com" className="text-sm hover:underline">Contact Support</Link></li>
            </ul>
          </div>

          {/* Learn about NFTs */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Learn about NFTs</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm hover:underline">What is NFT?</Link></li>
              <li><Link to="/help" className="text-sm hover:underline">How to buy NFTs?</Link></li>
              <li><Link to="/help" className="text-sm hover:underline">How to mint NFTs?</Link></li>
              <li><Link to="/help" className="text-sm hover:underline">What is NYWNFT Coin?</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
