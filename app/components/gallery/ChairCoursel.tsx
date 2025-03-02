"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const ChairCarousel = ({ selectedImages }) => {
  return (
    <div className="flex justify-center">
       {/* <Image
          src="/photo/Rectangle 1.svg" // Replace with your actual SVG path
          alt="Carousel Background"
          layout="fill"
          objectFit="cover"
          className="h-[30px] w-[200px]"
        /> */}
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Pagination, Navigation]}
        className="w-[400px]" // Adjusts the width of the carousel
      >
        {selectedImages.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <img
              src={src}
              alt={`Selected chair ${index + 1}`}
              className="w-[500px] h-[450px] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
