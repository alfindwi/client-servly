import { CardTestimonial } from "@/components/cardTestimonial";
import { HeaderText } from "@/components/headerText";

export function Testimonial() {
  return (
    <div className="py-12 px-4 bg-[#e3f6f5]">
      <div className="max-w-6xl mx-auto text-center">
        <HeaderText
          title="Our Client Says"
          className="text-3xl text-[#272343] md:text-4xl font-bold"
          description="Hear directly from our valued customers about how Servly’s reliable and on-demand services have improved their daily lives."
        />
        <CardTestimonial />
      </div>
    </div>
  );
}
