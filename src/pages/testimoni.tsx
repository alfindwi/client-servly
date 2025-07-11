import { CardTestimonial } from "@/components/cardTestimonial";
import { HeaderText } from "@/components/headerText";
import { useState } from "react";

export function Testimonial() {

  return (
    <div className="py-12 px-4 bg-[#e3f6f5]">
      <div className="max-w-5xl mx-auto text-center">
        <HeaderText title="Our Client Says" description="good" />
        <CardTestimonial />
      </div>
    </div>
  );
}
