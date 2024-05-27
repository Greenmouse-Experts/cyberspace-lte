
import Banner from "../components/Banner";

function About() {
  return (
    <>
      <Banner title="About" text="About us" />
      <section className="mt-10">
        <div className=" ">
          <p className="font-normal">
            Superfast is a leading Internet Service delivering cutting-edge
            broadband solutions for homes and small businesses. Our services
            offer a pinnacle of Internet hyper-speed. Superfast by Cyberspace
            Limited, is your gateway to an immersive online experience. And,
            we’re not just a service; we’re your most reliable teammate, the MVP
            of ISPs. Our network is designed for the ultimate performance,
            delivering the speed you need to stay ahead of the curve.
          </p>
          <p className="mt-5">
            For the Nigerian youth carving their path, for the professionals
            shaping the future, and for the businesses setting the trends,
            Superfast is the name you can trust. With us, you’re not just
            online; you’re on a winning streak. And when it comes to voice, our
            premium VOIP service is the roar in the silence, connecting
            conversations with the precision of a craftsman. Our VOIP service is
            the soundtrack to your success, syncing with the heartbeat of
            nations around the world.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-5 justify-between mt-10">
          <div className=" bg-bluePrimary md:w-[50%] ww-full rounded-xl px-5 py-8">
          <div className="bg-white rounded-full p-2 w-fit mb-2">
                <img src="/icons/mission.png" alt="" className="h-8 w-8" />
              </div>
            <div className=" flex justify-between items-center">
              <h4 className="text-white">Mission</h4>
            
            </div>
            <p className="text-white">
              Investing in people and technology to deliver exceptional customer
              service.
            </p>
          </div>

          <div className="bg-bluePrimary md:w-[50%] w-full rounded-xl px-5 py-8">
          <div className="bg-white rounded-full p-2 w-fit mb-2">
                <img src="/icons/vision.png" alt="" className="h-8 w-8" />
              </div>
            <div className=" flex justify-between items-center">
              <h4 className="text-white">Vision</h4>
            
            </div>

            <p className="text-white">
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
