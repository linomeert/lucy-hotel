import styles from "./Slide.module.css"; // Import the CSS Module

function Slide({ hotel }) {
  console.log(hotel.city);
  return (
    <>
      <div className={`relative h-[340px]`}>
        <img
          height={"20rem"}
          src={hotel["image-interior"]}
          alt={hotel.location}
          className={`mb-2 h-[20rem] w-full object-cover absolute z-1 `}
        />
        {/* Second image, visible by default */}
        <img
          height={"20rem"}
          src={hotel.image}
          alt={hotel.location}
          className="mb-2 h-[20rem] w-full object-cover absolute z-2 hover:opacity-0 transition-opacity duration-500 ease-in-out"
        />
      </div>
      <div className="flex items-center whitespace-nowrap">
        <h3>{hotel.city.toUpperCase()}</h3>
        <hr className="w-full mx-2" />
        <h3>{hotel.location.toUpperCase()}</h3>
      </div>
      <br></br>
      <p>{hotel.bio}</p>
      <br></br>
      <div className="flex items-center text-xs">
        <p className="flex-1 truncate">{hotel.facilities.join(", ")}</p>
        <a>EXPLORE</a>
      </div>
    </>
  );
}

export default Slide;
