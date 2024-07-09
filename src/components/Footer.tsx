import { FaRegEnvelope } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { GrLocation } from "react-icons/gr";

import { NavLink } from "react-router-dom";
// import { useAppSelector } from "../state/hooks";
// import { isLoggedIn } from "../state/user/userSlice";
import { BsInstagram } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

function Footer() {

  return (
    <>
      <section className="bg-bluePrimary 2xl:py-20 md:py-14 py-6  mx-0 relative">
        <div className="text-white font-pSans text-center justify-center flex flex-col mx-auto lg:w-[35%] w-[80%]">
          <h3 className="2xl:text-[30px] text-2xl font-semibold">
            Subscribe to our  Newsletter
          </h3>
          <p className="2xl:text-lg font-[300] text-[#f4f4f4] mt-3 mx-auto">
            Be the first to know when we have
            new products to boost your internet experience.
          </p>
          <div className="mt-10 w-full relative">
            <input
              type="text"
              placeholder="Email address"
              className="w-full 2xl:h-[70px] h-[60px] rounded-[1rem] pl-6 2xl:placeholder:text-[1.03rem] placeholder:text-[11px] text-black"
            />
            <button className="flex items-center font-bold 2xl:text-[12px] text-[10px] h-[80%]  uppercase  absolute base-btn bg-redPrimary  right-2 2xl:top-2 md:top-[6px] sm:top-2 top-[6px] ">
              Subscribe &nbsp;
              <GoArrowRight color="white" size={22} />
            </button>
          </div>
        </div>
        <img
          src="/img/arrow-2.png"
          alt=""
          className="absolute left-[7%] top-5"
        />
      </section>
      <footer className="lg:bg-[url('/img/footer-bg-test.png')] bg-[url('/img/footer-small.png')] bg-contain pt-16 w-full">
        <div className="flex flex-wrap md:flex-row flex-col md:justify-between justify-start md:items-start items-start md:text-start text-start  md:gap-0 gap-10 2xl:px-[200px] md:px-[140px] px-10">
          <div className="flex flex-col items-start gap-6">
          <img
                src="/logo-dark.png"
                alt=""
                className="2xl:w-[8rem] w-[6.25rem]"
              />
              <NavLink to="https://www.instagram.com/cyberspacenaija">
                <BsInstagram color="#ADB7BC" size={23}/>
              </NavLink>
          </div>
        
          <div>
            <p className="font-normal text-[1.06rem] text-white uppercase">
              Quick links
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/products">Products</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/plans">Plans</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/products">Services</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/products">About us</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/dealers">our dealers</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/coverage">coverage</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-normal text-[1.06rem] text-white uppercase">
              support
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                <NavLink to="/terms-conditions">terms & conditions</NavLink>
              </li>
              {/* <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">help</NavLink>
              </li> */}
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/privacy-policy">privacy policy</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/faqs">FAQs</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/contact">contact us</NavLink>
              </li>
            </ul>
          </div>
          {/* <div>
            <p className="font-normal text-[1.06rem] text-start text-white uppercase">
              account
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              {verifyUser && (
                <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                  <NavLink to="/account">my account</NavLink>
                </li>
              )}
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/cart">My cart</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">wishlist</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">payment</NavLink>
              </li>
            </ul>
          </div> */}

          <div>
            <p className="font-normal text-[1.06rem] text-white uppercase">
              Contact Us
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1 ">
                <GrLocation size={20} />
                <NavLink to="/">
                  12 Ologun Agbaje Street, Victoria
                   Island, Lagos, Nigeria
                </NavLink>
              </li>
              <p className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1">
                For enquiries about our products:
              </p>

              <li className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1  ">
                <FiPhone size={18} />
                <NavLink to="tel:09076555350 ">09076555350 </NavLink>
              </li>

              <li className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1  ">
                <FiPhone size={18} />
                <NavLink to="tel:09076555417 ">09076555417 </NavLink>
              </li>
              <p className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1  ">
                Customer Service :
              </p>
              <li className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1  ">
                <FiPhone size={18} />
                <NavLink to="tel:02015159999 ">02015159999 </NavLink>
              </li>

              <p className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1">
                Emails for customer care and enquiries
              </p>
              <li className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1 text-wrap  ">
                <FaRegEnvelope size={18} />
                <NavLink
                  to="mailto:customercare_retail@cyberspace.net.ng"
                  className="!text-wrap"
                >
                  customercare_retail@cyberspace.net.ng{" "}
                </NavLink>
              </li>
              <li className="text-[1.03rem] text-[#ADB7BC] font-normal flex items-center gap-1  ">
                <FaRegEnvelope size={18} />
                <NavLink to="mailto:lteretail@cyberspace.net.ng  ">
                  lteretail@cyberspace.net.ng{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-[#ADB7BC] flex justify-center items-center 2xl:py-10 py-6 border-t-[0.7px] border-grayPrimary mt-16 ">
          <p className="2xl:text-base text-sm font-pSans px-1 text-center">
            © 2024 Cyberspace LTE. All Rights Reserved |&nbsp;
            <span className=" text-nowrap">
              <NavLink to="whistle-blower">Whistle Blower</NavLink>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
