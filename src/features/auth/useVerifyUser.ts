import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { verifyUser } from "../../services/authApi";
interface NetworkError {
  response: {
    data: {
      message: string;
    };
  };
}

export function useVerifyUser() {
  const navigate = useNavigate();
//   const queryClient = useQueryClient();
  const { mutate: verify, isLoading } = useMutation({
    mutationFn:  verifyUser,
    onSuccess: () => {
      toast.success(`User Successfully Verified`);
      navigate("/signin", { replace: true });
    },
    onError: (error:NetworkError) => {
      toast.error(`${error.response.data.message}`);
    },
  });

  return { verify, isLoading };
}
