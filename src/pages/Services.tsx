import Banner from "../components/Banner"


function Services() {
  return (
    <>
    <Banner title="services" text="services"
    />
    <section className="pt-20">
    <div className=" pt-10">
      <h4 className="">Residential Internet</h4>
      <p className="font-normal">We offer high-speed broadband internet packages tailored to meet the needs of modern households. Whether streaming, gaming, or browsing, our residential plans deliver consistent speeds and reliable connectivity for seamless online experiences.</p>
    </div>
    <div className="pt-10 ">
      <h4 className="">Small Medium Enterprises (SMEs).</h4>
      <p className="font-normal">Our business internet solutions are designed to fuel productivity and growth for small businesses. With dedicated support and customizable packages, we empower entrepreneurs to stay connected, collaborate efficiently, and achieve their business objectives.</p>
    </div>
    <div className="pt-10 ">
      <h4 className="">IP Voice</h4>
      <p className="font-normal">Our managed services ensure hassle-free internet experiences for our clients. From installation and maintenance to troubleshooting and upgrades, we handle all aspects of your internet connection, allowing you to focus on what matters most.</p>
    </div>
    {/* <div className=" pt-10">
      <h4 className="">Commitment to Quality</h4>
      <p className="font-normal">
      At Cyberspace Superfast, we are committed to delivering the highest quality of service to our customers. Our state-of-the-art infrastructure, expert technicians, and proactive monitoring systems ensure optimal performance and uptime, guaranteeing a seamless internet experience for all our users.</p>
    </div> */}
    </section>
    </>
  )
}

export default Services