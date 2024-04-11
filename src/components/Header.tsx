import { useState } from "react";
import { BsCart2, BsPatchCheck, BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { TbTruckDelivery } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function Header() {
  const [menu, setmMenu] = useState(false);

  return (
    <header className="">
      <div className=" justify-between items-center 2xl:py-2 py-2 2xl:px-28 md:px-24 md:flex hidden  bg-bluePrimary text-white 2xl:text-[19px] text-[10px]  font-grotesk">
        <p className=""> Welcome to Cyberspace LTE!</p>

        <div className="flex gap-6 items-center font-sora 2xl:text-[18px] sm:text-[12px] text-[5px] text-white">
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

      <div className="flex items-center justify-between md:gap-20 gap-5 font-grotesk 2xl:text-[20px] text-[10px] py-5 2xl:px-[140px] md:px-24 border-b-[0.6px] border-[#EDEDED] relative md:mx-0 mx-5">
       <NavLink to="/">
       <div className="2xl:w-[165px] w-[100px]">
          <img src="/logo.svg" alt="" className="2xl:w-[165px] w-[100px]" />
        </div>
       </NavLink>

        <div className="flex items-center gap-10 2xl:text-[17px] text-[14px]">
          <nav
            className={` absolute bg-white ${
              menu ? "left-0 w-[80%] " : "left-[-1000px] "
            } top-5   flex justify-start md:h-auto h-screen transition-all unset`}
          >
            <ul className="flex gap-4 md:flex-row flex-col md:items-center   text-[#666666] font-bold">
              <li className="">
                <NavLink to="">Shop Products</NavLink>{" "}
              </li>
              <li className="">
                <NavLink to="/coverage">Coverage</NavLink>{" "}
              </li>
              <li className="">
                <NavLink to="/dealers">Our dealers</NavLink>{" "}
              </li>
            </ul>
          </nav>
          <div className="2xl:w-[400px] w-[300px] 2xl:h-[60px] h-[40px] relative md:block hidden">
            <BsSearch
              color="#0080CF"
              size={20}
              className="absolute left-4 2xl:top-4 top-3"
            />
            <input
              type="text"
              className=" w-full h-full bg-[#F3F9FB] px-14 text-bluePrimary rounded-xl 2xl:placeholder:text-[16px] placeholder:text-grayPrimary placeholder:text-[12px]"
              placeholder="Search devices, plans and more..."
            />
          </div>
          <div className="flex  md:gap-6 gap-2">
            <div className="flex items-center gap-1">
              <FiUser color="#0094EF" size={25} />
              <p className="font-bold text-bluePrimary text-nowrap">
                Client Login
              </p>
            </div>
            <div className="bg-[#D9D9D9] w-[2px]" />
            <NavLink to="cart" className="flex items-center gap-1">
              <BsCart2 color="#0094EF" size={25} />
              <p className="font-bold text-grayPrimary">Cart</p>
            </NavLink>
          </div>
        </div>
        <div
          className="md:hidden block cursor-pointer w-8 h-8"
          onClick={() => setmMenu((menu) => !menu)}
        >
          <img src="/icons/hamburger.svg" alt="menu" className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
}

export default Header;
