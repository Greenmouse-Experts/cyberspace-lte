// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
 
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../components/SpinnerMini";
import { saveUser, setIsLoggedIn, setToken } from "../../state/user/userSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../state/hooks";
import { isDark } from "../darkmode/DarkModeSlice";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ForgotModal } from "../../components/modals/ForgotModal";
// import { useAppSelector } from "../../state/hooks";

interface FormData extends FieldValues {
  email: string;
  password: string;
}

function LoginForm() {
  const mood = useAppSelector(isDark);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { register, handleSubmit, formState } = useForm({});
  const { errors } = formState;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { login, isLoading } = useLogin();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FieldValues> = ({ password, email }) => {
    login(
      { email, password },
      {
        onSuccess(data) {
          const fullName = data.data.name.trim();
          const nameParts = fullName.split(" ");
          const first_name = nameParts[0] || ''; 
          const last_name = nameParts.slice(1).join(" ") || '';
          
          const userDetails = {
            ...data.data,
            first_name,
            last_name
          }
          
          dispatch(saveUser(userDetails));
          dispatch(setToken(data.token));
          localStorage.setItem("token", data.token);
          dispatch(setIsLoggedIn());
          sessionStorage.setItem("lte_token", data.token);
          // dispatch(loginUser())
        },
      }
    );
  };


  return (
    <section className="flex items-center h-full  mx-0 font-inter lg:py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[35rem] bg-white dark:bg-darkMood w-full px-5 py-10 flex flex-col justify-center items-center mx-auto h-auto rounded-2xl"
      >
        <NavLink to="/">
          <img
            src={mood ? "/logo-dark.png" : "/logo.svg"}
            alt="logo"
            className="2xl:w-[10.3rem] w-[6.25rem] mb-10"
          />
        </NavLink>
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-[40px] font-bold tracking-[-2px] mb-2">
            Sign in
          </h2>
          <p className="text-grey-800 text-lg font-normal mb-8">
            Please login to continue to your account.
          </p>

          <div className="flex flex-col gap-7 ">
            <TextField
              id="outlined-basic"
              label="Email"
              type="email"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email ? String(errors.email.message) : ""}
              {...register("email", { required: "Email is required" })}
              // value={values.email}
              style={{ width: "100%", height: 60, borderRadius: "10px" }}
            />
            <div className="relative w-full">
              <TextField
                id="outlined-basic"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                {...register("password", {
                  required: "Password is required",
                })}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                error={!!errors.password}
                helperText={
                  errors.password ? String(errors.password.message) : ""
                }
                // value={values.password}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />
              <span
                className="absolute right-3 top-4 cursor-pointer"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <IoMdEyeOff size={27} />
                ) : (
                  <IoMdEye size={27} />
                )}
              </span>
            </div>

            <p className="text-grey-800 text-lg font-normal my-2">
              Forgot Password?{" "}
              <span className="text-bluePrimary font-semibold pb-1 cursor-pointer" onClick={() => handleOpen()}>
                Click here
              </span>
            </p>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="check" className="w-5 h-5" />
              <label htmlFor="check">Keep me logged in</label>
            </div>
            <Button type="submit">
              {!isLoading ? "Log in" : <SpinnerMini />}
            </Button>
            <div className="w-full flex justify-center items-center">
              <span className="bg-grey-200 h-[1px] block w-full"></span>
              <span className="mx-2 text-grey-700">or</span>
              <span className="bg-grey-200 h-[1px] inline w-full"></span>
            </div>
          </div>

          <p className="text-grey-800 text-lg font-normal mb-3 text-center mt-3">
            Need an account?{" "}
            <span className="text-bluePrimary font-semibold pb-1">
              <NavLink to="/signup">Create one</NavLink>
            </span>
          </p>
        </div>
      </form>
<ForgotModal  handleOpen={handleOpen} open={open}/>
    </section>
  );
}

export default LoginForm;
