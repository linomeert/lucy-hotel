"use client";
import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [tresholdPassed, setTresholdPassed] = useState<boolean>(false);

  useEffect(() => {
    // Function to check if scrolled more than 80% of the viewport height
    const handleScroll: () => void = () => {
      const scrollPosition = window.scrollY; // Get the scroll position
      const viewportHeight = window.innerHeight; // Get the viewport height
      const scrollThreshold = 0.5 * viewportHeight; // % of viewport height

      // If the user has scrolled more than % of the viewport height
      if (scrollPosition > scrollThreshold) {
        setTresholdPassed(true);
      } else {
        setTresholdPassed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-[60px] flex items-center justify-between py-2 px-4 z-10 w-full sticky top-0 transition-all duration-300 ${
        tresholdPassed ? "bg-black" : "bg-transparent"
      }`}
    >
      {tresholdPassed && window.innerWidth > 640 && (
        <div className="text-white">
          <a>SELECT LOCATION •</a>
        </div>
      )}
      <div>
        {tresholdPassed && <div className="text-2xl text-white">THE LUCY</div>}
      </div>
      <div>
        {tresholdPassed &&
          typeof window !== "undefined" &&
          window.innerWidth > 640 && (
            <button className="mr-5 text-bg-white hover:bg-gray-100  font-semibold py-2 px-4 border border-gray-400 rounded-3xl shadow text-white">
              Book your stay
            </button>
          )}
        <a className="text-white">MENU •</a>
      </div>
    </header>
  );
};

export default Header;
