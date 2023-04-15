import { MdPause, MdPlayArrow } from "react-icons/md";
import { banner1, banner2, banner3, banner4, banner5 } from "../../assets";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const SwiperBanner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleIsPlaying = () => {
    if (swiperInstance) {
      if (isPlaying) {
        swiperInstance.autoplay.stop();
      } else {
        swiperInstance.autoplay.start();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleSwiper = (swiper) => {
    setSwiperInstance(swiper);
  };

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
        className="block relative"
        onSwiper={handleSwiper}
      >
        <div className="swiper-control" onClick={handleIsPlaying}>
          {isPlaying ? (
            <MdPause className="ico" />
          ) : (
            <MdPlayArrow className="ico" />
          )}
        </div>

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
