import type { ReactNode } from "react";

interface OurServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}

export function OurServiceComponent({ icon, title, description, image }: OurServiceProps) {
  return (
    <div
      className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden text-center hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-60 object-cover" />
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#e3f6f5] shadow">
          <span className="text-[#0074C1] text-3xl">{icon}</span>
        </div>
      </div>
      <div className="flex flex-col items-center pt-8 pb-4 px-3">
        <h3 className="font-semibold text-lg mb-1 text-[#272343]">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{description}</p>
        <a href="/services" className="text-[#0074C1] font-medium text-sm hover:underline">View Service</a>
      </div>
    </div>
  );
}
