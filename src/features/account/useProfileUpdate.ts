import { useMutation } from "@tanstack/react-query";
import { updateProfile as updateProfileApi } from "../../services/apis/accountApi";
import { updatePassword as updatePasswordApi } from "../../services/apis/accountApi";
import toast from "react-hot-toast";

export function useUpdateProfile() {
    const { mutate: updateProfile, isLoading:isUpdating } = useMutation({
      mutationFn: updateProfileApi,
      onSuccess: (data) => {
        console.log(data);
        toast.success("Profile Updated successfully")
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        console.log(error);
        toast.error(error.response.data.message);
      },
    });
  
    return { updateProfile, isUpdating };
  }

  export function useUpdatePassword() {
    const { mutate: updatePassword, isLoading:isUpdating } = useMutation({
      mutationFn: updatePasswordApi,
      onSuccess: (data) => {
        console.log(data);
        toast.success("Password Updated successfully")
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        console.log(error);
        toast.error(error.response.data.message);
      },
    });
  
    return { updatePassword, isUpdating };
  }