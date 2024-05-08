import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apis/productApi";

export function useProduct(productId:string) {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    queryKey: [productId],
    queryFn: getProduct(productId),
  });

  return { isLoading, product, error };
}
