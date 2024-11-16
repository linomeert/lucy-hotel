"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import Locations from "./components/Locations";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import StorytellingBlock from "./components/StoryTellingBlock";
import StoryTellingBlockSlider from "./components/StoryTellingBlockSlider";
import Footer from "./components/Footer";

export default function Home() {
  const imageSources = [
    "images/story1.avif",
    "images/story2.avif",
    "images/story3.avif",
    "images/story4.avif",
  ];

  interface Slide {
    img?: string;
    text?: string;
    link?: {
      text: string;
      url: string;
    } | null;
  }

  const [slides, setSlides] = useState<Slide[]>();

  useEffect(() => {
    // Fetch the JSON file from the public directory
    fetch("/data/slides.json")
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error("Error loading locations:", error));
  }, []);

  return (
    <>
      <TopBanner />
      <Header />
      <HeroBanner />
      <Locations />
      <StorytellingBlock
        label="Why stay with the LUCY"
        text="We design our experience around how people truly live. 
          The result? Style that soothes and relaxes. Space to rest up, go out, work, work out. Seamlessly transition between your worlds. You’re in the right place."
        linkText="Ooh tell me more"
        imageSources={imageSources}
      />
      <StoryTellingBlockSlider
        label="Stay a litte longer"
        text="Become a true local. Your place, plus the sparkle of a hotel. Cook dinner or go out, host a meeting in your spacious room. Unwind in the wellness area. Your stay, your way."
        slides={slides}
      />
      <Footer />
    </>
  );
}
