

import Slider from "./Slider";

function Hero() {
  return (
    <>
      <section className="lg:pt-40 pt-24 transition-all mb-10">
        <Slider/>

      <div className="font-grotesk border grid md:grid-cols-6 grid-cols-2 justify-start items-center  sm:gap-0 gap-5  border-[#E4E7E9] dark:bg-gray-200 transition-colors  rounded-[10px] py-5 mt-10">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/icons/fast.gif"
            className="2xl:w-[83px] w-[40px] "
            alt="gif"
          />
          <p className="text-base dark:!text-[#222222] font-semibold">
            Super fast
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/icons/support.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="text-base dark:!text-[#222222] font-semibold text-nowrap">
            Customer support
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <img
            src="/icons/coverage.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="text-base dark:!text-[#222222] font-semibold">
            Wide coverage
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <img
            src="/icons/reliable.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="text-base dark:!text-[#222222] font-semibold">
            Reliable
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <img
            src="/icons/selfcare.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="text-base dark:!text-[#222222] font-semibold">
            Selfcare
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <img
            src="/icons/secure.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="text-base dark:!text-[#222222] font-semibold">
            Secure
          </p>
        </div>
      </div>
      </section>

   
    </>
  );
}

export default Hero;
