import { IoMdCart } from "react-icons/io";

function Hero() {
  return (
    <>
      <section className="mt-3">
        <div className="bg-[url('/img/hero-bg-1.png')] bg-cover bg-center sm:px-24 px-5 py-7 rounded-[21px] flex md:flex-row flex-col md:items-start md:gap-0 gap-10 items-center justify-between">
          <div className="  gap-10 text-white">
            <p className="font-medium 2xl:text-[35px] md:text-[25px] text-lg">
              Double Your Online Presence
            </p>
            <h3 className="2xl:text-[70px] md:text-[60px] text-3xl font-semibold md:my-10">New LTE Modem</h3>
            <div className="flex items-center gap-5">
              <p className="font-medium 2xl:text-[35px] md:text-[25px] text-lg">Enjoy Smart Deals</p>
              <img src="/icons/arrowright.svg" alt="" className="mt-2 2xl:h-4 h-2" />
            </div>
          </div>
          <img
            src="/img/hero-img.png"
            alt=""
            className="2xl:w-[350px] 2xl:h-[300px] w-[250px] h-[200px] mt-[-30px]"
          />
        </div>
      </section>

      <section className="font-grotesk border flex sm:flex-row flex-col sm:gap-0 gap-5 sm:justify-between border-[#E4E7E9] rounded-[10px] px-10 py-5 mt-10">
        <div className="flex flex-col items-center">
          <img src="/icons/fast.gif" className='2xl:w-[83px] w-[40px] ' alt="gif" />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">Super fast</p>
        </div>
        <div className="sm:w-[1.3px] w-full bg-[#E4E7E9]" />
        <div className="flex flex-col items-center">
          <img src="/icons/support.gif" className='2xl:w-[83px] w-[40px] ' alt="" />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">
            Customer support
          </p>
        </div>
        <div className="sm:w-[1.3px] w-full bg-[#E4E7E9]" />
        <div className="flex flex-col items-center">
          <img src="/icons/coverage.gif" className='2xl:w-[83px] w-[40px] ' alt="" />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">
            Wide coverage
          </p>
        </div>
        <div className="sm:w-[1.3px] w-full bg-[#E4E7E9]" />
        <div className="flex flex-col items-center">
          <img src="/icons/reliable.gif" className='2xl:w-[83px] w-[40px] ' alt="" />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">Reliable</p>
        </div>
        <div className="sm:w-[1.3px] w-full bg-[#E4E7E9]" />
        <div className="flex flex-col items-center">
          <img src="/icons/selfcare.gif" className='2xl:w-[83px] w-[40px] ' alt="" />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">Selfcare</p>
        </div>
        <div className="sm:w-[1.3px] w-full bg-[#E4E7E9]" />
        <div className="flex flex-col items-center">
          <img src="/icons/secure.gif" className='2xl:w-[83px] w-[40px] ' alt="" />
          <p className="2xl:text-[16px] text-[12px] text-[#222222] font-semibold">Secure</p>
        </div>
      </section>
      <div className="bg-[#DE0F04] w-12 h-12 flex justify-center items-center fixed right-0 top-[50%] cursor-pointer">
        <IoMdCart color="white" size={30} />
      </div>
    </>
  );
}

export default Hero;
