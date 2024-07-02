import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ProductItemType } from "../../contracts/product.";
import { Tooltip } from "@material-tailwind/react";
import { formatCurrency } from "../../utils/helpers";
import { FaInfoCircle } from "react-icons/fa";

interface Props {
  data: ProductItemType;
}
const ProductItem: FC<Props> = ({ data }) => {
  const { product_name, price, images, id } = data;
  const renderImg = JSON.parse(images)[0];
  
  function createSlug(name:string) {
    return name
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  }

  const productUrl = `/product/${id}/${createSlug(product_name)}`
  
  
  return (
    <div className="flex flex-col items-center rounded-[20px] border-[1.6px] border-bluePrimary  w-full pb-3 overflow-hidden relative">
      <div className="bg-[#E4E7E9] w-full flex items-center justify-center xl:h-64 md:h-52 sm:h-48 h-44 px-5">
        <img src={renderImg} alt="" className="max-w-[95%] max-h-[95%]" />
      </div>

      <p className="2xl:text-lg text-center text-sm font-semibold text-[#222222] mt-3">
        {product_name}
      </p>
      <div className="flex gap-4 items-center mt-3">
        <p className="2xl:text-[22px] text-base font-semibold text-[#222222] ">
          {formatCurrency(price)}
        </p>
        {price == 122000 && (
          <div className=" bottom-4 right-2 ">
            <Tooltip
              placement="top"
              className="border border-blue-gray-50 bg-white px-4 py-3 dark:bg-darkMood shadow-xl shadow-black/10"
              content={
                <div className="w-80">
                  <p className="font-normal opacity-80 text-redPrimary dark:!text-white">
                    <span className="font-medium">Note:</span> {formatCurrency(price)} is only for the product not
                    with installation.
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

      <NavLink
        to={productUrl}
        className="2xl:text-lg text-sm bg-bluePrimary py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center"
      >
        Buy Now
      </NavLink>
    </div>
  );
};

export default ProductItem;
