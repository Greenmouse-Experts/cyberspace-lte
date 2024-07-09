import { NavLink } from "react-router-dom";
import Loader from "../../components/Loader";
import { OrderTypes } from "./orders.type";
import { useOrders } from "./useAccount";
import { formatAsNgnMoney, formatDate } from "../../utils/helpers";

const Orders = () => {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Loader />;

  // console.log(orders);

  return (
    <div className="container mx-auto p-6 flex flex-col">
      {orders.data.map((order: OrderTypes) => (
        <div
          className="border-grey-700 flex justify-between p-4 bg-white dark:bg-darkMood shadow-md rounded my-6"
          key={order.id}
        >
          <div className="flex flex-col gap-2">
            <p className="font-medium">{order.payment_reference}</p>
            <p className=" bg-yellow w-fit rounded-lg px-2 ">{order.status}</p>
            <p className="font-semibold">{formatDate(order.paid_at)}</p>
          </div>
          <div className="flex flex-col justify-between">
            <NavLink to={`/account/orders/${order.id}`}>
              <button className="bg-bluePrimary hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                View
              </button>
            </NavLink>

            <p className="font-bold text-xl">{formatAsNgnMoney(order.items[0].amount)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
