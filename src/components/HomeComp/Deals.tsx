import {
  PiCreditCardThin,
  PiHeadphonesThin,
  PiPackageLight,
  PiTrophyThin,
} from "react-icons/pi";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Advert from "../Advert";
import { useProducts } from "../../features/cart/useProducts";
import { ProductItemType } from "../../contracts/product.";
import { formatCurrency } from "../../utils/helpers";
import { Tooltip } from "@material-tailwind/react";

function Deals() {
  const location = useLocation();

  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { products } = useProducts();

  console.log(products);

  return (
    <>
      <section className="mt-20" id="shop-product">
        <> {location.hash && handleScroll(location.hash.slice(1))}</>
        <h4 className="text-grayPrimary text-center font-semibold">
          Grab the best deal on{" "}
          <span className="text-bluePrimary">Internet Routers</span>
        </h4>

        <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:text-[1.3rem] text-sm justify-center gap-8 mt-16">
          {products?.data?.slice(0, 2).map((product: ProductItemType) => (
            <div
              key={product.id}
              className="flex sm:flex-row flex-col items-center gap-8 p-2 sm:h-[19rem] h-[25] rounded-[20px] border-[1.6px] border-[#008ECC] pb-3 overflow-hidden relative"
            >
              <div className="bg-[#E4E7E9] sm:w-[45%] w-full h-full  rounded-2xl flex justify-center items-center">
                <img
                  src={JSON.parse(product.images)[0]}
                  alt=""
                  className="w-[85%]"
                />
              </div>
              <div className=" flex flex-col gap-3 sm:w-[55%] w-full pr-8">
                <p className="2xl:text-lg text-sm font-semibold text-[#222222]">
                  {product.product_name}
                </p>
                <p className=" text-redPrimary">2.4GHz and 5Ghz Frequency.</p>
                <p className=" text-base font-semibold text-[#222222]">
                  {formatCurrency(product.price)}
                </p>

                <Tooltip
                  placement="bottom"
                  className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                  content={
                    <div className="w-80">
                      <p className="font-normal opacity-80 text-gray-500">
                        Note ${formatCurrency(product.price)} is is only for the
                        product not with installation
                      </p>
                    </div>
                  }
                >
                  <NavLink
                    to={`/product/${product.id}`}
                    className="2xl:text-lg text-sm bg-[#008ECC] py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center"
                  >
                    Buy Now
                  </NavLink>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 flex items-center justify-center">
          <NavLink
            to="/products"
            className="border border-bluePrimary px-11 py-5 text-bluePrimary rounded-[50px] flex items-center justify-center"
          >
            View All{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </NavLink>
        </div>
      </section>
      <section className="border grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-3 gap-5 justify-center items-center lg:divide-x divide-grey-400 border-[#E4E7E9] rounded-[10px] px-10 py-10 jus mt-20 font-pSans mb-20">
        <div className="flex items-center gap-3">
          <PiPackageLight size={40} />
          <div>
            <p className="2xl:text-lg text-sm text-[#222222]  font-medium">
              Fast Delivery
            </p>
            <p className="2xl:text-sm text-[12px] text-lightGray font-medium">
              Delivery in 24 Hours
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <PiTrophyThin size={40} />
          <div>
            <p className="2xl:text-lg text-sm text-[#222222]  font-medium">
              Quality Devices
            </p>
            <p className="2xl:text-sm text-[12px] text-lightGray font-medium">
              100% Quality products
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <PiCreditCardThin size={40} />
          <div>
            <p className="2xl:text-lg text-sm text-[#222222]  font-medium">
              Secure Payment
            </p>
            <p className="2xl:text-sm text-[12px] text-lightGray font-medium">
              Your money is safe
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <PiHeadphonesThin size={40} />
          <div>
            <p className="2xl:text-lg text-sm text-[#222222]  font-medium">
              Support 24/7
            </p>
            <p className="2xl:text-sm text-[12px] text-lightGray font-medium">
              Live contact/message
            </p>
          </div>
        </div>
      </section>
      <Advert />
    </>
  );
}

export default Deals;
