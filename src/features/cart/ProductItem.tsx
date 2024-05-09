
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { formatAsNgnMoney } from "../../utils/helpers";
import { ProductItemType } from "../../contracts/product.";

interface Props{
  data: ProductItemType
}
const ProductItem:FC<Props> = ({data}) => {
  const {product_name, price, images, id} = data
  const renderImg = JSON.parse(images)[0]
  return (
    <div className="flex flex-col items-center rounded-[20px] border-[1.6px] border-[#008ECC]  w-full pb-3 overflow-hidden relative">
      <div className="bg-[#E4E7E9] w-full flex items-center justify-center xl:h-64 md:h-52 sm:h-48 h-44 px-5">
        <img src={renderImg} alt="" className="max-w-[95%] max-h-[95%]"  />
      </div>
      <p className="2xl:text-lg text-center text-sm font-semibold text-[#222222] mt-3">
        {product_name}
      </p>
      <p className="2xl:text-[22px] text-base font-semibold text-[#222222] mt-3">
        {formatAsNgnMoney(price)}
      </p>
      <NavLink
        to={`/product/${id}`}
        className="2xl:text-lg text-sm bg-[#008ECC] py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center"
      >
        Buy Now
      </NavLink>

    </div>
  );
}

export default ProductItem;