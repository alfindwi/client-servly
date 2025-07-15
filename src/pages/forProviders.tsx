import { CardHowWorks } from "@/components/cardHowWorks";
import { HeaderText } from "@/components/headerText";
import { FaUpload } from "react-icons/fa";
import {
  MdAppRegistration,
  MdOutlineWorkOutline,
  MdVerified,
} from "react-icons/md";

export function Providers() {
  return (
    <div className="py-16 px-4 bg-[#e3f6f5]">
      <div className="max-w-6xl mx-auto text-center">
        <HeaderText
          title="Join Servly as a Trusted Partner"
          className="text-3xl md:text-4xl text-[#272343] font-bold"
          description="Easily join our trusted network and provide quality home services to thousands of satisfied homeowners."
        />
      </div>

      <div className="max-w-6xl mt-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <CardHowWorks
          number="1"
          title="Simple Registration"
          description="Fill out our online application to get started — quick and hassle-free."
          icon={<MdAppRegistration />}
        />
        <CardHowWorks
          number="2"
          title="Upload Credentials"
          description="Submit your business license or relevant certificates securely for verification."
          icon={<FaUpload />}
        />
        <CardHowWorks
          number="3"
          title="Verification Process"
          description="Our team reviews your documents swiftly to ensure quality and trust."
          icon={<MdVerified />}
        />
        <CardHowWorks
          number="4"
          title="Go Live & Receive Orders"
          description="Once approved, your services appear on our platform, ready to receive requests."
          icon={<MdOutlineWorkOutline />}
        />
      </div>

      <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-[#0074C1] mb-2">
            Expand Your Reach
          </h3>
          <p className="text-sm text-[#272343]">
            Connect instantly with thousands of homeowners actively seeking your
            services.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-[#0074C1] mb-2">
            Flexible & Independent
          </h3>
          <p className="text-sm text-[#272343]">
            Accept jobs on your own schedule, giving you complete control of
            your time and income.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold text-[#0074C1] mb-2">
            Reliable Payments
          </h3>
          <p className="text-sm text-[#272343]">
            Enjoy timely payouts directly to your account with transparent
            transaction details.
          </p>
        </div>
      </div>
    </div>
  );
}
