import { TextField } from "@mui/material";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import { useResetPassword } from "../features/auth/useResetPassword";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
//import { isDark } from "../features/darkmode/DarkModeSlice";

interface FormData extends FieldValues {
  code: string;
  password: string;
}
function ResetPassword() {
  const { resetPassword, isLoading } = useResetPassword();
  //const mood = useAppSelector(isDark);

  //const userEmail = useAppSelector(getVerifyEmail);
  const { register, handleSubmit, formState } = useForm({});
  const { errors } = formState;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const form = useForm<FormData>({
    defaultValues: {
      code: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = ({code, password}) => {
    resetPassword(
      {
        code,
        password,
      },
      {
        onSuccess() {
          // toast.success("Verification Successful");
        },
      }
    );
  };

  return (
    <section className="flex justify-center items-center h-screen dark:bg-darkMood mx-0 px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[500px] w-full h-full md:p-0 p-5 flex justify-center items-center mx-auto flex-col gap-8"
      >
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className="mb-5" />
        </NavLink>
        <h3>Enter reset credentials</h3>
        <div className="w-full">
          <TextField
            id="outlined-basic"
            label="Token"
            type="text"
            variant="outlined"
            disabled={isLoading}
            style={{ width: "100%", height: 60, borderRadius: "10px" }}
            error={!!errors.code}
            helperText={errors.code ? String(errors.code.message) : ""}
            {...register("code", { required: "code is required" })}
          />
        </div>

        <div className="w-full">
          <TextField
            id="outlined-basic"
            label="New Password"
            type="text"
            variant="outlined"
            disabled={isLoading}
            style={{ width: "100%", height: 60, borderRadius: "10px" }}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            error={!!errors.password}
            helperText={errors.password ? String(errors.password.message) : ""}
          />
        </div>
        <Button disabled={isLoading}> Submit</Button>
      </form>
    </section>
  );
}

export default ResetPassword;
