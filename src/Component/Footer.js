"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { BsTelegram, BsTwitterX } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"

export default function Footer() {
  const [email, setEmail] = useState("")

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
              <button className="bg-black text-white px-4 py-2 rounded-r-md font-medium hover:bg-gray-800 transition">Sign up</button>
            </div>
          </div>

          {/* Join the community */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Join the community</h3>
            <div className="flex gap-4">
              <Link to="https://t.me/+YUAQVX-sDoM1NTdh" className="text-black text-2xl p-2 rounded-md hover:bg-gray-300 transition">
                <BsTelegram />
              </Link>
              <Link to="#" className="text-black text-2xl p-2 rounded-md hover:bg-gray-300 transition">
                <BsTwitterX />
              </Link>
              <Link to="mailto:nywnftinfo@nywnft.com" className="text-black text-3xl p-2 rounded-md hover:bg-gray-300 transition">
                <MdOutlineEmail />
              </Link>
            </div>
          </div>

          {/* Need help? */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Need help?</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/setting" className="bg-black px-6 py-3 rounded-md font-medium text-white text-center hover:bg-gray-800 transition">
                Contact Support
              </Link>
              <Link to="/setting" className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-black transition">Raise a ticket</Link>
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
            <h3 className="text-lg font-semibold mb-3">NYWNFT</h3>
            <p className="text-sm">
              NYWNFT bridges Blockchain and AI, allowing you to own a piece of the action. Generate and mint NFTs easily.
            </p>
          </div>
          
          {/* Footer Links */}
          {[
            { title: "Company", links: ["About", "Ventures", "Documentation"] },
            { title: "Resources", links: ["Blogs", "Partners", "Community Standards", "NYWNFT Documentation"] },
            { title: "Help & Support", links: ["Contact Support"] },
            { title: "Learn about NFTs", links: ["What is NFT?", "How to buy NFTs?", "How to mint NFTs?", "What is NYWNFT Coin?"] }
          ].map((section, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link to="/help" className="text-sm hover:underline">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-black mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center text-center">
          <p className="text-sm">&copy; 2024 NYWNFT. All rights reserved.</p>
          <p className="text-sm">Delve Withrington & Team</p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-sm hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
