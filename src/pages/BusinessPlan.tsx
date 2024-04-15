import { NavLink } from "react-router-dom";
import Banner from "../components/Banner";

interface Iplan {
  img: string;
  title: string;
  text: string;
}

function BusinessPlanItem({ img, title, text }: Iplan) {
  return (
    <div className=" rounded-2xl  flex flex-col items-center justify-center font-inter bg-white">
      <img src={img} alt="plan" className="h-[160px] w-full" />
      <div className="pl-3">
        <p className="text-xl font-normal py-3">{title}</p>
        <p className="leading-7 text-base">{text}</p>
      </div>
    </div>
  );
}

function BusinessPlan() {
  return (
    <>
      <Banner title="Business Plan" text="Business Plan" />
      <section className="flex lg:flex-row flex-col items-center justify-between pt-20 font-inter bg-[#FCFCFC]">
        <div className="lg:w-[40%] w-full">
          <h3>Enterprise connectivity</h3>
          <p className="font-normal mt-5">
            We offer State-of-the-art dedicated link broadband services to
            corporates entities. Click the buttons below to register for
            enterprise connectivity.
          </p>
        </div>
      </section>
      <section className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 grid-col-1 items-start gap-5 bg-[#FCFCFC]">
        <BusinessPlanItem
          img="/img/plan-1.png"
          title="Cybersat- VSAT Solutions"
          text="Our CyberSAT solution addresses very effectively most of the connectivity needs of ICT users, from residential to the corporate market."
        />
        <BusinessPlanItem
          img="/img/plan-2.png"
          title="Cybervoice"
          text="CyberVoice gives our business customers the ability to use data to make crystal clear voice and video calls using VoIP capable handsets."
        />
        <BusinessPlanItem
          img="/img/plan-3.png"
          title="Metro & Metro-Haul Fibre-Optic Cable Solution"
          text="With the proliferation of services with large data demands and the need for the synchronization between HQ and DR data centres of major players in different..."
        />
        <BusinessPlanItem
          img="/img/plan-4.png"
          title="Itrernet High Availability (IHA)"
          text="Are you are relying on the Internet for mission-critical business applications where downtime is not a cost-effective option for your business operations?"
        />
      </section>

      <section className="flex justify-center pt-20 bg-[#FCFCFC]">
        <p>
        Visit <span className="text-bluePrimary underline"><NavLink to="">Cyberspace.net.ng</NavLink></span> to know more about our products and services that cater to Business
        </p>
      </section>
    </>
  );
}

export default BusinessPlan;
