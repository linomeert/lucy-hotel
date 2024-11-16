"use client";

// Define the props for the Slide component
import useScrollEffect from "./hooks/useScrollEffect";

interface Slide {
  img?: string;
  text?: string;
  link?: {
    text: string;
    url: string;
  } | null;
}

interface SlideProps {
  slide: Slide;
  isInView: boolean;
}

const Slide: React.FC<SlideProps> = ({ slide, isInView }) => {
  console.log(isInView);

  const { img, text, link } = slide;
  return (
    <div className="h-[400px]">
      {img && (
        <img
          src={img}
          alt="slide image"
          style={{
            transition: "transform 0.15s ease-out, opacity 0.5s ease-out", // Smooth transition for transform and opacity with different durations
            opacity: `${isInView ? 1 : 0}`,
          }}
        />
      )}
      <div
        className={`flex flex-col  h-full ${
          link ? "justify-between" : "justify-end"
        }`}
      >
        {text && <p>{text}</p>}
        {link && (
          <button
            onClick={() => (window.location.href = link.url)} // or your own navigation logic
            className="w-auto self-start bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-3xl shadow mt-5"
          >
            {link.text}
          </button>
        )}
      </div>
    </div>
  );
};

export default Slide;
