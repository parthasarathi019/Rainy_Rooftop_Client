//eslint-disable-next-line
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Main_Slider.css";

// import required modules
import { Pagination } from "swiper";

// Import Swiper Images

import Swiper1 from '../../../assets/home/slide1.jpg'
import Swiper2 from '../../../assets/home/slide2.jpg'
import Swiper3 from '../../../assets/home/slide3.jpg'
import Swiper4 from '../../../assets/home/slide4.jpg'
import Swiper5 from '../../../assets/home/slide5.jpg'

export default function Main_Slider() {
  return (
    <>
    <section className="text-center my-3 md:my-6">
        <p className="pb-2 text-[#D99904] italic text-[.7em] md:text-[1.06em]">---From 11:00am to 10:00pm---</p>
        <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
        <p className="text-[1em] md:text-[2em] py-[3px] md:py-[5px]">ORDER ONLINE</p>
        <hr className="w-[34.7%] md:w-[20%] mx-auto border-[1.3px] md:border-2 border-[#E8E8E8] " />
    </section>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide className="flex flex-col">
            <img src={Swiper1} alt="Swiper Image Loading..." />
             <h3 className=" text-center -mt-6 md:-mt-[4em] text-[.66em] md:text-2xl text-yellow-50 ">SALADS</h3>
         </SwiperSlide>
         <SwiperSlide className="flex flex-col">
            <img src={Swiper2} alt="Swiper Image Loading..." />
             <h3 className=" text-center -mt-6 md:-mt-[4em] text-[.66em] md:text-2xl text-yellow-50 ">SALADS</h3>
         </SwiperSlide>
         <SwiperSlide className="flex flex-col">
            <img src={Swiper3} alt="Swiper Image Loading..." />
             <h3 className=" text-center -mt-6 md:-mt-[4em] text-[.66em] md:text-2xl text-yellow-50 ">SALADS</h3>
         </SwiperSlide>
         <SwiperSlide className="flex flex-col">
            <img src={Swiper4} alt="Swiper Image Loading..." />
             <h3 className=" text-center -mt-6 md:-mt-[4em] text-[.66em] md:text-2xl text-yellow-50 ">SALADS</h3>
         </SwiperSlide>
         <SwiperSlide className="flex flex-col relative">
            <img src={Swiper5} alt="Swiper Image Loading..." />
             <h3 className=" text-center bottom-[6.5px] md:bottom-[55px] text-yellow-50 absolute z-10 text-[.66em] md:text-2xl ">SALADS</h3>
         </SwiperSlide>
      </Swiper>
    </>
  );
}


