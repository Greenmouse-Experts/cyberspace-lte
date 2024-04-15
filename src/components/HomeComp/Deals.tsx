
import {
  PiCreditCardThin,
  PiHeadphonesThin,
  PiPackageLight,
  PiTrophyThin,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";
import Advert from "../Advert";

function Deals() {
  return (
    <>
      <section className="mt-20">
        <h4 className="text-grayPrimary text-center font-semibold">
          Grab the best deal on{" "}
          <span className="text-bluePrimary">Internet Routers</span>
        </h4>

        <div className="flex lg:flex-row flex-col items-center justify-center 2xl:gap-20 gap-10 mt-16">
          <div className="flex flex-col items-center rounded-[20px] border-[1.6px] border-[#008ECC]  2xl:w-[23%] lg:w-[25%] md:w-[50%] w-[80%]  pb-3 overflow-hidden relative">
            <div className="bg-[#E4E7E9] w-full flex justify-center">
              <img
                src="/img/deal-1.png"
                alt=""
                className="2lg:w-[90%] md:w-[50%] w-[80%] 2xl:h-[300px] h-[250px]"
              />
            </div>
            <p className="2xl:text-lg text-sm font-semibold text-[#222222] mt-3">
              Superfast Outdoor ODU Device
            </p>
            <p className="2xl:text-[22px] text-base font-semibold text-[#222222] mt-3">
              ₦122,000
            </p>
            <NavLink to="/product/123" className="2xl:text-lg text-sm bg-[#008ECC] py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center">
              Buy Now
            </NavLink>
            <div className="absolute top-0 right-0 bg-redPrimary rounded-es-[26px]">
              <p className="uppercase text-white text-xl py-5 px-3 font-grotesk 2xl:font-semibold font-medium">
                hot
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-[20px] border-[1.6px] border-[#008ECC]  2xl:w-[23%] lg:w-[25%] md:w-[50%] w-[80%]  pb-3 overflow-hidden relative">
            <div className="bg-[#E4E7E9] w-full flex justify-center">
              <img
                src="/img/deal-2.png"
                alt=""
                className="2lg:w-[90%] md:w-[50%] w-[80%] 2xl:h-[300px] h-[250px]"
              />
            </div>
            <p className="2xl:text-lg text-sm font-semibold text-[#222222] mt-3">
              Superfast Broadband Device
            </p>
            <p className="2xl:text-[22px] text-base font-semibold text-[#222222] mt-3">
              ₦28,500
            </p>
            <NavLink to="/product/123" className="2xl:text-lg text-sm bg-[#008ECC] py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center">
              Buy Now
            </NavLink>
            <div className="absolute top-0 right-0 bg-redPrimary rounded-es-[26px]">
              <p className="uppercase text-white text-xl py-5 px-3 font-grotesk 2xl:font-semibold font-medium">
                hot
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-[20px] border-[1.6px] border-[#008ECC]  2xl:w-[23%] lg:w-[25%] md:w-[50%] w-[80%]  pb-3 overflow-hidden relative">
            <div className="bg-[#E4E7E9] w-full flex justify-center">
              <img
                src="/img/deal-3.png"
                alt=""
                className="2lg:w-[90%] md:w-[50%] w-[80%] 2xl:h-[300px] h-[250px]"
              />
            </div>
            <p className="2xl:text-lg text-sm font-semibold text-[#222222] mt-3">
              Superfast Outdoor IDU Device
            </p>
            <p className="2xl:text-[22px] text-base font-semibold text-[#222222] mt-3">
              ₦28,500
            </p>
            <NavLink to="/product/123" className="2xl:text-lg text-sm bg-[#008ECC] py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center">
              Buy Now
            </NavLink>
            <div className="absolute top-0 right-0 bg-redPrimary rounded-es-[26px]">
              <p className="uppercase text-white text-xl py-5 px-3 font-grotesk 2xl:font-semibold font-medium">
                hot
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="border border-bluePrimary px-12 py-5 text-bluePrimary rounded-[50px]">
            View All {">"}
          </button>
        </div>
      </section>
      <section className="border grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-3 gap-5 justify-center items-center lg:divide-x divide-grey-400 border-[#E4E7E9] rounded-[10px] px-10 py-10 jus mt-16 font-pSans mb-20">
        <div className="flex items-center gap-3">
          <PiPackageLight size={40} />
          <div>
            <p className="2xl:text-lg text-sm text-[#222222] uppercase font-normal">
              Fasted Delivery
            </p>
            <p className="2xl:text-sm text-[12px] text-lightGray font-normal">
              Delivery in 24/H
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <PiTrophyThin size={40} />
          <div>
            <p className="2xl:text-lg text-sm text-[#222222] uppercase font-normal">
              QUALITY DEVICES
            </p>
            <p className="2xl:text-sm text-[12px] text-lightGray font-normal">
              100% Quality products
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <PiCreditCardThin size={40} />
          <div>
            <p className="2xl:text-lg text-sm text-[#222222] uppercase font-normal">
              Secure Payment
            </p>
            <p className="2xl:text-sm text-[12px] text-lightGray font-normal">
              Your money is safe
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <PiHeadphonesThin size={40} />
          <div>
            <p className="2xl:text-lg text-sm text-[#222222] uppercase font-normal">
              Support 24/7
            </p>
            <p className="2xl:text-sm text-[12px] text-lightGray font-normal">
              Live contact/message
            </p>
          </div>
        </div>
      </section>
<Advert/>
    </>
  );
}

export default Deals;
