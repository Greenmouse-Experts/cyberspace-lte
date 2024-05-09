import { useMutation } from "@tanstack/react-query";
import { signup as SignUpApi } from "../../services/authApi";
import toast from "react-hot-toast";
interface NetworkError {
  response: {
    data: {
      message: string;
    };
  };
}

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: SignUpApi,
    onSuccess: () => {
      toast.success("Account successfully created! Please verify your account ");
    },
    onError: (error:NetworkError) => {
      toast.error(`${error.response.data.message}`);
    },
  });

  return{signup, isLoading}
}
