
import { BsCart2, BsPatchCheck, BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="">
      <div className="flex justify-between items-center 2xl:py-4 py-2 2xl:px-32 md:px-24 bg-bluePrimary text-white 2xl:text-[19px] text-[12px]  font-grotesk">
        <p className=""> Welcome to Cyberspace LTE!</p>

        <div className="flex gap-6 items-center font-sora 2xl:text-[18px] text-[12px] text-white">
          <div className="flex gap-1 items-center">
            <BsPatchCheck color="white" size={20} />
            <p>All Offers</p>
          </div>
          <div className="flex gap-1 items-center border-r border-white pr-4">
            <CiLocationOn color="white" size={22} />
            <p className="font-[300]">
              12 Ologun Agbaje Street, Victoria Island, Lagos, Nigeria
            </p>
          </div>
          <div className="flex gap-1 items-center border-r border-white pr-4">
            <TbTruckDelivery color="white" size={22} />
            <p className="font-[300]">Location Delivery</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-20 font-grotesk 2xl:text-[21.7px] text-[14px] py-5 2xl:px-[140px] md:px-24 border-b-[0.6px] border-[#EDEDED]">
        <div className="">
          <img src="/logo.svg" alt="" className="2xl:w-[165px] w-[100px]" />
        </div>

        <div className="flex items-center gap-10">
          <nav className="">
            <ul className="flex 2xl:gap-10 gap-4 items-center text-[#666666] font-bold">
              <li className="">
                <NavLink to="">Shop Products</NavLink>{" "}
              </li>
              <li className="">
                <NavLink to="">Coverage</NavLink>{" "}
              </li>
              <li className="">
                <NavLink to="">Our dealers</NavLink>{" "}
              </li>
            </ul>
          </nav>
          <div className="2xl:w-[400px] w-[300px] 2xl:h-[60px] h-[40px] relative">
            <BsSearch
              color="#0080CF"
              size={20}
              className="absolute left-4 2xl:top-4 top-3"
            />
            <input
              type="text"
              className=" w-full h-full bg-[#F3F9FB] px-14 text-bluePrimary rounded-xl 2xl:placeholder:text-[19px] placeholder:text-grayPrimary placeholder:text-[12px]"
              placeholder="Search devices, plans and more..."
            />
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              <FiUser color="#0094EF" size={25} />
              <p className="font-bold text-bluePrimary">Client Login</p>
            </div>
            <div className="bg-[#D9D9D9] w-[2px]" />
            <div className="flex items-center gap-1">
              <BsCart2 color="#0094EF" size={25} />
              <p className="font-bold text-grayPrimary">Cart</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
