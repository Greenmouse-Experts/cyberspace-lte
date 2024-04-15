

function Hero() {
  return (
    <>
      <section className="lg:mt-40 mt-24">
        <div className="bg-[url('/img/hero-bg-1.png')] bg-cover bg-center sm:px-24 px-5 py-7 rounded-[21px] flex md:flex-row flex-col md:items-start md:gap-0 gap-10 items-center justify-between">
          <div className="  gap-10 text-white">
            <p className="font-medium 2xl:text-[35px] md:text-[25px] text-lg">
              Double Your Online Presence
            </p>
            <h3 className="2xl:text-[70px] lg:text-[60px] md:text-5xl text-3xl font-semibold md:my-10">
              New LTE Modem
            </h3>
            <div className="flex items-center gap-5">
              <p className="font-medium 2xl:text-[35px] md:text-[25px] text-lg">
                Enjoy Smart Deals
              </p>
              <img
                src="/icons/arrowright.svg"
                alt=""
                className="mt-2 2xl:h-4 h-2"
              />
            </div>
          </div>
          <img
            src="/img/hero-img.png"
            alt=""
            className="2xl:w-[350px] 2xl:h-[300px] w-[250px] h-[200px] mt-[-30px]"
          />
        </div>
      </section>

      <section className="font-grotesk border grid md:grid-cols-6 grid-cols-2 justify-start items-center  sm:gap-0 gap-5  border-[#E4E7E9] rounded-[10px] px-10 py-5 mt-10 md:divide-x divide-grey-400">
        <div className="flex flex-col items-center justify-center">
          <img
            src="/icons/fast.gif"
            className="2xl:w-[83px] w-[40px] "
            alt="gif"
          />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">
            Super fast
          </p>
        </div>
       
        <div className="flex flex-col items-center">
          <img
            src="/icons/support.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold text-nowrap">
            Customer support
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center ">
          <img
            src="/icons/coverage.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">
            Wide coverage
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center ">
          <img
            src="/icons/reliable.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">
            Reliable
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center ">
          <img
            src="/icons/selfcare.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">
            Selfcare
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center ">
          <img
            src="/icons/secure.gif"
            className="2xl:w-[83px] w-[40px] "
            alt=""
          />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">
            Secure
          </p>
        </div>
      </section>
     
    </>
  );
}

export default Hero;
