"use client"

import { Link } from "react-router-dom"
import { useState } from "react"
import { BsTelegram, BsTwitterX } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"

export default function Footer() {
  const [email, setEmail] = useState("")

  return (
    <footer className="bg-[#e5e7eb] text-black">
      {/* Top section with subscription and social */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {/* Stay in the loop */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Stay in the loop</h3>
            <p className="mb-4 text-sm">
              Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks
              for navigating NYWNFT.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-md text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-black text-white px-4 py-2 rounded-r-md font-medium">Sign up</button>
            </div>
          </div>

          {/* Join the community */}
          <div className="text-white">
            <h3 className="text-xl font-semibold mb-3 text-black">Join the community</h3>
            <div className="flex flex-wrap gap-3">

              <Link to="https://t.me/+YUAQVX-sDoM1NTdh" className="text-black text-2xl p-3 rounded-md  transition-colors">
                <BsTelegram />
                <span className="sr-only">Telegram</span>
              </Link>
              <Link to="#" className="text-black text-2xl p-3 rounded-md  transition-colors">
                <BsTwitterX />
                <span className="sr-only">X App</span>
              </Link>
              <Link
                to="mailto:nywnftinfo@nywnft.com"
                className="text-black text-3xl p-3 rounded-md transition-colors"
              >
                <MdOutlineEmail />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Need help? */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Need help?</h3>
            <Link
              to="#"
              className="inline-block bg-black px-6 py-3 rounded-md font-medium text-white"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-black mx-4 sm:mx-6 lg:mx-8"></div>

      {/* Main footer links */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">


        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 text-left">
          {/* NYWNFT */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#1B1A1E] rounded-lg flex items-center justify-center mr-3">
                {/* NYWNFT Logo placeholder */}
              </div>
              <span className="text-xl font-bold">NYWNFT</span>
            </div>
            <p className="text-sm mb-4">
              Ever dreamt of being part of the New York World? NYWNFT, the bridge between Blockchain and AI, lets you
              own a piece of the action. Generate and mint NFTs, unlocking the future of creativity in the heart of the
              world.
            </p>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/venture" className="text-sm hover:underline">
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-sm hover:underline">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>



          {/* Resources */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">

              <li>
                <Link to="#" className="text-sm hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-sm hover:underline">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  Community Standards
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  NYWNFT Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <p className="text-sm mb-2">For any queries mail us at -</p>
            <Link to="mailto:nywnftinfo@nywnft.com" className="text-sm hover:underline block mb-6">
              nywnftinfo@nywnft.com
            </Link>
          </div>

          {/* Learn about NFTs */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Learn about NFTs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm hover:underline">
                  What is NFT?
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  How to buy NFTs from NYWNFT?
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  How to create / Mint NFTs on NYWNFT?
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  How to sell NFTs on NYWNFT?
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  What is a Crypto wallet?
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:underline">
                  What is NYWNFT Coin?
                </Link>
              </li>
            </ul>
          </div>

          {/* Need more help */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Need more help</h3>
            <p className="text-sm mb-4">Raise a ticket, explain the issues and we are always eager to help you</p>
            <button className="w-full bg-[#1B1A1E] text-white py-3 rounded-lg hover:bg-black transition-colors">
              Raise a ticket
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-black mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">Copyright ©2024 NYWNFT. All rights reserved.</p>
          <p className="text-sm mb-4 sm:mb-0">Developed With Love ❤️ By Wink Ad Media </p>
          <div className="flex space-x-6">
            <Link to="/privacy-polices" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link to="terms-services" className="text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


