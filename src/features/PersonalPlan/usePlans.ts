import { useMutation, useQuery } from "@tanstack/react-query";
import { getPlans } from "../../services/apis/plansApi";
import toast from "react-hot-toast";
import { confirmPlanPayment } from "../../services/apis/paymentApi";

export function usePlans() {
  const {
    isLoading,
    data: plans,
    error,
  } = useQuery({
    queryKey: ["plans"],
    queryFn: getPlans,
  });

  return { isLoading, plans, error };
}
export function useConfirmPlanPayment() {
  const { mutate: confirmTransaction, isLoading:isConfirming } = useMutation({
    mutationFn: confirmPlanPayment,
    onSuccess: () => {
      toast.success("Payment Successful");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.message);
    },
  });

  return { confirmTransaction, isConfirming };
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
