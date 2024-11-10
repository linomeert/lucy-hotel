import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import Locations from "./components/Locations";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import StorytellingBlock from "./components/StoryTellingBlock";

export default function Home() {
  const imageSources = [
    "images/story1.avif",
    "images/story2.avif",
    "images/story3.avif",
    "images/story4.avif",
  ];
  return (
    <>
      <TopBanner></TopBanner>
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
    </>
  );
}
