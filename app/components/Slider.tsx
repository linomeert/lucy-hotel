// Add this directive to mark the component as a client component
"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slide from "./Slide";

export default ({ content }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3.2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {content.map((hotel) => (
        <SwiperSlide key={hotel.id}>
          <Slide hotel={hotel} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
