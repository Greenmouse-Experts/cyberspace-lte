import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  confirmPayment,
  getPaymentStatus,
  payment,
} from "../../services/apis/paymentApi";
import toast from "react-hot-toast";

export function usePayment() {
  const { mutate: pay, isLoading } = useMutation({
    mutationFn: payment,
    onSuccess: () => {
      // toast.success("Payment Successful")
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.message);
    },
  });

  return { pay, isLoading };
}

export function useGetPayment() {
  const { mutate: checkPayment, isLoading:isChecking } = useMutation({
    mutationFn: getPaymentStatus,
    onSuccess: (data) => {
      console.log(data);
      // toast.success("Payment Successful")
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.message);
    },
  });

  return { checkPayment, isChecking };
}

export function useConfirmPayment() {
  const queryClient = useQueryClient();
  const { mutate: confirmTransaction, isLoading:isConfirming } = useMutation({
    mutationFn: confirmPayment,
  
    onSuccess: () => {
      toast.success("Payment Successful");
      queryClient.invalidateQueries({
        queryKey: ["plan-orders, orders"],
      });
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.message);
    },
  });

  return { confirmTransaction, isConfirming };
}
