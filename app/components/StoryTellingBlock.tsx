"use client";
import { useEffect, useState } from "react";
import useScrollEffect from "./hooks/useScrollEffect";

interface StoryTellingBlockProps {
  label: string;
  text: string;
  linkText: string;
  imageSources: string[];
}

const storyTellingBlock: React.FC<StoryTellingBlockProps> = ({
  label,
  text,
  linkText,
  imageSources,
}) => {
  const { scrollPos, sectionRef, isInView } = useScrollEffect({
    threshold: 0.1,
  }); // Use the hook with 10% threshold

  const [YOffset, setYOffset] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 640) {
      setYOffset(100);
    }
  }, []);

  return (
    <section
      className="bg-[#de815d] w-full bg-cover bg-center relative grid content-center grid-cols-3 gap-8 md:gap-12 overflow-hidden"
      ref={sectionRef}
    >
      {imageSources.map((story, index) => (
        <figure
          key={index}
          className={
            index === imageSources.length - 1 ? "order-last sm:order-none" : ""
          }
          style={{
            transform: `translateY(${
              (scrollPos || 0) * (0.1 + index * 0.05)
            }px)`, // Adjust each image's scroll effect slightly differently
            transition: "transform 0.15s ease-out, opacity 0.5s ease-out", // Smooth transition for transform and opacity with different durations
            opacity: `${isInView ? 1 : 0}`,
          }}
        >
          <picture>
            <source srcSet={`${story}`} type="image/webp" />
            <img src={story} alt={story} />
          </picture>
        </figure>
      ))}
      <article
        className="md:col-span-2 col-span-3 text-black max-w-2xl pr-4 p-3 md:p-0"
        style={{
          transform: `translateY(${-(scrollPos || 0) * 0.02 + YOffset}px)`,
        }}
      >
        <span className="md:text-md text-sm block">{label.toUpperCase()}</span>
        <span className="md:text-3xl text-2xl block my-3 max-w-50">{text}</span>
        <a className="text-md block text-right">{linkText}</a>
      </article>
    </section>
  );
};

export default storyTellingBlock;
