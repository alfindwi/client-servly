import { CardHowWorks } from "@/components/cardHowWorks";
import { HeaderText } from "@/components/headerText";

export function HowWorks() {
  return (
    <div className="px-4 py-12 bg-[#e3f6f5]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <HeaderText
          title="How It Works"
          className="text-3xl text-[#272343] md:text-4xl font-bold"
          description="Experience seamless booking, real-time updates, and trusted service professionals — all in just a few simple steps with Servly."
        />
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
        <CardHowWorks
          number="1"
          title="Find the Services You Need"
          description="Discover a wide selection of trusted home services tailored to your unique needs."
          icon=""
        />
        <CardHowWorks
          number="2"
          title="Fill in Location & Details"
          description="Provide your address and a few service details so we can match you with the best specialists."
          icon=""
        />
        <CardHowWorks
          number="3"
          icon=""
          title="Set a Schedule"
          description="Choose a convenient date and time that fits your daily routine."
        />
        <CardHowWorks
          number="4"
          icon=""
          title="Confirmation & Booking"
          description="Review and confirm your booking in just a few clicks — it’s quick and hassle-free."
        />
        <CardHowWorks
          number="5"
          icon=""
          title="Get Notifications"
          description="Receive real-time updates about your service status, technician arrival, and more."
        />
        <CardHowWorks
          number="6"
          icon=""
          title="Service Completed, Leave a Review"
          description="Enjoy a smooth service experience, then share your feedback to help us improve."
        />
      </div>
    </div>
  );
}
