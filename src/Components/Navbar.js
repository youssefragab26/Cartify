"use client";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";

import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "@/Context/CartContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {cart} = useContext(CartContext)

  return (
    <div className="flex justify-center w-full sticky top-0 z-50">
      <div className="w-full ">
        <div
          id="logo"
          className="w-full h-16 md:h-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-gray-200/70 flex flex-col md:flex-row gap-2 md:gap-5 justify-between md:justify-center items-center px-3 md:px-6"
        >
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="w-24 md:w-28 h-8 md:h-10">
              <Link href={"/"}>
                <img src={"/appLogo.png"} className="w-full h-full object-contain" />
              </Link>
            </div>
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <HiX className="text-2xl text-gray-800" /> : <HiMenu className="text-2xl text-gray-800" />}
            </button>
          </div>
          <div className={`w-full md:w-80 h-10 flex justify-center relative ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
            <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="text"
              className="bg-gray-100 text-gray-900 w-full h-10 rounded-full outline-none pl-10 pr-4 border border-gray-200 focus:border-gray-300"
              placeholder={"Search..."}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
          <div className={`flex gap-2 justify-end ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
            <button className="mx-1 md:mx-2 relative rounded-full p-2 hover:bg-gray-100">
              
              <Link href={"/Cart"}>
              <span>{cart.length}</span>
              <FaCartShopping className="text-xl md:text-2xl text-gray-800"/>
              </Link>
            </button>
            
            <button className="mx-1 md:mx-2 rounded-full p-2 hover:bg-gray-100">
              <CgProfile className="text-xl md:text-2xl text-gray-800"/>
            </button>
          </div>
        </div>
        {/* <div className={`w-full bg-white/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur m-auto border-b border-gray-200/70 ${isMobileMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex flex-col md:flex-row justify-center items-center gap-1 md:gap-6 py-2 text-sm text-gray-700">
              <Link href={"/iPhone"}>
                <button className="px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">iPhone</button>
              </Link>
              <Link href={"/ipad"}>
                <button className="px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">iPad</button>
              </Link>
              <Link href={"/mac"}>
                <button className="px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">Mac</button>
              </Link>
              <Link href={"/airpods"}>
                <button className="px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">AirPods</button>
              </Link>
              <Link href={"/watch"}>
                <button className="px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">Watch</button>
              </Link>
              <Link href={"/accessories"}>
                <button className="px-3 py-1 rounded-full hover:bg-gray-100 transition-colors">Accessories</button>
              </Link>
            </nav>
          </div>
        </div> */}
      </div>
    </div>
  );
}
