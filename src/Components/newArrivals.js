"use client";
import ProductCard from "./ProductCard";
import { newArrivals } from "../Data/newArrivals";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NewArrivals() {
  return (
    <div className="">
      <div className="w-full max-w-6xl mx-auto mt-10">
        <h1 className="text-2xl font-bold text-left pl-4 md:pl-6">
          New Arrivals
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-center mx-auto w-full  max-w-6xl  mt-2">
          {newArrivals.map((product) => {
            return (
                  <ProductCard
                    key={product.id}
                    productName={product.name}
                    productPrice={product.price}
                    productImg={product.image}
                    productColor={product.colors}
                    productStorage={product.storage}
                  />
            );
          })}
      </div>
      <hr className="w-full max-w-6xl mx-auto mt-4 md:mt-6 border-t-2 border-gray-200" />
    </div>
  );
}
