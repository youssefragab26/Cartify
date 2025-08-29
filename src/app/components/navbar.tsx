"use client";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";


import Link from "next/link";
import { useState } from "react";


export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  let search = searchValue;

  return (
    <div className="flex justify-center">
      <div>
        <div
          id="logo"
          className="w-7xl h-20 bg-neutral-200 flex gap-[20px] justify-center p-4 rounded-t"
        >
          <div className="w-100 h-10">
            <Link href={"/"}>
              <img src={"/appLogo.png"} className="w-30 h-10" />
            </Link>
          </div>
          <div className="w-100 h-10 flex justify-center relative">
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
          <div className="w-100 h-10 flex gap-1 justify-end ">
            <button className="mx-2 relative"> 
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
              <FaCartShopping className="text-2xl"/>
            </button>
            <button className="mx-2">
              <CgProfile className="text-2xl"/>
            </button>
          </div>
        </div>
        <div className="w-7xl h-10 bg-neutral-700 text-neutral-200 p-1.5 m-auto flex justify-center rounded-b">
          <Link href={"/iphone"}>
            <button className="w-40 h-7 border-r-2 border-r-neutral-500 ">
              iPhone
            </button>
          </Link>
          <Link href={"/mac"}>
            <button className="w-40 h-7 border-r-2 border-r-neutral-500 ">
              Mac
            </button>
          </Link>
          <Link href={"/airpods"}>
            <button className="w-40 h-7 border-r-2 border-r-neutral-500 ">
              AirPods
            </button>
          </Link>
          <Link href={"/ipad"}>
            <button className="w-40 h-7 border-r-2 border-r-neutral-500 ">
              iPad
            </button>
          </Link>
          <Link href={"/accessories"}>
            <button className="w-40 h-7">Accessories</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
