"use client";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Banner from "./Banner";

export default function BannerView() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
      >
        <SwiperSlide>
          <Banner
            mainTitle={"All Apple Products"}
            secTitle={"Explore Our Wide Range of Apple Products"}
            image={"/images/allAppleProduct2025.jpg"}
            linkHerf={"/Products"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner 
            mainTitle={"iPhone 17 is Here"}
            secTitle={"Shop The New Apple Collection."}
            image={"/images/iPhones/iphone17pro.jpeg"}
            linkHerf={"/Products/iPhone17"}
          />
        </SwiperSlide>
      </Swiper>
      <hr className="w-full max-w-6xl mx-auto mt-4 md:mt-6 border-t-2 border-gray-200" />
    </div>
  );
}
