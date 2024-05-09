import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { formatAsNgnMoney } from "../../utils/helpers";
import { ProductItemType } from "../../contracts/product.";

interface Props {
  data: ProductItemType;
}
const ProductItem: FC<Props> = ({ data }) => {
  const [tooltip, setTooltip] = useState(false);
  

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
        {formatAsNgnMoney(price)}
      </p>
      <NavLink
        onMouseLeave={() => setTooltip(false)}
        to={`/product/${id}`}
        className="2xl:text-lg text-sm bg-[#008ECC] py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center"
      >
      <span  onMouseEnter={() => setTooltip(true)}>
      Buy Now
      </span>
      </NavLink>
      {tooltip && price == 122000 && (
        <div className="absolute bg-[#fffffff0] shadow-xl p-4 bottom-20">
          <p className="text-redPrimary">
            <span className="font-medium">Note:</span> The price{" "}
            {formatAsNgnMoney(price)} is only for product not with installation
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
