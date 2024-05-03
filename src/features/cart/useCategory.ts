import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apis/productApi";

export function useCategory() {
  const {
    isLoading,
    data: category,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { isLoading, category, error };
}
