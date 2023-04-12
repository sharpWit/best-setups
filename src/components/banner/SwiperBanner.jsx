import { banner1, banner2, banner3, banner4, banner5 } from "../../assets";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperBanner = () => {
  return (
    <div>
      <Swiper
        dir="rtl"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" block relative"
      >
        <SwiperSlide>
          <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperBanner;
