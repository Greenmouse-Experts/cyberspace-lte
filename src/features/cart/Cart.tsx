import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { formatCurrency } from "../../utils/helpers";
import CartItem from "./CartItem";
import {
  CartItemTyping,
  getCart,
  getTotalCartPrice,
} from "../../state/cart/cartSlice";
import { CheckoutModal } from "../../components/modals/CheckoutModal";
import { useState } from "react";
import { isLoggedIn } from "../../state/user/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";



function Cart() {
  const cartItems = useSelector(getCart);
  const totalPrice = useSelector(getTotalCartPrice);
  const checkUser = useSelector(isLoggedIn);
  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <section className=" font-inter flex lg:flex-row flex-col mt-16 gap-20">
      <div className="lg:w-[55%] w-full">
        <h3 className="uppercase font-medium">SHOPPING CART</h3>
        <div className="mt-5">
          {cartItems.items.map((item: CartItemTyping) => (
            <CartItem item={item} key={item.productId} />
          ))}
          {/* <CartItem />
          <CartItem /> */}
        </div>
      </div>

      <div className="lg:w-[45%] w-full border border-x-grey-400 py-10 sm:px-10 px-2 rounded-lg">
        <h3 className="font-medium sm:ml-10">Order Summary</h3>
        <div className="mt-10">
          <p className="text-lg font-normal">
            <span>Discount</span> / <span>Promo Code</span>
          </p>
          <div className="relative ">
            <input
              type="text"
              placeholder="Optional"
              className="h-[70px] w-full bg-grey-200 px-5 rounded-lg mt-2 placeholder:text-[#C0C0C0]"
            />
            <button className="bg-bluePrimary px-4 py-[0.5px] text-lg rounded-lg text-white absolute right-3 font-[300] top-7">
              Apply
            </button>
          </div>

          <div className="mt-10 flex flex-col gap-5">
            <div className="flex justify-between">
              <span className="text-2xl font-medium">Subtotal</span>{" "}
              <span className="text-[1.3rem] font-medium">
                {formatCurrency(totalPrice)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-[300] ">Estimated Tax</span>{" "}
              <span className="text-[1.3rem] font-medium">₦0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-[300] ">Shipping and Handling</span>{" "}
              <span className="text-[1.3rem] font-medium">₦0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-2xl font-medium ">Total</span>{" "}
              <span className="text-[1.3rem] font-medium">
                {formatCurrency(totalPrice)}
              </span>
            </div>
          </div>
          <CheckoutModal handleOpen={handleOpen} open={open} />
          <Button onClick={
           () => {
            if(checkUser){
              handleOpen()
            }else{
              navigate('/signin')
              toast.error('Sign in to continue...')
            }
           }
            }>Checkout</Button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
