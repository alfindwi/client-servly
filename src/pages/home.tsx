import { useEffect } from "react";
import { Hero } from "./hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { WhyChooseUs } from "./whyChoose";
import { OurService } from "./ourService";

export function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once : true
    })
  }, [])
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurService />
    </>
  );
}
