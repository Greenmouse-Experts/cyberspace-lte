import { useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import UserDetails from "./UserDetails";
import Orders from "./Orders";
import Plans from "./Plans";
import OrderDetails from "./OrderDetails"; // Import the OrderDetails component
import { useConfirmPayment, useGetPayment } from "../cart/usePayment";
import Loader from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../../state/cart/cartSlice";
import { clearPaymentDetails, getPaymentDetails } from "../../state/payment/paymentSlice";

function AccountOverview() {
  const cartItems = useSelector(getCart);
  const { search, pathname } = useLocation(); // Extract pathname from useLocation
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { checkPayment, isChecking } = useGetPayment();
  const { confirmTransaction, isConfirming } = useConfirmPayment();
  const queryParams = new URLSearchParams(search);
  const ref = queryParams.get("ref");
  const paymentDetails = useSelector(getPaymentDetails);
  const { phone_number, address, state, lga } = paymentDetails;

  useEffect(() => {
    if (ref) {
      checkPayment(ref, {
        onSuccess() {
          confirmTransaction(
            {
              transactionReference: ref,
              products: cartItems.items.map((item) => ({
                ...item,
                product_id: item.productId,
                productId: undefined,
              })),
              phone_number,
              address,
              city: state,
              region: lga,
              country: "Nigeria",
            },
            {
              onSuccess() {
                dispatch(clearCart());
                dispatch(clearPaymentDetails());
              },
            }
          );
        },
        onSettled() {
          navigate("/account");
        },
      });
    }
  }, [ref, checkPayment, navigate, confirmTransaction, cartItems.items, dispatch, phone_number, address, state, lga]);

  if (isConfirming || isChecking) return <Loader />;

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-10">
      <aside className="col-span-1 bg-[#F3F9FB] hidden lg:block dark:bg-gray-900 h-screen px-4 pb-20 pt-5 rounded-md">
        <div
          className={`py-2 px-2 my-1 cursor-pointer ${
            pathname.startsWith("/account") && !pathname.startsWith("/account/orders") && !pathname.startsWith("/account/plans") && "bg-bluePrimary text-white rounded-md font-medium"
          }`}
          onClick={() => navigate("/account")}
        >
          <p className="flex items-center gap-3">
            <span>
              <FaRegUser />
            </span>
            My Account
          </p>
        </div>
        <div
          className={`py-2 px-2 my-1 cursor-pointer ${
            pathname.startsWith("/account/orders") && "bg-bluePrimary text-white rounded-md font-medium"
          }`}
          onClick={() => navigate("/account/orders")}
        >
          <p className="flex items-center gap-3">
            <span>
              <FiShoppingCart />
            </span>
            Orders
          </p>
        </div>
        <div
          className={`py-2 px-2 my-1 cursor-pointer ${
            pathname.startsWith("/account/plans") && "bg-bluePrimary text-white rounded-md font-medium"
          }`}
          onClick={() => navigate("/account/plans")}
        >
          <p className="flex items-center gap-3">
            <span>
              <IoMailOutline />
            </span>
            Plans
          </p>
        </div>
      </aside>
      <div className="col-span-3">
        <Routes>
          <Route path="/" element={<UserDetails />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetails />} /> {/* Add this route */}
          <Route path="plans" element={<Plans />} />
        </Routes>
      </div>
    </div>
  );
}

export default AccountOverview;
