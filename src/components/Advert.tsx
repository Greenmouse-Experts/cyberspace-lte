import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import { settings } from "../utils/settings";
import { NavLink } from "react-router-dom";

function Advert() {
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <h4 className="text-grayPrimary font-semibold">
          Explore Great Deals And
          <span className="text-bluePrimary"> Devices</span>
        </h4>
        <NavLink to="/plans" className="flex items-end  ">
          <p className="text-[#222222] sm:text-base text-[12px] text-nowrap font-medium capitalize">
            see more{" "}
          </p>
          <MdOutlineKeyboardArrowRight color="#0080CF" size={25} />
        </NavLink>
      </div>
      <div className="flex w-full items-center 2xl:mt-8 mt-5">
        <div className="bg-bluePrimary h-[5px] w-[28%]" />
        <div className="bg-lightGray h-[0.5px] w-[72%] opacity-50" />
      </div>

      <div className="mt-16">
        <Slider {...settings}>
          <div>
            <img
              src="/img/deal-4.png"
              alt=""
              className="xl:w-[400px] md:w-[340px] 2xl:h-[250px] h:[200px] ml-5"
            />
          </div>
          <div>
            <img
              src="/img/deal-5.png"
              alt=""
              className="xl:w-[400px] md:w-[340px] 2xl:h-[250px] h:[200px] ml-5"
            />
          </div>
          <div>
            <img
              src="/img/deal-6.png"
              alt=""
              className="xl:w-[400px] md:w-[340px] 2xl:h-[250px] h:[200px] ml-5"
            />
          </div>
          <div>
            <img
              src="/img/deal-4.png"
              alt=""
              className="xl:w-[400px] md:w-[340px] 2xl:h-[250px] h:[200px] ml-5"
            />
          </div>
          <div>
            <img
              src="/img/deal-5.png"
              alt=""
              className="xl:w-[400px] md:w-[340px] 2xl:h-[250px] h:[200px] ml-5"
            />
          </div>
          <div>
            <img
              src="/img/deal-6.png"
              alt=""
              className="xl:w-[400px] md:w-[340px] 2xl:h-[250px] h:[200px] ml-5"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Advert;
