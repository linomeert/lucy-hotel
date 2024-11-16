import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

import useScrollEffect from "./hooks/useScrollEffect";

// Import Swiper styles
import "swiper/css";
import Slide from "./Slide";
import { useState } from "react";

// Define the type for each slide
interface Slides {
  img?: string;
  text?: string;
  link?: {
    text: string;
    url: string;
  } | null;
}

// Define the props for the StoryTellingBlockSlider component
interface StoryTellingBlockSliderProps {
  label: string;
  text: string;
  slides?: Slides[];
}

// Component definition
const StoryTellingBlockSlider: React.FC<StoryTellingBlockSliderProps> = ({
  label,
  text,
  slides,
}) => {
  const { isInView, sectionRef } = useScrollEffect({
    threshold: 0.5,
  }); // Use the hook with 10% threshold

  const [realIndex, setRealIndex] = useState<number>(0); // Track realIndex state with TypeScript type

  console.log(realIndex);
  const handleSlideChange = (swiper) => {
    setRealIndex(swiper.realIndex);
  };

  return (
    <section
      className="w-full bg-cover bg-center py-20 bg-[#73808f] color-black "
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 h-full justify-center text-center mb-10">
        <h3 className="text-4xl mb-5">{label?.toUpperCase()}</h3>
        <p className="text-lg">{text}</p>
      </div>
      <div className="slider relative flex justify-center">
        <Swiper
          spaceBetween={30}
          modules={[Navigation]}
          slidesPerView={1.3}
          grabCursor={true}
          onSlideChange={handleSlideChange}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          breakpoints={{
            640: {
              // Mobile view
              slidesPerView: 2,
            },
            768: {
              // Tablet view
              slidesPerView: 3.2,
            },
            1024: {
              // Desktop view
              slidesPerView: 4.2,
            },
          }}
        >
          {slides?.map((slide, index) => {
            console.log(slide); // Log each slide
            return (
              <SwiperSlide
                key={index}
                className={index === 2 ? "span-two-slides" : ""}
              >
                <Slide slide={slide} isInView={isInView} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="nav flex justify-between absolute w-full top-[40%] z-20 w-[80%] ">
          <button
            className={`transform 0.15s ease-out, opacity 0.5s ease-out swiper-button-prev arrow p-3 bg-white rounded-full ${
              realIndex === 0 ? "opacity-0 pointer-events-none" : ""
            }`}
          >
            <IoIosArrowRoundBack className="text-black text-3xl " />
          </button>
          <button
            className={`transform 0.15s ease-out, opacity 0.5s ease-out swiper-button-next arrow p-3 bg-white rounded-full ${
              realIndex === 5 ? "opacity-0 pointer-events-none" : ""
            }`}
          >
            <IoIosArrowRoundForward className="text-black text-3xl " />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StoryTellingBlockSlider;
