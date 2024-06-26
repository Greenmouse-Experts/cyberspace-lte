import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apis/productApi";

export function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { isLoading, products, error };
}
