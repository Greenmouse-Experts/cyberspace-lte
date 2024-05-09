import { useMutation } from "@tanstack/react-query";
import { signup as SignUpApi } from "../../services/authApi";
import toast from "react-hot-toast";
interface NetworkError {
  response: {
    data: {
      message: string;
      code: number;
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
      if(error.response.data.code === 422){
        toast.error(`Email Already Exists`);
      }else{
        toast.error(`${error.response.data.message}`);
      }
      
    },
  });

  return{signup, isLoading}
}
