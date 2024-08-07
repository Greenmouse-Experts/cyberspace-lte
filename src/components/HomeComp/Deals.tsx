import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Advert from "../Advert";
import { useProducts } from "../../features/cart/useProducts";
import { ProductItemType } from "../../contracts/product.";
import { formatCurrency } from "../../utils/helpers";
import { Tooltip } from "@material-tailwind/react";
import { FaInfoCircle } from "react-icons/fa";

function Deals() {
  const location = useLocation();

  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { products } = useProducts();

  function createSlug(name: string) {
    return name
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

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
            <NavLink
              to={`/product/${product.id}/${createSlug(product.product_name)}`}
            >
              <div
                key={product.id}
                className="flex sm:flex-row flex-col items-center gap-8 p-2 sm:h-[19rem] h-[25] rounded-[20px] border border-bluePrimary shadow-lg pb-3 overflow-hidden relative hover:-translate-y-1 transition-all hover:shadow-xl"
              >
                <div className="bg-[#E4E7E9] sm:w-[45%] w-full h-full  rounded-2xl flex justify-center items-center">
                  <img
                    src={JSON.parse(product.images)[0]}
                    alt=""
                    className="w-[85%]"
                  />
                </div>

                <div className=" flex flex-col sm:items-start items-center gap-3 sm:w-[55%] w-full sm:pr-8 pr-0">
                  <p className="2xl:text-lg font-semibold text-[#222222]">
                    {product.product_name}
                  </p>
                  <p className=" text-redPrimary">2.4GHz and 5Ghz Frequency.</p>

                  <div className="flex items-center gap-2">
                    <p className=" text-base font-semibold text-[#222222]">
                      {formatCurrency(product.price)}
                    </p>
                    {product.price == 122000 && (
                      <div className=" bottom-0 right-4 ">
                        <Tooltip
                          placement="top"
                          className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl dark:bg-darkMood shadow-black/10"
                          content={
                            <div className="w-80">
                              <p className="font-normal opacity-80 text-black dark:!text-white">
                                <span className="font-medium">Note:</span>{" "}
                                {formatCurrency(product.price)} is only for the
                                product not with installation.
                              </p>
                            </div>
                          }
                        >
                          <span>
                            <FaInfoCircle
                              color="red"
                              size={20}
                              className=" cursor-pointer"
                            />
                          </span>
                        </Tooltip>
                      </div>
                    )}
                  </div>

                  {/* <NavLink
                  to={`/product/${product.id}/${createSlug(product.product_name)}`}
                  className="2xl:text-lg text-sm btn-hover bg-bluePrimary py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center"
                >
                  Buy Now
                </NavLink> */}
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="text-center mt-16 flex items-center justify-center">
          <NavLink
            to="/products"
            className=" base-btn text-white bg-bluePrimary flex items-center justify-center"
          >
            View All{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </NavLink>
        </div>
      </section>
      <section className=" grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 items-center sm:justify-between justify-center  rounded-[10px]  py-10 jus mt-20 font-montserrat mb-20">
        <div className="flex items-center gap-3 sm:flex-row flex-col sm:text-start text-center">
          <img src="/icons/quality-4.png" alt="" className="sm:w-10 sm:h-10 w-16 h-16" />
          <div>
            <p className=" text-[#222222]  font-bold">
              Fast Delivery
            </p>
            <p className=" text-black font-medium">
              Delivery in 24 Hours
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:flex-row flex-col sm:text-start text-center">
          <img src="/icons/quality-3.png" alt="" className="sm:w-10 sm:h-10 w-16 h-16" />
          <div>
            <p className=" text-[#222222]  font-bold">
              Quality Devices
            </p>
            <p className=" text-black font-medium">
              100% Quality products
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:flex-row flex-col sm:text-start text-center">
          <img src="/icons/quality-2.png" alt="" className="sm:w-10 sm:h-10 w-16 h-16" />
          <div>
            <p className=" text-[#222222]  font-bold">
              Secure Payment
            </p>
            <p className=" text-black font-medium">
              Your money is safe
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:flex-row flex-col sm:text-start text-center">
          <img src="/icons/quality-1.png" alt="" className="sm:w-10 sm:h-10 w-16 h-16" />
          <div>
            <p className=" text-[#222222]  font-bold">
              Support 24 Hours
            </p>
            <p className=" text-black font-medium">
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
