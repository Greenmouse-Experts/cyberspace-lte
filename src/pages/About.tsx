import Banner from "../components/Banner";

function About() {
  return (
    <>
      <Banner title="About" text="About us" />
      <section className="mt-10">
        <div className=" ">
          <p className="font-normal">
            Cyberspace Superfast is a leading Internet Service Provider (ISP)
            dedicated to delivering cutting-edge broadband solutions for homes
            and small businesses. With a commitment to reliability, speed, and
            customer satisfaction, we empower individuals and organizations to
            thrive in the digital age. Our comprehensive range of services
            ensures seamless connectivity, enabling our clients to maximize
            productivity and enjoyment in their online experiences
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-5 justify-between mt-10">
          <div className=" bg-grey-300 md:w-[50%] ww-full rounded-xl px-5 py-8">
            <h4 className="dark:!text-black">Mission</h4>
            <p className="dark:!text-black">
              Investing in people and technology to deliver exceptional customer
              service.
            </p>
          </div>

          <div className="bg-grey-300 md:w-[50%] w-full rounded-xl px-5 py-8">
            <h4 className="dark:!text-black">Vision</h4>
            <p className="dark:!text-black">
              To be the network and software solutions provider of choice in
              Nigeria.
            </p>
          </div>
        </div>
        <div className=" mt-10">
          <p className="font-normal">
            At Cyberspace Superfast, we aim to consistently provide fast,
            reliable, and affordable Internet solutions that enrich the lives of
            our customers. We strive to exceed expectations by delivering
            superior service, innovative technology, and personalized support,
            thereby becoming the ISP of choice for individuals and businesses
            seeking unparalleled connectivity.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
