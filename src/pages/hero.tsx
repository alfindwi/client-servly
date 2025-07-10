import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

export function Hero() {
  return (
    <div className="flex flex-col md:flex-row px-10 py-5 items-center justify-between">
      <div
        data-aos="fade-right"
        className="w-full md:w-1/2 max-w-2xl text-black"
      >
        <div className="text-7xl text-[#272343] font-bold space-y-2 pt-7 pb-4">
          <h1 >
            We are <span className="text-[#0074C1]">service</span>
          </h1>
          <p>
            <span className="text-[#0074C1]">provider</span> for your
          </p>
          <p>home.</p>
        </div>
        <p className="text-base text-[#272343]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil dolores
          quos, ipsa
        </p>
        <Button variant={"blue"} className="mt-5 px-6 py-4">
          Book now
        </Button>
      </div>

      <div className="relative flex justify-center md:justify-end w-full md:w-1/2">
        <div
          className="absolute w-[400px] h-[400px] rounded-full border-4 border-dashed border-[#418fce] 
    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        ></div>

        <div
          className="absolute w-[350px] h-[350px] rounded-full bg-[#449edb] 
    top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        ></div>

        <img
          src="./src/assets/plumber.png"
          alt="Plumber"
          className="relative z-10 object-contain"
        />

        <div
          className="absolute top-80 right-0 w-full max-w-[210px] bg-white/50 backdrop-blur-md 
          shadow-[0_3px_6px_rgba(0,0,0,0.16),_0_3px_6px_rgba(0,0,0,0.23)] px-5 py-3 rounded-xl z-20 flex items-center gap-3"
        >
          <img
            src="./src/assets/customer1.jpg"
            alt="Customer"
            className="rounded-full w-13 h-13 border-2 "
          />
          <div>
            <p className="text-[14px] font-semibold text-gray-800">
              Anya Taylor Joy
            </p>
            <p className="text-[13px] font-semibold text-gray-600">Actress</p>
            <div className="flex items-center gap-1 mt-1 text-yellow-400 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
        <div
          className="absolute top-30 right-90  w-full max-w-[210px] bg-white/50 backdrop-blur-md 
          shadow-[0_3px_6px_rgba(0,0,0,0.16),_0_3px_6px_rgba(0,0,0,0.23)] px-5 py-3 rounded-xl z-20 flex items-center gap-3"
        >
          <img
            src="./src/assets/cust2.jpg"
            alt="Customer"
            className="rounded-full w-13 h-13 border-2 "
          />
          <div>
            <p className="text-[14px] font-semibold text-gray-800">
              Keanu Reeves
            </p>
            <p className="text-[13px] font-semibold text-gray-600">Actor</p>
            <div className="flex items-center gap-1 mt-1 text-yellow-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
