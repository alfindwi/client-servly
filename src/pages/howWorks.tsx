import { CardHowWorks } from "@/components/cardHowWorks";
import { HeaderText } from "@/components/headerText";
import { FaMapLocationDot } from "react-icons/fa6";
import { GiConfirmed } from "react-icons/gi";
import { GrSchedule } from "react-icons/gr";
import { LuUserRoundSearch } from "react-icons/lu";
import { MdNotificationsActive, MdOutlineRateReview } from "react-icons/md";

export function HowWorks() {
  
  return (
    <div className="px-4 py-12 bg-[#e3f6f5]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <HeaderText
          title="How It Works"
          className="text-3xl text-[#272343] md:text-5xl font-bold"
          description="Experience seamless booking, real-time updates, and trusted service professionals — all in just a few simple steps with Servly."
        />
      </div>
      <div data-aos="fade-up" className="max-w-6xl mt-20 mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
        <CardHowWorks
          number="1"
          title="Find the Services You Need"
          description="Discover a wide selection of trusted home services tailored to your unique needs."
          icon={<LuUserRoundSearch/>}
        />
        <CardHowWorks
          number="2"
          title="Fill in Location & Details"
          description="Provide your address and a few service details so we can match you with the best specialists."
          icon={<FaMapLocationDot/>}
        />
        <CardHowWorks
          number="3"
          icon={<GrSchedule/>}
          title="Set a Schedule"
          description="Choose a convenient date and time that fits your daily routine."
        />
        <CardHowWorks
          number="4"
          icon={<GiConfirmed/>}
          title="Confirmation & Booking"
          description="Review and confirm your booking in just a few clicks — it’s quick and hassle-free."
        />
        <CardHowWorks
          number="5"
          icon={<MdNotificationsActive/>}
          title="Get Notifications"
          description="Receive real-time updates about your service status, technician arrival, and more."
        />
        <CardHowWorks
          number="6"
          icon={<MdOutlineRateReview/>}
          title="Service Completed, Leave a Review"
          description="Enjoy a smooth service experience, then share your feedback to help us improve."
        />
      </div>
    </div>
  );
}
