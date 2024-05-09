import { BsSearch } from "react-icons/bs";
import DealerItem from "./DealerItem";
import { NavLink } from "react-router-dom";
import { useDealers } from "./useDealers";
import { DealerItemTypes } from "./dealers.types";
import Loader from "../../components/Loader";

function DealersOverview() {

  const {dealers, isLoading}  = useDealers()

  if (isLoading) return <Loader/>
  return (
    <>
      <section className="flex lg:flex-row flex-col items-center justify-between pt-20 font-inter bg-[#FCFCFC] dark:bg-darkMood">
        <div className="lg:w-[40%] w-full">
          <h3>Cyberspace Dealers</h3>
          <p className="font-normal mt-5">
            Cyberspace dealers are authorized individuals entrusted with the
            license to procure and trade Cyberspace products and modems on
            behalf of the company. They receive a range of benefits and bonuses
            from Cyberspace as part of their role.
          </p>
        </div>

        <div className="lg:w-[48%] lg:mt-0 mb-5 w-full ">
          <p className="font-normal mb-8">
            Click the buttons below to view the requirements of being a
            cyberspace dealer.
          </p>
          <NavLink
            to="/products"
            className="border border-bluePrimary px-10 py-5 text-bluePrimary rounded-[50px] text-base"
          >
            View Requirements {">"}
          </NavLink>
        </div>
      </section>
      <section className="pt-20 bg-[#FCFCFC] dark:bg-darkMood">
        <div className="flex justify-between">
          <h4 className="text-black font-semibold">Our List of Dealers</h4>
          <div className="flex items-end rounded-xl w-[400px] h-[50px] overflow-hidden relative">
            <BsSearch
              color="#0080CF"
              size={20}
              className="absolute left-4 2xl:top-4 top-3"
            />
            <input
              type="text"
              placeholder="Search dealers"
              className="w-full h-[50px] outline-none bg-white pl-16"
            />
          </div>
        </div>
        <div className="flex w-full items-center 2xl:mt-8 mt-5">
          <div className="bg-bluePrimary h-[5px] w-[28%]" />
          <div className="bg-lightGray h-[0.5px] w-[72%] opacity-50" />
        </div>

        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-col-1 gap-8 ">
          {dealers?.data?.map((dealer:DealerItemTypes) => <DealerItem dealer={dealer}  key={dealer.id}/>)}
      
        </div>
      </section>
    </>
  );
}

export default DealersOverview;
