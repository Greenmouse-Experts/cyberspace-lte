import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader";
import { OrderTypes } from "./orders.type";
import { useOrders } from "./useAccount";
import { formatDate } from "../../utils/helpers";

const Orders = () => {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Loader />;

  // console.log(orders);

  return (
    <div className="container mx-auto p-6 flex flex-col">
     {orders.data.map((order:OrderTypes) => (
      <div className="border-grey-700 flex justify-between p-4 bg-white shadow-md rounded my-6" key={order.id}>
          <div className="flex flex-col gap-2">
            <p className="font-medium">{order.payment_reference}</p>
            <p className=" bg-yellow w-fit rounded-lg px-2 ">{order.status}</p>
            <p className="font-semibold">{formatDate(order.paid_at)}</p>
          </div>
          <div className="flex flex-col justify-between">
            <NavLink to="#">
              <button className="bg-bluePrimary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                View
              </button>
            </NavLink>

            <p className="font-bold text-xl">{order.items[0].amount}</p>
          </div>
        </div>

))}
        
        {/* <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Price</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">View Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.data.map((item:OrderTypes, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b border-gray-200">
                <img src={item.image} alt="Product" className="w-10 h-10 rounded-full" />
              </td>
              <td className="py-2 px-4 border-b border-gray-200">{item.name}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.items.amount}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.orderDate}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.status}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <a href={item.detailsLink} className="text-indigo-600 hover:text-indigo-900">View Details</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
     
    </div>
  );
};

export default Orders;
