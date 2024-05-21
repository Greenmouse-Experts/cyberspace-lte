import { useMutation } from "@tanstack/react-query";
import { payment } from "../../services/apis/paymentApi";
import toast from "react-hot-toast";

export function usePayment(){
    const { mutate: pay, isLoading } = useMutation({
        mutationFn: payment,
        onSuccess: () => {
            toast.success("Payment Successful")
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error:any) => {
            console.log(error)
            toast.error(error.response.data.message)
        }
    })

    return { pay, isLoading }
}