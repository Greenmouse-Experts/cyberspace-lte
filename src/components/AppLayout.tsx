import Header from "./Header";
import Footer from "./Footer";
import { NavLink, Outlet } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

function AppLayout() {
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
