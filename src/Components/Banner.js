"use client";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Banner() {
  return (
    <div>
      {/* <div className="flex flex-col lg:flex-row justify-center items-center mt-4 md:mt-6 w-full max-w-6xl mx-auto bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"> */}
      {/* <div className="bg-white p-4 md:p-6 w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800 leading-tight">
                    Shop All Apple Products
                </h1>
                <p className="mb-4 md:mb-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-none">
                    Explore Our Wide Range of Apple Products
                </p>
                <Link href="/Products">
                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-200 hover:shadow-md transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]">
                    Shop Now
                </button>
                </Link>
            </div> */}
      {/* <div className="bg-white p-2 md:p-4 w-full lg:w-1/2 flex justify-center">
                <img 
                    src="/images/allAppleProduct2025.jpeg" 
                    alt="all apple products" 
                    className="object-cover w-full max-w-md lg:max-w-lg h-auto rounded-lg"
                />
            </div> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
      >
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-4 md:mt-6 w-full max-w-6xl mx-auto bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-white p-4 md:p-6 w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800 leading-tight">
                    Shop All Apple Products
                </h1>
                <p className="mb-4 md:mb-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-none">
                    Explore Our Wide Range of Apple Products
                </p>
                <Link href="/Products">
                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-200 hover:shadow-md transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]">
                    Shop Now
                </button>
                </Link>
            </div>
            <div className="bg-white p-2 md:p-4 w-full lg:w-1/2 flex justify-center">
                <img 
                    src="/images/allAppleProduct2025.jpeg" 
                    alt="all apple products" 
                    className="object-cover w-full max-w-md lg:max-w-lg h-auto rounded-lg"
                />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className="flex flex-col lg:flex-row justify-center items-center mt-4 md:mt-6 w-full max-w-6xl mx-auto bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-white p-4 md:p-6 w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800 leading-tight">
                    Shop All Apple Products
                </h1>
                <p className="mb-4 md:mb-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-none">
                    Explore Our Wide Range of Apple Products
                </p>
                <Link href="/Products">
                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-200 hover:shadow-md transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]">
                    Shop Now
                </button>
                </Link>
            </div>
            <div className="bg-white p-2 md:p-4 w-full lg:w-1/2 flex justify-center">
                <img 
                    src="/images/allAppleProduct2025.jpeg" 
                    alt="all apple products" 
                    className="object-cover w-full max-w-md lg:max-w-lg h-auto rounded-lg"
                />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row justify-center items-center mt-4 md:mt-6 w-full max-w-6xl mx-auto bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="bg-white p-4 md:p-6 w-full lg:w-1/2 text-center lg:text-left mb-6 lg:mb-0 lg:mr-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800 leading-tight">
                    Shop All Apple Products
                </h1>
                <p className="mb-4 md:mb-6 text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-md lg:max-w-none">
                    Explore Our Wide Range of Apple Products
                </p>
                <Link href="/Products">
                <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer text-white px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-200 hover:shadow-md transform hover:scale-105 active:scale-95 min-h-[48px] min-w-[120px]">
                    Shop Now
                </button>
                </Link>
            </div>
            <div className="bg-white p-2 md:p-4 w-full lg:w-1/2 flex justify-center">
                <img 
                    src="/images/allAppleProduct2025.jpeg" 
                    alt="all apple products" 
                    className="object-cover w-full max-w-md lg:max-w-lg h-auto rounded-lg"
                />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* </div> */}

      <hr className="w-full max-w-6xl mx-auto mt-4 md:mt-6 border-t-2 border-gray-200" />
    </div>
  );
}
