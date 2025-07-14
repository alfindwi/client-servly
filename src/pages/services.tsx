import { CardService } from "@/components/cardService";
import { HeaderText } from "@/components/headerText";
import { iconMap } from "@/lib/icon";
import { useEffect, useState } from "react";


type Service = {
  icon: React.ReactNode;
  title: string;
  image: string;
  description: string;
};


export function Services() {
  const [services, setServices] = useState<Service[]>([]);
  useEffect(() => {
    fetch("https://api.npoint.io/98d7f81f4067e7201437")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-12 px-4 bg-[#e3f6f5]">
      <div className="max-w-6xl mx-auto text-center">
        <HeaderText
          title="Our Services"
          className="text-4xl text-[#272343] md:text-6xl mb-5 font-bold"
          description="Explore a full range of trusted, on-demand home services — delivered quickly and professionally by experienced specialists."
        />
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          {services.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <CardService
                key={index}
                icon={<Icon />}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
