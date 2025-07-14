import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

type Testimonial = {
  message: string;
  image: string;
  name: string;
  role: string;
};

export function CardTestimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    fetch("https://api.npoint.io/98d7f81f4067e7201437")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel data-aos="fade-up" opts={{ align: "center" }} className="w-full mx-auto">
        <CarouselContent className="pl-4 pr-4">
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 px-2"
            >
              <Card className="bg-[#fffffe] rounded-xl shadow hover:shadow-md transition-shadow h-full">
                <CardContent className="flex flex-col justify-between h-full p-5">
                  <p className="text-[#272343] text-left text-sm mb-4 flex-1">
                    {item.message}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-sm text-[#272343]">
                          {item.name}
                        </h3>
                        <p className="text-xs text-[#6b7280]">{item.role}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 text-xs">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-13 h-13 cursor-pointer bg-[#0074C1] text-white hover:bg-[#0074C1] hover:text-white" />
        <CarouselNext className="w-13 h-13 cursor-pointer bg-[#0074C1] text-white hover:bg-[#0074C1] hover:text-white" />
      </Carousel>
    </div>
  );
}
