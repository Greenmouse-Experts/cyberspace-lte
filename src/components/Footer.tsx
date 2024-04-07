
import { GoArrowRight } from "react-icons/go";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="bg-[#057FCC] mt-32 2xl:py-20 md:py-14 py-6  mx-0">
        <div className="text-white font-pSans text-center justify-center flex flex-col mx-auto md:w-[35%] w-[80%]">
          <h3 className="2xl:text-[30px] text-2xl font-semibold">
            Subscribe to our newsletter
          </h3>
          <p className="2xl:text-sm text-[10px] font-[300] text-[#f4f4f4] mt-3 w-[80%] mx-auto">
            Subscribe to our newsletter and be the first to know when we have
            new products to boost your internet experience.
          </p>
          <div className="mt-10 w-full relative">
            <input
              type="text"
              placeholder="Email address"
              className="w-full 2xl:h-[70px] h-[60px] rounded-[3px] pl-6 2xl:placeholder:text-[16px] placeholder:text-[11px]"
            />
            <button className="flex items-center font-bold 2xl:text-[12px] text-[10px] h-[80%] px-6 uppercase bg-[#FA8232] absolute right-2 2xl:top-2 top-2 rounded-[3px]">
              Subscribe &nbsp;
              <GoArrowRight color="white" size={22} />
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#191C1F] pt-24">
        <div className="flex flex-wrap md:justify-between justify-start md:gap-0 gap-10 2xl:px-[200px] md:px-[140px] px-10">
          <div>
            <p className="font-normal 2xl:text-[17px] text-[12px] text-white uppercase">
              Customer Supports:
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[16px] text-[#ADB7BC] font-normal">
                <NavLink to="/">
                  12 Ologun Agbaje Street, Victoria
                  <br /> Island, Lagos, Nigeria
                </NavLink>
              </li>
              <li className="text-[16px] text-[#ADB7BC] font-normal">
                <NavLink to="tel:015159999">015159999, 09076555420</NavLink>
              </li>
              <li className="text-[16px] text-[#ADB7BC] font-normal">
                <NavLink to="mailto:lteretail@cyberspace.net.ng">
                  lteretail@cyberspace.net.ng
                </NavLink>
              </li>
              <li className="text-[16px] text-[#ADB7BC] font-normal">
                <NavLink to="mailto:cyberspacelteltd@gmail.com">
                  cyberspacelteltd@gmail.com
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-normal 2xl:text-[17px] text-[12px] text-white uppercase">
              Quick links
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">Shop Product</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">personal</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">business</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">out dealers</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">coverage</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-normal 2xl:text-[17px] text-[12px] text-white uppercase">
              support
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                <NavLink to="/">tearms & conditions</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">help</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">privacy policy</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">return policy</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">contact us</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-normal 2xl:text-[17px] text-[12px] text-white uppercase">
              account
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                <NavLink to="/">my account</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">orders</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">wishlist</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">payment</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">shipping</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-normal 2xl:text-[17px] text-[12px] text-white uppercase">
              store
            </p>
            <ul className="flex flex-col 2xl:gap-4 gap-1 mt-5">
              <li className="text-[12px] text-[#ADB7BC] font-norma capitalize">
                <NavLink to="/">affiliate</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal">
                <NavLink to="">discount</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">sales</NavLink>
              </li>
              <li className="text-[12px] text-[#ADB7BC] font-normal capitalize">
                <NavLink to="">contact</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-[#ADB7BC] flex justify-center items-center 2xl:py-10 py-6 border-t-[0.7px] border-grayPrimary mt-16">
          <p className="2xl:text-[12px] text-[10px] font-pSans">
            © 2024 Cyberspace LTE. All Rights Reserved | Whistle Blower
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
