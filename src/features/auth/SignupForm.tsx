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
  console.log(errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    console.log(email, password, first_name, last_name, phone_number);
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
          console.log(data);

          // dispatch(loginUser())
        },
      }
    );
  }

  return (
    <section className="flex items-center  mx-0 font-inter h-full lg:py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[47rem]  bg-white w-full px-5 py-10 flex flex-col justify-center items-center mx-auto "
      >
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className="mb-5" />
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
                  required: "first_name is required",
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
                  required: "last_name is required",
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
                required: "phone_number is required",
              })}
              style={{ width: "100%", height: 60, borderRadius: "10px" }}
            />
</div>

<div className="flex lg:flex-row flex-col gap-6">
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
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
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
                id="outlined-adornment-password"
                type={showpassword_confirmation ? "text" : "password"}
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
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowpassword_confirmation}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showpassword_confirmation ? (
                        <MdVisibility />
                      ) : (
                        <MdVisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
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
                  Terms and Conditions
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
