import { CardService } from "@/components/cardService";
import { HeaderText } from "@/components/headerText";
import { Button } from "@/components/ui/button";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { FaSink } from "react-icons/fa";
import { FaFaucetDrip } from "react-icons/fa6";
import { LuPaintbrushVertical } from "react-icons/lu";
import { MdCleaningServices } from "react-icons/md";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { Link } from "react-router-dom";

export function OurService() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <HeaderText
          title="Our Services"
          className="text-3xl text-[#272343] md:text-4xl font-bold"
          description="Explore a full range of trusted, on-demand home services — delivered quickly and professionally by experienced specialists."
        />

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          <CardService
            icon={<LuPaintbrushVertical />}
            title="Painting Services"
            image="https://www.cheappaintersingapore.com/wp-content/uploads/2021/03/e67887e8.jpg"
            description="Professional painting to refresh your home quickly and cleanly."
          />
          <CardService
            icon={<FaFaucetDrip />}
            title="Plumbing & Leak Repair"
            image="https://osicomfort.com/wp-content/uploads/2022/08/Plumbing.jpg"
            description="Fix leaks and plumbing issues to keep your home dry and safe."
          />
          <CardService
            icon={<FaSink />}
            title="Kitchen Sink & Drain Cleaning"
            image="https://api.futurasink.com/assets/images/29ac881d-2282-4e3a-98bb-42617a4e806b-cistenje-pomivalnega-korita.png"
            description="Remove stubborn blockages and clean kitchen drains — ideal for homes that cook daily."
          />
          <CardService
            icon={<TbAirConditioningDisabled />}
            title="AC Cleaning & Repair"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YPOiz1-OY8PEJ_5QreYfloEUTIGbssD76g&s"
            description="Keep your air conditioning running efficiently year-round."
          />
          <CardService
            icon={<MdCleaningServices />}
            title="Home Cleaning"
            image="https://www.specifichomeservices.com/wp-content/uploads/2025/02/Empty-House-Cleaning-Services-.jpg"
            description="Comprehensive cleaning to maintain a fresh and healthy home."
          />
          <CardService
            icon={<CgSmartHomeRefrigerator />}
            title="Refrigerator Cleaning & Repair"
            image="https://aplusappliancesca.com/wp-content/uploads/2024/07/Refrigerator-Repair-1200x675-1.jpeg"
            description="Quick and accurate assembly by experienced professionals."
          />
        </div>

        <Link to="/services">
          <Button
            data-aos="fade-up"
            variant="blue"
            className="mt-10 px-30 py-10 rounded-sm text-xl font-bold"
          >
            Browse our services
          </Button>
        </Link>
      </div>
    </div>
  );
}
