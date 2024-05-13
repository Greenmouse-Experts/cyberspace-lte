
import { FiMinus, FiPlus } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { formatCurrency } from "../../utils/helpers";
import {  decreaseQuantity, increaseQuantity } from "../../state/cart/cartSlice";
import { useAppDispatch } from "../../state/hooks";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CartItem({item}:any) {

  const {image, name, quantity:itemQuantity, price , productId} = item;
  // const [quantity, setQuantity] = useState(itemQuantity);
const dispatch = useAppDispatch()

  const increment = () => {
    console.log("clicked", productId)
    dispatch(increaseQuantity(productId))
  };
  const decrement = () => {
    console.log("clicked")
    dispatch(decreaseQuantity(productId))
  };
  return (
    <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between relative py-5">
      <div className="flex items-center gap-5">
        <img src={image} alt="" className="w-28 h-28" />
        <div className="flex flex-col gap-4">
          <span>{name}</span>
          {/* <span>white</span> */}
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
            {itemQuantity}
          </span>
          <span
            className="w-12 flex justify-center items-center cursor-pointer "
            onClick={increment}
          >
            <FiPlus size={18} />
          </span>
        </div>
        <div className="">
          <p className="font-medium text-lg">{formatCurrency(price)}</p>
        </div>
      </div>
      <LiaTimesSolid className="absolute top-0 right-2 cursor-pointer" size={25} />
    </div>
  );
}

export default CartItem;
