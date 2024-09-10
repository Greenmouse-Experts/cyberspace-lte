import { useQuery } from "@tanstack/react-query";
import Banner from "../components/Banner";
import { getAbout } from "../services/apis/generalApi";
import Loader from "../components/Loader";

function About() {
  const { data: about, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });


  return (
    <>
      <Banner title="About Us" text="About us" image="/img/about-banner.png" />
      {isLoading ? (
        <Loader />
      ) : (
        <section className="mt-10">
          <div className=" ">
            {about.content.map((item, index: number) => (
              <div
                className={`flex items-center ${
                  index % 2 === 0
                    ? "xl:flex-row  gap-20"
                    : "xl:flex-row-reverse  gap-20"
                }`}
              >
                <div
                  className={`xl:w-[40%] w-full flex ${
                    index % 2 === 0
                      ? "xl:justify-start justify-center"
                      : "xl:justify-end justify-center"
                  }`}
                >
                  <img src={item.image} className="scale-90 h-64" alt="" />
                </div>

                <div
                  className={`xl:w-[60%] w-full ${
                    index % 2 === 0 ? "" : " text-start"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex md:flex-row flex-col gap-12 justify-between mt-10">
            <div className=" border border-bluePrimary md:w-[50%] ww-full rounded-xl px-5 py-8 relative">
              <div className="bg-white rounded-full p-2 w-fit mb-2 absolute -top-3 -left-5 border border-bluePrimary">
                <img src="/icons/mission.png" alt="" className="h-12 w-12 " />
              </div>
              <div className="ml-10">
                <div className=" flex justify-between items-center">
                  <h4 className="!text-bluePrimary">Mission</h4>
                </div>
                <p className="">{about.mission}</p>
              </div>
            </div>

            <div className="border border-bluePrimary md:w-[50%] w-full rounded-xl px-5 py-8 relative">
              <div className="bg-white rounded-full p-2 w-fit mb-2 absolute -top-3 -left-5 border border-bluePrimary">
                <img src="/icons/vision.png" alt="" className="h-12 w-12" />
              </div>
              <div className="ml-10">
                <div className=" flex justify-between items-center">
                  <h4 className="!text-bluePrimary">Vision</h4>
                </div>

                <p className="">{about.vision}</p>
              </div>
            </div>
          </div>
          {/* <div className=" mt-10">
          <p className="font-normal">
            At Cyberspace Superfast, we aim to consistently provide fast,
            reliable, and affordable Internet solutions that enrich the lives of
            our customers. We strive to exceed expectations by delivering
            superior service, innovative technology, and personalized support,
            thereby becoming the ISP of choice for individuals and businesses
            seeking unparalleled connectivity.
          </p>
        </div> */}
        </section>
      )}
    </>
  );
}

export default About;
