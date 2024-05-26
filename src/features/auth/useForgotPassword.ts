import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { forgotPassword } from "../../services/authApi";
interface NetworkError {
  response: {
    data: {
      message: string;
    };
  };
}

export function useForgotPassword() {
  const navigate = useNavigate();
//   const queryClient = useQueryClient();
  const { mutate: getToken, isLoading } = useMutation({
    mutationFn:  forgotPassword,
    onSuccess: () => {
      toast.success(`Token sent successfully`);
      navigate("/reset-password", { replace: true });
    },
    onError: (error:NetworkError) => {
      toast.error(`${error.response.data.message}`);
    },
  });

  return { getToken, isLoading };
}
