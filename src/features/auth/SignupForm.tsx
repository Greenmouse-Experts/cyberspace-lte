/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { FormEvent } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useSignup } from "./useSignup";
import { useDispatch } from "react-redux";
import { setVerifyEmail } from "../../state/user/userSlice";
import SpinnerMini from "../../components/SpinnerMini";
import { useAppSelector } from "../../state/hooks";
import { isDark } from "../darkmode/DarkModeSlice";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

interface SignupProps {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
}

function SignupForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showpassword_confirmation, setShowpassword_confirmation] =
    React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { register, handleSubmit, getValues, reset, watch, formState } =
    useForm({});
  const { errors } = formState;
  // console.log(errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mood = useAppSelector(isDark);

  const form = useForm<SignupProps>({
    defaultValues: {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowpassword_confirmation = () =>
    setShowpassword_confirmation((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { signup, isLoading } = useSignup();

  function onSubmit({
    password,
    email,
    first_name,
    last_name,
    phone_number,
    password_confirmation,
  }: SignupProps) {
    // console.log(email, password, first_name, last_name, phone_number);
    signup(
      {
        email,
        password,
        first_name,
        last_name,
        phone_number,
        password_confirmation,
      },
      {
        onSuccess(data) {
          dispatch(setVerifyEmail(email));
          navigate("/verify-account");
          // console.log(data);

          // dispatch(loginUser())
        },
      }
    );
  }

  return (
    <section className="flex items-center  mx-0 font-inter h-full lg:py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[47rem]  bg-white dark:bg-darkMood w-full px-5 py-10 flex flex-col justify-center items-center mx-auto rounded-2xl"
      >
        <NavLink to="/">
          <img
            src={mood ? "/logo-dark.png" : "/logo.svg"}
            alt="logo"
            className="2xl:w-[10.3rem] w-[6.25rem] mb-5"
          />
        </NavLink>
        <div className="flex flex-col gap-4 sm:w-[90%] w-full">
          <h2 className="text-[40px] font-bold tracking-[-2px] mb-2">
            Sign up
          </h2>
          <p className="text-grey-800 text-lg font-normal mb-8">
            Fill in your details to create an account
          </p>

          <div className="flex flex-col gap-6 ">
            <div className="flex lg:flex-row flex-col gap-6">
              <TextField
                id="outlined-basic"
                label="First Name"
                disabled={isLoading}
                variant="outlined"
                error={!!errors.first_name}
                helperText={errors?.first_name?.message}
                {...register("first_name", {
                  required: "first name is required",
                })}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                disabled={isLoading}
                variant="outlined"
                error={!!errors.last_name}
                helperText={errors?.last_name?.message}
                {...register("last_name", {
                  required: "last name is required",
                })}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />
            </div>

            <div className="flex lg:flex-row flex-col gap-6">
              <TextField
                id="outlined-basic"
                label="Email Address"
                type="email"
                variant="outlined"
                error={!!errors.email}
                disabled={isLoading}
                helperText={errors?.email?.message}
                {...register("email", { required: "Email is required" })}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />

              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                error={!!errors.phone_number}
                disabled={isLoading}
                helperText={errors?.phone_number?.message}
                {...register("phone_number", {
                  required: "phone number is required",
                })}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />
            </div>

            <div className="flex lg:flex-row flex-col gap-6">
              <div className="relative w-full">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password needs a minimum of 8 characters",
                    },
                  })}
                  disabled={isLoading}
                  helperText={errors?.password?.message}
                  error={!!errors.password}
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
             
               <div className="relative w-full">
                <TextField
                  id="outlined-basic"
                  label="Confirm Password"
                  type={showpassword_confirmation  ? "text" : "password"}
                  variant="outlined"
                  
                  helperText={errors?.password_confirmation?.message}
                  error={!!errors.password_confirmation}
                  disabled={isLoading}
                  {...register("password_confirmation", {
                    required: "This field is required",
                    validate: (val: string) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  style={{ width: "100%", height: 60, borderRadius: "10px" }}
                />
                <span
                  className="absolute right-3 top-4 cursor-pointer"
                  onClick={handleClickShowpassword_confirmation}
                >
                  {showpassword_confirmation  ? (
                    <IoMdEyeOff size={27} />
                  ) : (
                    <IoMdEye size={27} />
                  )}
                </span>
              </div>
             
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                name=""
                id="checkbox"
                className="w-5 h-5"
              />
              <label htmlFor="checkbox" className="text-[#232323] font-normal">
                I agree to{" "}
                <span className="text-bluePrimary underline">
                  <NavLink to="/terms-conditions">Terms and Conditions</NavLink>
                </span>
              </label>
            </div>
            <Button type="submit">
              {!isLoading ? "Sign Up" : <SpinnerMini />}
            </Button>
            <div className="w-full flex justify-center items-center">
              <span className="bg-grey-200 h-[1px] block w-full"></span>
              <span className="mx-2 text-grey-700">or</span>
              <span className="bg-grey-200 h-[1px] inline w-full"></span>
            </div>
          </div>

          <p className="text-grey-800 text-lg font-normal mb-3 text-center mt-3">
            Already have an account?{" "}
            <span className="text-bluePrimary underline font-semibold pb-1">
              <NavLink to="/signin">Sign in</NavLink>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
}

export default SignupForm;
