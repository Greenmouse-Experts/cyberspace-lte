// import React from 'react';
// import { FaRegUser } from 'react-icons/fa';
// import { FiShoppingCart } from 'react-icons/fi';
// import { IoMailOutline } from 'react-icons/io5';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const tab = location.pathname.split('/').pop();

//   return (
//     <aside className="col-span-1 bg-[#F3F9FB] hidden lg:block dark:bg-gray-900 h-screen px-4 pb-20 pt-5 rounded-md">
//       <div
//         className={`py-2 px-2 my-1 cursor-pointer ${
//           tab === "account" && "bg-bluePrimary text-white rounded-md font-medium"
//         }`}
//         onClick={() => navigate('/account')}
//       >
//         <p className="flex items-center gap-3 ">
//           <span>
//             <FaRegUser />
//           </span>
//           My Account
//         </p>
//       </div>
//       <div
//         className={`py-2 px-2 my-1 cursor-pointer ${
//           tab === "orders" && "bg-bluePrimary text-white rounded-md font-medium"
//         }`}
//         onClick={() => navigate('/account/orders')}
//       >
//         <p className="flex items-center gap-3 ">
//           <span>
//             <FiShoppingCart />
//           </span>
//           Orders
//         </p>
//       </div>
//       <div
//         className={`py-2 px-2 my-1 cursor-pointer ${
//           tab === "plans" && "bg-bluePrimary text-white rounded-md font-medium"
//         }`}
//         onClick={() => navigate('/account/plans')}
//       >
//         <p className="flex items-center gap-3 ">
//           <span>
//             <IoMailOutline />
//           </span>
//           Plans
//         </p>
//       </div>
//     </aside>
//   );
// };

// const Content = () => {
//   const location = useLocation();
//   const tab = location.pathname.split('/').pop();

//   return (
//     <div className="col-span-3">
//       {tab === "account" && <UserDetails />}
//       {tab === "orders" && <Orders />}
//       {tab === "plans" && <Plans />}
//     </div>
//   );
// };

// const AccountPage = () => {
//   return (
//     <div className="grid grid-cols-4 gap-4">
//       <Sidebar />
//       <Content />
//     </div>
//   );
// };

// export default AccountPage;
