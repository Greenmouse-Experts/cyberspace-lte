import Banner from "../components/Banner";

function Services() {
  return (
    <>
      <Banner title="services" text="services" />
      <section className="pt-20 grid xl:grid-cols-3 gap-x-32">
       <div className="flex flex-col gap-10 col-span-2">
       <div className=" pt-10 bg-white dark:bg-black rounded-[10px] pb-8 px-8 cardShadow">
          <h4 className="text-start mb-3">Residential Internet</h4>
          <p className="font-normal">
            We offer high-speed broadband internet packages tailored to meet the
            needs of modern households. Whether streaming, gaming, or browsing,
            our residential plans deliver consistent speeds and reliable
            connectivity for seamless online experiences.
          </p>
        </div>
        <div className="pt-10 bg-white dark:bg-black rounded-[10px] pb-8 px-8 cardShadow ">
          <h4 className="text-start mb-3">Small Medium Enterprises (SMEs).</h4>
          <p className="font-normal">
            Our business internet solutions are designed to fuel productivity
            and growth for small businesses. With dedicated support and
            customizable packages, we empower entrepreneurs to stay connected,
            collaborate efficiently, and achieve their business objectives.
          </p>
        </div>
        <div className="pt-10 bg-white dark:bg-black rounded-[10px] pb-8 px-8 cardShadow ">
          <h4 className="text-start mb-3">IP Voice</h4>
          <p className="font-normal">
            Our managed services ensure hassle-free internet experiences for our
            clients. From installation and maintenance to troubleshooting and
            upgrades, we handle all aspects of your internet connection,
            allowing you to focus on what matters most.
          </p>
        </div>
       </div>
      <div className="xl:block hidden">
        <img src="/img/service-1.png" alt="" />
      </div>
      </section>
    </>
  );
}

export default Services;
