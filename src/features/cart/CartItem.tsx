import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { formatCurrency } from "../../utils/helpers";

function CartItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between relative py-5">
      <div className="flex items-center gap-5">
        <img src="/img/product-1.png" alt="" className="w-28 h-28" />
        <div className="flex flex-col">
          <span>Superfast Broadband Device</span>
          <span>white</span>
          <span>#27462848427439</span>
        </div>
      </div>

      <div className="flex justify-between gap-10 items-center sm:mt-0 mt-3 sm:w-fit w-full">
        <div className="flex justify-center divide-x divide-grey-400 border-grey-400 border py-2">
          <span
            className="w-12 flex justify-center items-center cursor-pointer"
            onClick={decrement}
          >
            <FiMinus size={18} />
          </span>
          <span className="w-12 flex justify-center items-center text-xl">
            {quantity}
          </span>
          <span
            className="w-12 flex justify-center items-center cursor-pointer "
            onClick={increment}
          >
            <FiPlus size={18} />
          </span>
        </div>
        <div className="">
          <p className="font-medium text-lg">{formatCurrency(quantity * 2800)}</p>
        </div>
      </div>
      <LiaTimesSolid className="absolute top-0 right-2 cursor-pointer" size={25} />
    </div>
  );
}

export default CartItem;
