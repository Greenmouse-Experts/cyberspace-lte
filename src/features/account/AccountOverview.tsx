import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import UserDetails from "./UserDetails";

function AccountOverview() {
  const [tab, setTab] = useState("account");

  const data = [
    {
        title:"My Account",
        value:"account",
    }, 
    {
        title:"Orders",
        value:"orders",
    },
    {
        title:"Inbox",
        value:"inbox",
    }
  ]

  return (
    <div className="grid lg:grid-cols-4 grid-cols-1  gap-10">
      <aside className=" col-span-1 bg-[#F3F9FB] hidden lg:block dark:bg-gray-900 h-screen px-4 pb-20 pt-5 rounded-md">
        <div
          className={`py-2 px-2 my-1 cursor-pointer ${
            tab === "account" &&
            "bg-bluePrimary text-white rounded-md font-medium"
          }`}
          onClick={() => setTab("account")}
        >
          <p className="flex items-center gap-3 ">
            <span>
              <FaRegUser />
            </span>
            My Account{" "}
          </p>
        </div>
        <div
          className={`py-2 px-2 my-1 cursor-pointer ${
            tab === "orders" &&
            "bg-bluePrimary text-white rounded-md font-medium"
          }`}
          onClick={() => setTab("orders")}
        >
          <p className="flex items-center gap-3 ">
            {" "}
            <span>
              <FiShoppingCart />
            </span>
            Orders
          </p>
        </div>
        <div
          className={`py-2 px-2 my-1 cursor-pointer ${
            tab === "inbox" &&
            "bg-bluePrimary text-white rounded-md font-medium"
          }`}
          onClick={() => setTab("inbox")}
        >
          <p className="flex items-center gap-3 ">
            <span>
              <IoMailOutline />
            </span>
            Inbox
          </p>
        </div>
      </aside>
      <div className="lg:hidden block w-full">
        <h3 className=" border-b-1 border-black mb-5">Account</h3>
        <select
          className="w-full h-14 text-black text-lg   bg-[#F3F9FB] rounded-lg px-3"
          value={tab}
          onChange={(e) => setTab(e.target.value)}
        >
          {data.map((item, i) => (
            <option key={i} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>
      <div className=" col-span-3">
        {tab === "account" && (
          <div>
            <UserDetails />
          </div>
        )}
        {tab === "orders" && (
          <div>
            <p>Orders</p>
          </div>
        )}
        {tab === "inbox" && (
          <div>
            <p>Inbox</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOverview;
