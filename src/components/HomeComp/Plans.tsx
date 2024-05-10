import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function Plans() {

  const navigate = useNavigate();
function handleViewPlans(){
  return navigate("/personalplan");
}
  return (
    <section className="md:mt-40 mt-20">
     

      <div className="flex md:flex-row flex-col items-center justify-center gap-8 mt-10">
      <div className="flex justify-between flex-col md:w-[33%] w-full">
        <h4 className="text-grayPrimary font-semibold">
          {" "}
          Our Starter Plans and
          <span className="text-bluePrimary"> Data Pricing</span>
        </h4>
        <p>Embark on your digital journey with confidence through our Starter Plans, meticulously crafted to meet your evolving needs.</p>
        <NavLink to="/personalplan" className="flex items-center ">
          <p className="text-[#222222] sm:text-base text-[12px] font-medium text-nowrap capitalize">
            see more{" "}
          </p>
          <MdOutlineKeyboardArrowRight color="#0080CF" size={25} />
        </NavLink>
      </div>
        <div className="border border-bluePrimary p-6 rounded-2xl flex flex-col 2xl:gap-6 gap-3 md:w-[33%] w-full font-grotesk shadow-lg">
          <p className="text-bluePrimary font-bold 2xl:text-[18px] text-base font-grotesk">
            Modem + 70GB Data bundle + Voice
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="font-pSans uppercase text-lightGray 2xl:text-base text-sm ">
            CYBER STARTER
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="text-bluePrimary font-bold 2xl:text-lg text-sm">
            30 Days
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="text-lightGray font-bold 2xl:text-2xl text-lg ">
            N28,500
          </p>
          <button onClick={handleViewPlans} className="text-white bg-bluePrimary w-full 2xl:py-5 py-3 2xl:text-lg text-sm text-center rounded-md font-grotesk font-semibold">
            VIEW
          </button>
        </div>
        <div className="border border-bluePrimary p-6 rounded-2xl flex flex-col 2xl:gap-6 gap-3 md:w-[33%] w-full font-grotesk shadow-lg ">
          <p className="text-bluePrimary font-bold 2xl:text-[18px] text-base font-grotesk">
            Modem + 100GB Data bundle + Voice
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="font-pSans uppercase text-lightGray 2xl:text-base text-sm ">
            CYBER STARTER
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="text-bluePrimary font-bold 2xl:text-lg text-sm">
            30 Days
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="text-lightGray font-bold 2xl:text-2xl text-lg ">
            N35,000
          </p>
          <button onClick={handleViewPlans} className="text-white bg-bluePrimary w-full 2xl:py-5 py-3 2xl:text-lg text-sm text-center rounded-md font-grotesk font-semibold">
            VIEW
          </button>
        </div>
        {/* <div className="border border-bluePrimary p-6 rounded-2xl flex flex-col 2xl:gap-6 gap-3 md:w-[33%] w-full font-grotesk  shadow-lg">
          <p className="text-bluePrimary font-bold 2xl:text-[18px] text-base font-grotesk">
            Unlimited volume (1 Mbps/1Mbps)
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="font-pSans uppercase text-lightGray 2xl:text-base text-sm ">
          STARTER UNLIMITED
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="text-bluePrimary font-bold 2xl:text-lg text-sm">
            1 Year
          </p>
          <div className="bg-[#E4E7E9] h-[1px]" />
          <p className="text-lightGray font-bold 2xl:text-2xl text-lg ">
          N97,200
          </p>
          <button onClick={handleViewPlans} className="text-white bg-bluePrimary w-full 2xl:py-5 py-3 2xl:text-lg text-sm text-center rounded-md font-grotesk font-semibold">
            VIEW
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default Plans;
