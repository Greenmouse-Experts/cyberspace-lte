import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apis/ordersApi";


export function useOrders() {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["Orders"],
    queryFn: getOrders,
  });

  return { isLoading, orders, error };
}