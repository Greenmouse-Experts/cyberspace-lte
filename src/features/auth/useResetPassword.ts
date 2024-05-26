import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPassword as resetPasswordApi } from "../../services/authApi";
interface NetworkError {
  response: {
    data: {
      code:number;
      message: string;
    };
  };
}

export function useResetPassword() {
  const navigate = useNavigate();
//   const queryClient = useQueryClient();
  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn:  resetPasswordApi,
    onSuccess: () => {
      toast.success(`Password successfully updated`);
      navigate("/signup", { replace: true });
    },
    onError: (error:NetworkError) => {
      console.log(error)
      if(error.response.data.code === 422){
      return  toast.error(`Invalid Code`);
      }
      toast.error(`${error.response.data.message}`);
    },
  });

  return { resetPassword, isLoading };
}
