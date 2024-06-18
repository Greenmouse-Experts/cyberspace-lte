/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useParams } from "react-router-dom";
import { useOrder } from "./useAccount";
import { formatAsNgnMoney, formatDate } from "../../utils/helpers";
import Loader from "../../components/Loader";

const OrderDetails = () => {
  const params = useParams();

  const { id } = params;

  const { order, isLoading } = useOrder(id ? id : "");
  console.log(order);

  if (isLoading) return <Loader />;

  const { order_no, items, paid_at, status, payment_reference, delivery, payment_method } =
    order.data;

  const totalAmount = items.reduce((sum:any, item:any) => {
    return sum + parseFloat(item.amount);
  }, 0);


  return (
    <div className="m-10">
      <div className="border-b border-grey-300 mb-10 ">
        <p>{order_no}</p>
        <p>{payment_reference}</p>
        <p>{items.length} item</p>
        <p> <span className="font-semibold">Status: </span>{status}</p>
        <p><span className="font-semibold">Place on :</span> {formatDate(paid_at)}</p>
        <p><span className="font-semibold">Payment method: </span> {payment_method}</p>
        <p><span className="font-semibold">Total:</span> {formatAsNgnMoney(totalAmount)}</p>
      </div>

      <div className="mb-10">
        <p className="text-2xl font-semibold mb-2">Items in your order</p>
        <div className="border border-grey-700 rounded-[10px] p-4 divide-y divide-gray-200 ">
          {items.map((item: any) => (
            <div className="flex justify-between items-center py-1">
              <p>Superfast Indoor Modem</p>
              <p>{item.amount}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <p className="text-2xl font-semibold mb-2">Delivery information</p>
        <div className="border border-grey-700 rounded-[10px] p-4 ">
          <div className="">
            <p className="font-semibold">Shipping Address</p>
            <div className="flex flex-col justify-between">
              <p>{ delivery.phone_number}</p>
              <p>{delivery.address}</p>
              <p>{delivery.region}</p>
              <p>{delivery.city}</p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
