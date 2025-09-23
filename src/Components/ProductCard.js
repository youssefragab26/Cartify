"use client";
import { CartContext } from "@/Context/CartContext";
import Link from "next/link";
import { useContext } from "react";

export default function ProductCard({
  productName,
  productPrice,
  productImg,
  href,
  productStorage,
  productColor,
}) {
  const { cart, setCart } = useContext(CartContext);
  const addToCart = () => {
    setCart([
      ...cart,
      {
        name: productName,
        price: productPrice,
        img: productImg,
        storage: productStorage,
        color: productColor,
      },
    ]);
  };
  const buyNow = () => {
    setCart([
      {
        name: productName,
        price: productPrice,
        img: productImg,
        storage: productStorage,
        color: productColor,
      },
    ]);
  };
  return (
    <div className="w-full">
      <div className="group relative w-full max-w-[220px] md:max-w-[260px] mx-auto bg-white m-2 md:m-2.5 rounded-3xl border border-gray-200/70 p-4 md:p-5 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition duration-200 ease-out overflow-hidden">
        {productColor === "" && productStorage === "" ? null : (
          <div
            id="colorAndStorage"
            className="absolute top-3 left-3 flex items-center gap-2 z-10"
          >
            <span className="px-2 py-0.5 text-[10px] md:text-xs rounded-full bg-gray-900 text-white shadow-sm">
              {productColor}
            </span>
            <span className="px-2 py-0.5 text-[10px] md:text-xs rounded-full bg-gray-100 text-gray-800 border border-gray-200 shadow-sm">
              {productStorage}
            </span>
          </div>
        )}

        <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-b bg-white overflow-hidden">
          <img
            src={productImg}
            className="object-contain w-full h-full p-4 md:p-6 group-hover:scale-[1.03] transition-transform duration-300 ease-out"
            alt={productName}
          />
        </div>
        <div className="text-center pt-3 md:pt-4 px-1">
          <div>
            <h1 className="text-base md:text-lg font-semibold tracking-tight text-gray-900 truncate">
              {productName}
            </h1>
          </div>
          <div className="mt-1 text-sm md:text-base font-medium text-gray-600">
            {productPrice === 0 ? (
              <p className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] md:text-xs font-semibold bg-red-100 text-red-700 border border-red-200">
                Sold Out
              </p>
            ) : (
              <p>{`${productPrice.toLocaleString()} EGP`}</p>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 px-1">
          <Link href={"/Cart"}>
            <button
              className="h-10 md:h-11 w-full sm:w-32 cursor-pointer rounded-full bg-black text-white text-sm md:text-base font-medium hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/30 active:scale-[0.98] transition"
              onClick={buyNow}
            >
              Buy
            </button>
          </Link>
          <button
            className="h-10 md:h-11 w-1/2 sm:w-36 cursor-pointer rounded-full border border-gray-300 bg-white text-gray-900 text-sm md:text-base font-medium hover:bg-gray-50 active:scale-[0.98] transition"
            onClick={addToCart}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
