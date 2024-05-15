import { useState } from "react";
import {  BsSearch } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import DarkmodeToggle from "../features/darkmode/DarkmodeToggle";
import { useAppSelector } from "../state/hooks";
import { isLoggedIn, removeToken } from "../state/user/userSlice";
import { useDispatch } from "react-redux";

function Header() {
  const [menu, setmMenu] = useState(false);
  const verifyUser = useAppSelector(isLoggedIn)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logout = () => {
    navigate("/signin")
  dispatch(removeToken())
  }


  return (
    <header className="fixed top-0 bg-white dark:bg-darkMood transition-colors z-[999999] right-0 w-full left-0">
      <div className=" justify-between items-center 2xl:py-2 py-2 2xl:px-28 md:px-24 xl:flex hidden  bg-bluePrimary text-white 2xl:text-[19px] text-[10px]  font-grotesk">
        <p className=""> Welcome to Cyberspace Superfast LTE!</p>

        <div className="flex gap-6 items-center font-sora 2xl:text-[18px] sm:text-[12px] text-[5px] text-white">
         <NavLink to="/dealers" className="border-r pr-6">
Our Dealers
         </NavLink>
          <div className="flex gap-1 items-center pr-4">
            <CiLocationOn color="white" size={22} />
            <p className="font-[300]">
              12 Ologun Agbaje Street, Victoria Island, Lagos, Nigeria
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between lg:gap-5 md:gap-5 font-grotesk 2xl:text-[20px] text-[10px] py-5 2xl:px-[140px] xl:px-24 lg:px-10 px-5 border-b-[0.6px] border-[#EDEDED] relative">
        <NavLink onClick={() => setmMenu(false)} to="/">
          <div className="2xl:w-[165px] w-[100px]">
            <img src="/logo.svg" alt="" className="2xl:w-[165px] w-[100px]" />
          </div>
        </NavLink>

        <div className="flex items-center gap-10 2xl:text-[17px] xl:text-[14px] text-[12px] text-nowrap">
          <nav
            className={` absolute bg-white dark:bg-darkMood transition-colors  ${
              menu ? "left-0 w-[80%] z-50 h-screen pl-10" : "left-[-1000px]"
            } top-5   flex justify-start md:h-auto h-screen transition-all unset`}
          >
            <ul className="flex gap-4 md:flex-row flex-col md:items-center   text-[#666666] dark:text-white font-bold">
            <li className="">
                <NavLink onClick={() => setmMenu(false)} to="/about" >
                  About Us
                </NavLink>{" "}
              </li>
              <li className="">
                <NavLink onClick={() => setmMenu(false)} to="/services">
                  Services
                </NavLink>{" "}
              </li>
            
              <li className="">
                <NavLink to="/products" onClick={() => {
                  // e.preventDefault(); 
                  // pushPageDown(); 
                  setmMenu(false);}} >
                  Shop Products
                </NavLink>{" "}
              </li>
              <li className="md:hidden block">
                <NavLink onClick={() => setmMenu(false)} to="/dealers">
                  Our dealers
                </NavLink>{" "}
              </li>
              
              
            </ul>
          </nav>
          <div className="2xl:w-[400px] w-[300px] 2xl:h-[60px] h-[40px] relative lg:block hidden">
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
          <div className="flex items-center  md:gap-6 gap-2">
            <div className="flex items-center gap-1 cursor-pointer" onClick={logout}>
              <FiUser color="#0094EF" size={25} />
              <p className="font-bold text-bluePrimary text-nowrap sm:block hidden">
               {verifyUser ? "Logout": "Selfcare Portal"}
              </p>
            </div>
            <div className="bg-[#D9D9D9] w-[2px]" />
            <li className=" text-grayPrimary font-bold dark:text-white ">
                <NavLink onClick={() => setmMenu(false)} to="/coverage">
                  Coverage
                </NavLink>{" "}
              </li>
          </div>
        </div>
        <DarkmodeToggle />
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
