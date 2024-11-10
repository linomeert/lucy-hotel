"use client";
import { useState, useEffect } from "react";

function Header() {
  const [tresholdPassed, setTresholdPassed] = useState(false);

  useEffect(() => {
    // Function to check if scrolled more than 80% of the viewport height
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the scroll position
      const viewportHeight = window.innerHeight; // Get the viewport height
      const scrollThreshold = 0.5 * viewportHeight; // 80% of viewport height

      // If the user has scrolled more than 80% of the viewport height
      if (scrollPosition > scrollThreshold) {
        setTresholdPassed(true);
      } else {
        setTresholdPassed(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`h-[60px] flex items-center justify-between py-2 px-4 z-10 w-full sticky top-0 transition-all duration-300 ${
        tresholdPassed ? "light:bg-white dark:bg-black" : "bg-transparent"
      }`}
    >
      <div>{tresholdPassed && <a>SELECT LOCATION •</a>}</div>
      <div>{tresholdPassed && <div className="text-2xl">THE LUCY</div>}</div>
      <div>
        {tresholdPassed && (
          <button className="mr-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ">
            Book your stay
          </button>
        )}
        <a>MENU •</a>
      </div>
    </header>
  );
}

export default Header;
