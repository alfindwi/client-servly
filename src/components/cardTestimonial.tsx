import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Ayla Putri",
    role: "Content Creator",
    message:
      "Servly really simplifies my busy life — I can book home repairs anytime without hassle. Super recommended!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Rizky Pratama",
    role: "Software Engineer",
    message:
      "I love how Servly lets me track every order and payment directly from my phone. Fast and transparent service!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Siti Rahma",
    role: "Small Business Owner",
    message:
      "Thanks to Servly, our shop always gets cleaned and maintained on schedule. Saves so much time!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Andi Nugraha",
    role: "Freelance Designer",
    message:
      "Booking an electrician or plumber via Servly is super easy. Their certified technicians always do a great job.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Nadia Dewi",
    role: "Marketing Specialist",
    message:
      "The app design is so user‑friendly. Even my parents use Servly to call cleaning services and AC repair easily!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Yoga Saputra",
    role: "Photographer",
    message:
      "Servly saved me when our air conditioner broke down before an important shoot. Fast response & professional!",
  },
  {
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Putri Ayuningtyas",
    role: "Teacher",
    message:
      "No hidden costs — I know the price upfront before booking. Servly really puts customers first.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Bima Wijaya",
    role: "Entrepreneur",
    message:
      "I love how Servly offers a warranty if something goes wrong. Makes me feel secure when booking any service.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Dewi Kartika",
    role: "Accountant",
    message:
      "I often use Servly for home cleaning before hosting guests. Easy scheduling and trusted professionals!",
  },
  {
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Randy Mahendra",
    role: "UI/UX Designer",
    message:
      "From plumbing to AC cleaning, Servly has become my go‑to app. Quick, reliable, and everything can be tracked online.",
  },
];

export function CardTestimonial() {
  return (
    <Carousel data-aos="fade-up" opts={{ align: "end" }}  className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {testimonials.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-2">
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
