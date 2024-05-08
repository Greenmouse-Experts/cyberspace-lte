import { useQuery } from "@tanstack/react-query";
import { getDealers } from "../../services/apis/dealersApi";

export function useDealers() {
  const {
    isLoading,
    data: dealers,
    error,
  } = useQuery({
    queryKey: ["dealers"],
    queryFn: getDealers,
  });

  return { isLoading, dealers, error };
}


// import { useQuery } from "@tanstack/react-query";
// import { getDealers } from "../../services/apis/dealersApi";

// export function getDealers() {
//   const {
//     isLoading,
//     data: Dealers,
//     error,
//   } = useQuery({
//     queryKey: ["dealers"],
//     queryFn: getDealers,
//   });

//   return { isLoading, Dealers, error };
// }
