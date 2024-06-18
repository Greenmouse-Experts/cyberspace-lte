import { useQuery } from "@tanstack/react-query";
import { getOrder, getOrders, getPlans } from "../../services/apis/ordersApi";


export function useOrders() {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return { isLoading, orders, error };
}

export function useOrder(orderId:number | string) {
  const {
    isLoading,
    data: order,
    error,
  } = useQuery({
    queryKey: [orderId],

    queryFn: () =>  getOrder(orderId),
  });

  return { isLoading, order, error };
}


export function usePlans() {
  const {
    isLoading,
    data: plans,
    error,
  } = useQuery({
    queryKey: ["plan-orders"],
    queryFn: getPlans,
  });

  return { isLoading, plans, error };
}