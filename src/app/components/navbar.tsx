"use client";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let search = searchValue;

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-7xl">
        {/* Main navbar */}
        <div
          id="logo"
          className="w-full h-16 md:h-20 bg-neutral-200 flex flex-col md:flex-row gap-2 md:gap-5 justify-between md:justify-center items-center p-3 md:p-4 rounded-t"
        >
          {/* Logo and mobile menu button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="w-24 md:w-28 h-8 md:h-10">
              <Link href={"/"}>
                <img src={"/appLogo.png"} className="w-full h-full object-contain" />
              </Link>
            </div>
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
          </div>

          {/* Search bar - hidden on mobile when menu is closed */}
          <div className={`w-full md:w-80 h-10 flex justify-center relative ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <CiSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-neutral-700 text-xl" />
            <input
              type="text"
              className="bg-neutral-300 w-full h-10 rounded outline-none pl-8"
              placeholder={"Search..."}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>

          {/* Cart and Profile buttons */}
          <div className={`flex gap-2 justify-end ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
            <button className="mx-1 md:mx-2 relative"> 
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
              <FaCartShopping className="text-xl md:text-2xl"/>
            </button>
            <button className="mx-1 md:mx-2">
              <CgProfile className="text-xl md:text-2xl"/>
            </button>
          </div>
        </div>

        {/* Navigation menu */}
        <div className={`w-full bg-neutral-700 text-neutral-200 p-2 m-auto rounded-b ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="flex flex-col md:flex-row justify-center gap-1 md:gap-0">
            <Link href={"/iphone"}>
              <button className="w-full md:w-40 h-8 md:h-7 border-b md:border-b-0 md:border-r-2 border-neutral-500 hover:bg-neutral-600 transition-colors">
                iPhone
              </button>
            </Link>
            <Link href={"/mac"}>
              <button className="w-full md:w-40 h-8 md:h-7 border-b md:border-b-0 md:border-r-2 border-neutral-500 hover:bg-neutral-600 transition-colors">
                Mac
              </button>
            </Link>
            <Link href={"/airpods"}>
              <button className="w-full md:w-40 h-8 md:h-7 border-b md:border-b-0 md:border-r-2 border-neutral-500 hover:bg-neutral-600 transition-colors">
                AirPods
              </button>
            </Link>
            <Link href={"/ipad"}>
              <button className="w-full md:w-40 h-8 md:h-7 border-b md:border-b-0 md:border-r-2 border-neutral-500 hover:bg-neutral-600 transition-colors">
                iPad
              </button>
            </Link>
            <Link href={"/accessories"}>
              <button className="w-full md:w-40 h-8 md:h-7 hover:bg-neutral-600 transition-colors">Accessories</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
