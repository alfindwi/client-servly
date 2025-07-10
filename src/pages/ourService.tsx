import { OurServiceComponent } from "@/components/ourService";
import { FaFaucetDrip } from "react-icons/fa6";
import { MdCleaningServices, MdOutlineElectricBolt } from "react-icons/md";
import { LuPaintbrushVertical } from "react-icons/lu";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbAirConditioningDisabled } from "react-icons/tb";

export function OurService() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold">
          Our services
        </h2>
        <p
          data-aos="fade-up"
          className="text-gray-600 text-sm mt-2 mb-8 max-w-2xl mx-auto"
        >
          Discover a wide range of reliable, on-demand home services designed to
          simplify your life — from expert repairs to scheduled maintenance, all
          delivered seamlessly through our platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <OurServiceComponent
            icon={<LuPaintbrushVertical />}
            title="Painting Services"
            image="./src/assets/painting2.jpg"
            description="Professional painting to refresh your home quickly and cleanly."
          />
          <OurServiceComponent
            icon={<FaFaucetDrip />}
            title="Faucet & Leak Repairs"
            image="./src/assets/plumbing.jpg"
            description="Fix leaks and plumbing issues to keep your home dry and safe."
          />
          <OurServiceComponent
            icon={<MdOutlineElectricBolt />}
            title="Electrical Maintenance"
            image="./src/assets/electrical.jpg"
            description="Certified electricians ready to handle installations & repairs."
          />
          <OurServiceComponent
            icon={<TbAirConditioningDisabled />}
            title="AC Cleaning & Repair"
            image="./src/assets/ac.jpg"
            description="Keep your air conditioning running efficiently year-round."
          />
          <OurServiceComponent
            icon={<MdCleaningServices />}
            title="Home Cleaning"
            image="./src/assets/cleaning.jpg"
            description="Comprehensive cleaning to maintain a fresh and healthy home."
          />
          <OurServiceComponent
            icon={<CgSmartHomeRefrigerator />}
            title="Refrigerator Cleaning & Repair"
            image="./src/assets/furniture.jpg"
            description="Quick and accurate assembly by experienced professionals."
          />
        </div>
      </div>
    </div>
  );
}
