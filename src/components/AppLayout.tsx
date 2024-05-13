import Footer from "./Footer";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import Header from "./Header";
import { useEffect } from "react";
import nprogress from "nprogress";
import { useSelector } from "react-redux";
import { getCart } from "../state/cart/cartSlice";

function AppLayout() {
  const { pathname } = useLocation();
  const location = useLocation();
  const cartItems = useSelector(getCart);
  const cartCount = cartItems.items.length;

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <main className="relative pb-28 dark:bg-darkMood transition-all">
        <Outlet />
        <div className="bg-[#DE0F04] w-12 h-12 flex justify-center items-center fixed right-0 top-[50%] cursor-pointer ">
          <div className="relative">
            <NavLink to="/cart">
              <IoMdCart color="white" size={30}  />
            </NavLink>
            {cartCount > 0  && <p className="absolute z-10 -top-6 -left-6 drop-shadow-lg w-7 h-7 !bg-[#ffff] dark:!bg-gray-900  rounded-full flex items-center justify-center font-semibold text-[14px]">{cartCount}</p>}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
