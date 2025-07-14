import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface OurServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}

export function CardService({ icon, title, description, image }: OurServiceProps) {
  return (
    <Link
      to="/services"
      className="group max-w-xs cursor-pointer bg-white rounded-xl shadow-md overflow-hidden text-center 
                 hover:shadow-lg transition-transform duration-300 hover:scale-102"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                        w-12 h-12 flex items-center justify-center rounded-full bg-[#e3f6f5] shadow">
          <span className="text-[#0074C1] text-3xl">{icon}</span>
        </div>
      </div>
      <div className="flex flex-col items-center pt-8 pb-4 px-3">
        <h3 className="font-semibold text-lg mb-1 text-[#272343] group-hover:text-[#0074C1] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-3 transition-colors duration-300">
          {description}
        </p>
        <p className="text-[#0074C1] font-semibold">View Service</p>
      </div>
    </Link>
  );
}
