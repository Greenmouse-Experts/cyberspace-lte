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
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
  };
  return (
    <main className="h-full dark:bg-darkMood transition-all">
      <section className="grid lg:grid-cols-2 grid-cols-1 mx-0 font-inter">
        <div className="bg-gradient-to-r from-[#0080CF00] to-[#0080CF82] lg:flex justify-center items-center hidden">
          <img src="/img/signup.png" alt=""  className="h-full w-full"/>
        </div>
        <div className="md:w-[580px] w-full h-full md:p-0 p-5 flex justify-center items-center mx-auto">
          <form onSubmit={handleSubmit}>
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
                  label="Full Name"
                  variant="outlined"
                  style={{ width: "100%", height: 60, borderRadius: "10px" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
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
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                         {showPassword ? (
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
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    style={{ width: "100%", height: 60, borderRadius: "10px" }}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? (
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
                <Button>Sign up</Button>
                <div className="w-full flex justify-center items-center">
                  <span className="bg-grey-200 h-[1px] block w-full"></span>
                  <span className="mx-2 text-grey-700">or</span>
                  <span className="bg-grey-200 h-[1px] inline w-full"></span>
                </div>
                <div className="flex items-center justify-center gap-2 border border-grey-300 w-full py-3 rounded-lg cursor-pointer">
                  <p className="font-semibold text-lg">Sign in with google</p>
                  <img src="/icons/google.svg" alt="google" />
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
    </main>
  );
}

export default Signup;
