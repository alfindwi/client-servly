import { ChooceComponent } from "@/components/chooseUs";
import { HeaderText } from "@/components/headerText";

export function WhyChooseUs() {
  return (
    <div className="bg-[#e3f6f5] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <HeaderText
          title="Why Choose Us?"
          className="text-3xl text-[#272343] md:text-4xl font-bold"
          description="Discover why thousands trust Servly for seamless, reliable, and expertly delivered home services tailored to your needs."
        />

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          <ChooceComponent
            number="1"
            title="Seamless Digital Experience"
            description="Book, track, and pay for your service — all in one simple, easy-to-use app."
          />
          <ChooceComponent
            number="2"
            title="Certified & Skilled Technicians"
            description="Our team consists of experienced professionals to guarantee quality workmanship."
          />
          <ChooceComponent
            number="3"
            title="Fast & On-Time Service"
            description="We respect your time: our technicians arrive as scheduled and complete jobs efficiently."
          />
          <ChooceComponent
            number="4"
            title="Transparent & Competitive Pricing"
            description="No hidden fees — know exactly what you’re paying for before you confirm your booking."
          />
          <ChooceComponent
            number="5"
            title="Flexible Payment Options"
            description="Pay easily with cash, e-wallet, or bank transfer — whatever works best for you."
          />
          <ChooceComponent
            number="6"
            title="Service Guarantee"
            description="Enjoy peace of mind: if something goes wrong, we’ll fix it for free under our service warranty."
          />
        </div>
      </div>
    </div>
  );
}
