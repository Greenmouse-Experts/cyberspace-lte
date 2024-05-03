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
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { useSignup } from "./useSignup";
import { useDispatch } from "react-redux";
import { setVerifyEmail } from "../../state/user/userSlice";

interface SignupProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordConfirm: string;
}

function SignupForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { register, handleSubmit, getValues, reset, watch, formState } = useForm({});
  const { errors } = formState;
  console.log(errors);
  const dispatch = useDispatch()

  const form = useForm<SignupProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPasswordConfirm = () =>
    setShowPasswordConfirm((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { signup, isLoading } = useSignup();

  function onSubmit({
    password,
    email,
    firstName,
    lastName,
    phoneNumber,
  }: SignupProps) {
    console.log(email, password, firstName, lastName, phoneNumber);
    signup(
      { email, password, firstName, lastName, phoneNumber },
      {
        onSuccess(data) {
          dispatch(setVerifyEmail(email))
          console.log(data)

          // dispatch(loginUser())
        },
      }
    );
  }

  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 mx-0 font-inter">
      <div className="bg-gradient-to-r from-[#0080CF00] to-[#0080CF82] lg:flex justify-center items-center hidden">
        <img src="/img/signup.png" alt="" className="h-full w-full" />
      </div>
      <div className="md:w-[580px] w-full h-full md:p-0 p-5 flex justify-center items-center mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className="mb-5" />
        </NavLink>
          <div>
            <h2 className="text-[40px] font-bold tracking-[-2px] mb-2">
              Sign up
            </h2>
            <p className="text-grey-800 text-lg font-normal mb-8">
              Fill in your details to create an account
            </p>

            <div className="flex flex-col gap-4">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
                {...register("firstName", {
                  required: "firstName is required",
                })}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors?.lastName?.message}
                {...register("lastName", { required: "lastName is required" })}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                type="email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors?.email?.message}
                {...register("email", { required: "Email is required" })}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />

              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                error={!!errors.phoneNumber}
                helperText={errors?.phoneNumber?.message}
                {...register("phoneNumber", {
                  required: "phoneNumber is required",
                })}
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
              />

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
                  type={showPasswordConfirm ? "text" : "password"}
                  helperText={errors?.passwordConfirm?.message}
                  error={!!errors.passwordConfirm}
                  {...register("passwordConfirm", {
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
                        onClick={handleClickShowPasswordConfirm}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPasswordConfirm ? (
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
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id="checkbox"
                  className="w-5 h-5"
                />
                <label
                  htmlFor="checkbox"
                  className="text-[#232323] font-normal"
                >
                  I agree to{" "}
                  <span className="text-bluePrimary underline">
                    Terms and Conditions
                  </span>
                </label>
              </div>
              <Button type="submit">Sign up</Button>
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
      </div>
    </section>
  );
}

export default SignupForm;
