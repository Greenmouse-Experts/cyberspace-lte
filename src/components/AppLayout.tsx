
import Footer from "./Footer";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import Header from "./Header";
import { useEffect } from "react";
import nprogress from "nprogress";

function AppLayout() {
 
  const { pathname } = useLocation();
  const location = useLocation();

  useEffect(() => {
    nprogress.start();
    nprogress.done();
  }, [location.pathname]);
 

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
 
  return (
    <>
      <Header />
      <main className="relative pb-28 dark:bg-darkMood transition-all">
        <Outlet />
        <div className="bg-[#DE0F04] w-12 h-12 flex justify-center items-center fixed right-0 top-[50%] cursor-pointer ">
          <NavLink to="/cart">
            <IoMdCart color="white" size={30} />
          </NavLink>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
