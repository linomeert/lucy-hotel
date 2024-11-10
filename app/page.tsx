import Image from "next/image";
import HeroBanner from "./components/HeroBanner";
import Locations from "./components/Locations";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";

export default function Home() {
  return (
    <>
      <TopBanner></TopBanner>
      <Header />
      <HeroBanner />
      <Locations />
    </>
  );
}
