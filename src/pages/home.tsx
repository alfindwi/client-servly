import { useEffect } from "react";
import { Hero } from "./hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { WhyChooseUs } from "./whyChoose";
import { OurService } from "./ourService";
import { Testimonial } from "./testimoni";

export function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once : true
    })
  }, [])
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <OurService />
      <Testimonial/>
    </>
  );
}
