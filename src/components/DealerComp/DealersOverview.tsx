
import { BsSearch } from "react-icons/bs";

function DealersOverview() {
  return (
    <>
      <section className="flex items-center justify-between pt-20 font-inter bg-[#FCFCFC]">
        <div className="w-[40%]">
          <h3>Cyberspace Dealers</h3>
          <p className="font-normal mt-5">
            Cyberspace dealers are individuals who have been granted the
            liscence to buy and trade cyberspace product and modems on behalf of
            cyberspace. They enjoy numerous benefits and bonuses from
            cyberspace.
          </p>

        </div>

        <div className="w-[48%]">
            <p className="font-normal">Click the buttons below to view the requirements of being a cyberspace dealer.</p>
            <button className="border border-bluePrimary px-10 py-5 text-bluePrimary rounded-[50px] text-base mt-4">
            View Requirements {">"}
          </button>
        </div>
      </section>
      <section className="pt-20 bg-[#FCFCFC]">
        <div className="flex justify-between">
          <h4 className="text-black font-semibold">
            Our List of Dealers
          </h4>
          <div className="flex items-end rounded-xl w-[400px] overflow-hidden relative">
            <BsSearch
              color="#0080CF"
              size={20}
              className="absolute left-4 2xl:top-4 top-3"
            />
            <input type="text" placeholder="Search dealers" className="w-full h-[50px] outline-none bg-white pl-16" />
          </div>
        </div>
        <div className="flex w-full items-center 2xl:mt-8 mt-5">
          <div className="bg-bluePrimary h-[5px] w-[28%]" />
          <div className="bg-lightGray h-[0.5px] w-[72%] opacity-50" />
        </div>
      </section>
    </>
  );
}

export default DealersOverview;
