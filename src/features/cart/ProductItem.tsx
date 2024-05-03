
import { NavLink } from "react-router-dom";

function ProductItem() {
  return (
    <div className="flex flex-col items-center rounded-[20px] border-[1.6px] border-[#008ECC]  w-full pb-3 overflow-hidden relative">
      <div className="bg-[#E4E7E9] w-full flex justify-center xl:h-64 md:h-52 sm:h-48 h-44 px-5">
        <img src="/img/deal-3.png" alt="" className=" object-cover" />
      </div>
      <p className="2xl:text-lg text-sm font-semibold text-[#222222] mt-3">
        Superfast Outdoor IDU Device
      </p>
      <p className="2xl:text-[22px] text-base font-semibold text-[#222222] mt-3">
        ₦122,000
      </p>
      <NavLink
        to="/product/123"
        className="2xl:text-lg text-sm bg-[#008ECC] py-[10px] w-[90%] rounded-[20px] text-white my-2 text-center"
      >
        Buy Now
      </NavLink>

    </div>
  );
}

export default ProductItem;
