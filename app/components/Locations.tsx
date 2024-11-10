"use client";
import { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Slide from "./Slide";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/data/locations.json")
      .then((response) => response.json())
      .then((data) => handleResponse(data))
      .catch((error) => console.error("Error loading locations:", error));
  }, []);

  function handleResponse(data) {
    const uniqueCities = data
      .map((item) => item.city)
      .filter((city, index, self) => self.indexOf(city) === index);
    setCities(uniqueCities);
    setLocations(data);
    setAllLocations(data);
  }

  function filterList(e) {
    // reset the cities
    e.preventDefault();
    console.log(e.target.innerText);
    console.log(selectedCity);
    if (e.target.innerText.replace("•", "").trim() == selectedCity) return;
    setFadeClass("fade-out");

    setTimeout(() => {
      setFadeClass("fade-in");

      const filteredLocations = allLocations.filter(
        ({ city }) => city === e.target.innerText
      );

      console.log(filteredLocations);
      if (!filteredLocations.length) {
        setSelectedCity(null);
        return setLocations(allLocations);
      }
      setSelectedCity(e.target.innerText);
      setLocations(filteredLocations);
    }, 100);
  }

  return (
    <>
      <section className="w-full bg-cover bg-center py-10">
        <div className="container mx-auto px-4 h-full  justify-center">
          <div className="max-w-xl mb-5">
            <h2>LOCATIONS</h2>
            <p>
              Our sustainable apartment-hotels feature fully equipped kitchens
              and a full hotel experience, giving you the space to live and the
              service to clean up after. Reception, gym and food goodies? We got
              those too.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/4 md:pr-4 ">
              <ul className="md:space-y-2 flex md:flex-col flex-row gap-2 md:gap-0 overflow-x-auto scrollbar-hidden">
                <li key={"all"} className="whitespace-nowrap ">
                  <a href="#" onClick={(e) => filterList(e)}>
                    All locations{" "}
                    {!selectedCity && <span className="absolute ml-2">•</span>}
                  </a>
                </li>
                {cities.map((city) => (
                  <li
                    key={city}
                    className="whitespace-nowrap relative md:border-t border-solid md:border-1 md:pt-2 md:ml-0 ml-6 md:border-black dark:border-white border-opacity-30"
                  >
                    <a href="#" onClick={(e) => filterList(e)}>
                      {city}{" "}
                      {city === selectedCity && (
                        <span className="absolute ml-2">•</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-3/4">
              <div
                className={`${fadeClass} transition-opacity duration-100 ease-in-out`}
              >
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1.3}
                  grabCursor={true}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  breakpoints={{
                    640: {
                      // Mobile view
                      slidesPerView: 1.3,
                      spaceBetween: 20,
                    },
                    768: {
                      // Tablet view
                      slidesPerView: 2.2,
                      spaceBetween: 30,
                    },
                    1024: {
                      // Desktop view
                      slidesPerView: 3.2,
                      spaceBetween: 40,
                    },
                  }}
                >
                  {locations.map((hotel) => (
                    <SwiperSlide key={hotel.id}>
                      <Slide hotel={hotel} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Locations;
