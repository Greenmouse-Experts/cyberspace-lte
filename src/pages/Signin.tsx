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

function Signin() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show)

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
        <div className="md:w-[580px] w-full md:p-0 p-5 flex justify-center items-center mx-auto">
          <form onSubmit={handleSubmit}>
            <img src="/logo.svg" alt="logo" className="mb-10" />
            <div>
              <h2 className="text-[40px] font-bold tracking-[-2px] mb-2">
                Sign in
              </h2>
              <p className="text-grey-800 text-lg font-normal mb-8">
                Please login to continue to your account.
              </p>

              <div className="flex flex-col gap-4">
                <TextField
                  id="outlined-basic"
                  label="Email"
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

                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id="check"
                    className="w-5 h-5"
                  />
                  <label htmlFor="check">Keep me logged in</label>
                </div>
                <Button>Sign in</Button>
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
                Need an account?{" "}
                <span className="text-bluePrimary underline font-semibold pb-1">
                  <NavLink to="/signup">Create one</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
        <div className="bg-[#F5FBFE] lg:flex justify-center items-center hidden">
          <img src="/img/signin.png" alt="" />
        </div>
      </section>
    </main>
  );
}

export default Signin;
