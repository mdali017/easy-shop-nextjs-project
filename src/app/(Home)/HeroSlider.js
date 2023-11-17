"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const HeroSlider = () => {
  return (
    <div className="my-40 border">
      <Swiper
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
        className="mySwiper flex justify-center items-center"
      >
        <SwiperSlide>
          <Image
            src="https://global.caremebd.com/cdn/shop/files/web_size.png?v=1677401504"
            alt=""
            height={700}
            width={1400}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://global.caremebd.com/cdn/shop/files/sunglass_banner.png?v=1662032513"
            alt=""
            height={400}
            width={1400}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://global.caremebd.com/cdn/shop/files/Care_me_books_banner_5.jpg?v=1658396527"
            alt=""
            height={400}
            width={1400}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://global.caremebd.com/cdn/shop/files/car_accessories_web_banner.jpg?v=1667043726"
            alt=""
            height={400}
            width={1400}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://global.caremebd.com/cdn/shop/files/web_banner.png?v=1667043726"
            alt=""
            height={400}
            width={1400}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://global.caremebd.com/cdn/shop/files/web_banner.png?v=1667043726"
            alt=""
            height={400}
            width={1400}
          ></Image>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
