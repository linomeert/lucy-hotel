"use client";
import useScrollEffect from "./hooks/useScrollEffect";
import { PiCalendarPlusLight } from "react-icons/pi";

const HeroBanner: React.FC = () => {
  const { scrollPos, sectionRef } = useScrollEffect({ threshold: 0 }); // Use the hook with 50% threshold

  return (
    <section
      className="w-full h-screen bg-cover bg-center relative overflow-hidden mt-[-60px]"
      ref={sectionRef}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        style={{
          transform: `translateY(${scrollPos || 0 * 0.5}px)`, // Adjust the video position based on scroll
        }}
      >
        <source
          src="https://assets.thejuly.com/Home-video/WEB_BOATCO_16X9_NO_OVERLAY.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
      <div className="overlay w-full h-full bg-black bg-opacity-50 flex items-center justify-evenly flex-col md:flex-row min-h-full">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold tracking-wide	">THE LUCY</h1>
          <p className="mt-4 text-xl">Great hotel for great Lucys</p>
        </div>
        <div className="md:text-left text-center max-w-[25rem] flex flex-col md:block w-auto">
          <p className="mt-4 text-l text-white">
            The Lucy hotel is a series of laid-back apartment-hotels. Settle in,
            find focus, be yourself. Every stay has a story.
          </p>
          <button className="self-auto bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-3xl  mt-5 flex items-center	 font-light text-light">
            <span className="mr-2">Book your stay </span>
            <PiCalendarPlusLight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
