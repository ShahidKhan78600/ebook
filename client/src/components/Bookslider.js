import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Bookslidercard from "./Bookslidercard";

const Bookslider = () => {
  return (
    <div className="container p-4 justify-content-center">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className="mySwiper"
        
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            0:{
                slidesPerView:1,
                spaceBetween:10,
            },
            480:{
                slidesPerView:1,
                spaceBetween:40,
            },
            768:{
                slidesPerView:2,
                spaceBetween:40,
            },
            1024:{
                slidesPerView:3,
                spaceBetween:50,
            },
            1280:{
                slidesPerView:4,
                spaceBetween:50,
            },
        }}
      >
        <SwiperSlide><Bookslidercard/></SwiperSlide>
        <SwiperSlide><Bookslidercard/></SwiperSlide>
        <SwiperSlide><Bookslidercard/></SwiperSlide>
        <SwiperSlide><Bookslidercard/></SwiperSlide>
        <SwiperSlide><Bookslidercard/></SwiperSlide>
        <SwiperSlide><Bookslidercard/></SwiperSlide>

        
        ...
      </Swiper>
    </div>
  );
};

export default Bookslider;
