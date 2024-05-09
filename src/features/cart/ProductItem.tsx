import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ProductItemType } from "../../contracts/product.";
import {Tooltip} from "@material-tailwind/react"
import { formatCurrency } from "../../utils/helpers";

interface Props {
  data: ProductItemType;
}
const ProductItem: FC<Props> = ({ data }) => {
 
  

  const { product_name, price, images, id } = data;
  const renderImg = JSON.parse(images)[0];
  return (
    <div className="flex flex-col items-center rounded-[20px] border-[1.6px] border-[#008ECC]  w-full pb-3 overflow-hidden relative">
      <div className="bg-[#E4E7E9] w-full flex items-center justify-center xl:h-64 md:h-52 sm:h-48 h-44 px-5">
        <img src={renderImg} alt="" className="max-w-[95%] max-h-[95%]" />
      </div>
      <p className="2xl:text-lg text-center text-sm font-semibold text-[#222222] mt-3">
        {product_name}
      </p>
      <p className="2xl:text-[22px] text-base font-semibold text-[#222222] mt-3">
        {formatCurrency(price)}
      </p>
      <Tooltip
                  placement="bottom"
                  className="border border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
                  content={
                    <div className="w-80">
                      <p className="font-normal opacity-80 text-gray-500">
                        Note ${formatCurrency(price)} is is only for the
                        product not with installation
                      </p>
                    </div>
                  }
                >
      <NavLink
      
        to={`/product/${id}`}
        className="2xl:text-lg text-sm bg-[#008ECC] py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center"
      >
     
      Buy Now
      
      </NavLink>
      </Tooltip>
    </div>
  );
};

export default ProductItem;
