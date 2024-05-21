import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signin as loginApi } from "../../services/authApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
interface NetworkError {
  response: {
    data: {
      message: string;
    };
  };
} 

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: login, isLoading } = useMutation({
    mutationFn:  loginApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success(`Login Successfull`);
      navigate("/", { replace: true });
    },
    onError: (error:NetworkError) => {
      toast.error(`${error.response.data.message}`);
    },
  });

  return { login, isLoading };
}
