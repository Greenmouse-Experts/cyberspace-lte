import { FaRegEnvelope } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { LuSmartphone } from "react-icons/lu";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="bg-[#057FCC] 2xl:py-20 md:py-14 py-6  mx-0">
        <div className="text-white font-pSans text-center justify-center flex flex-col mx-auto lg:w-[35%] w-[80%]">
          <h3 className="2xl:text-[30px] text-2xl font-semibold">
            Subscribe to our newsletter
          </h3>
          <p className="2xl:text-sm text-sm font-[300] text-[#f4f4f4] mt-3 w-[80%] mx-auto">
            Subscribe to our newsletter and be the first to know when we have
            new products to boost your internet experience.
          </p>
          <div className="mt-10 w-full relative">
            <input
              type="text"
              placeholder="Email address"
              className="w-full 2xl:h-[70px] h-[60px] rounded-[3px] pl-6 2xl:placeholder:text-[16px] placeholder:text-[11px]"
            />
            <button className="flex items-center font-bold 2xl:text-[12px] text-[10px] h-[80%] sm:px-6 px-2 uppercase bg-[#DE0F04] absolute right-2 2xl:top-2 md:top-[6px] sm:top-2 top-[6px] rounded-[3px]">
              Subscribe &nbsp;
              <GoArrowRight color="white" size={22} />
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#191C1F] pt-16">
        <div className="flex flex-wrap md:justify-between justify-start md:gap-0 gap-10 2xl:px-[200px] md:px-[140px] px-10">
          <div>
            <p className="font-normal 2xl:text-[17px] text-white uppercase">
              Contact Us
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              <GrLocation size={20} />
                <NavLink to="/">
                  12 Ologun Agbaje Street, Victoria
                  <br /> Island, Lagos, Nigeria
                </NavLink>
              </li>
              <p className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              For enquiries about our products:
            </p>
           
              <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              <LuSmartphone size={20} />
                <NavLink to="tel:09076555350 ">09076555350 </NavLink>
              </li>
         
              <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              <LuSmartphone size={20} />
                <NavLink to="tel:09076555417 ">09076555417 </NavLink>
              </li>
              <p className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              Contact Us
            </p>
              <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              <LuSmartphone size={20} />
                <NavLink to="tel:02015159999 ">02015159999 </NavLink>
              </li>
             
              <p className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              Emails for customer care and enquiries
            </p>
              <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2 text-wrap">
              <FaRegEnvelope size={20} />
                <NavLink to="mailto:customercare_retail@cyberspace.net.ng" className="text-wrap">customercare_retail@cyberspace.net.ng  </NavLink>
              </li>
              <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              <FaRegEnvelope size={20} />
                <NavLink to="mailto:lteretail@cyberspace.net.ng  ">lteretail@cyberspace.net.ng   </NavLink>
              </li>
            </ul>
          </div>
          {/* <div>
            <p className="font-normal 2xl:text-[17px] text-white uppercase">
            Customer service
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
            <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              <LuSmartphone size={20} />
                <NavLink to="tel:02015159999 ">02015159999 </NavLink>
              </li>
              <p className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              Emails for customer care and enquiries
            </p>
              <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              <FaRegEnvelope size={20} />
                <NavLink to="mailto:customercare_retail@cyberspace.net.ng  ">customercare_retail@cyberspace.net.ng  </NavLink>
              </li>
              <li className="text-[16px] text-[#ADB7BC] font-normal flex items-center gap-2">
              <FaRegEnvelope size={20} />
                <NavLink to="mailto:lteretail@cyberspace.net.ng  ">lteretail@cyberspace.net.ng   </NavLink>
              </li>
              
            </ul>
          </div> */}
          <div>
            <p className="font-normal 2xl:text-[17px] text-white uppercase">
              Quick links
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/products">Shop Product</NavLink>
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
            <p className="font-normal 2xl:text-[17px] text-white uppercase">
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
                <NavLink to="/faqs">FAQs
                </NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/contact">contact us</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-normal 2xl:text-[17px] text-white uppercase">
              account
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                <NavLink to="/signin">my account</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="/cart">My cart</NavLink>
              </li>
              {/* <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">wishlist</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">payment</NavLink>
              </li> */}
             
            </ul>
          </div>
        </div>

        <div className="text-[#ADB7BC] flex justify-center items-center 2xl:py-10 py-6 border-t-[0.7px] border-grayPrimary mt-16">
          <p className="2xl:text-[12px] text-[10px] font-pSans">
            © 2024 Cyberspace LTE. All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
