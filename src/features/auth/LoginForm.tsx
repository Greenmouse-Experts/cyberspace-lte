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
import React, { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { NavLink  } from "react-router-dom";
import Button from "../../components/Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../components/SpinnerMini";
import {  saveUser, setIsLoggedIn, setToken } from "../../state/user/userSlice";
import { useDispatch } from "react-redux";
// import { useAppSelector } from "../../state/hooks";

interface FormData extends FieldValues {
  email: string;
  password: string;
}



function LoginForm() {

  

  // const navigate = useNavigate();
  // const verifyUser = useAppSelector(isLoggedIn)
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
  const dispatch  = useDispatch()

  const onSubmit:SubmitHandler<FieldValues> = ({password, email}) => {
    console.log(email, password)
    login(
      { email, password },
      {
        onSuccess(data) {
          dispatch(saveUser(data.data))
          dispatch(setToken(data.token))
          localStorage.setItem("token", data.token);
          dispatch(setIsLoggedIn())
          sessionStorage.setItem('lte_token', data.token)
          // dispatch(loginUser())
        },
      }
    );
  }

  // useEffect(() => {
  //   if (verifyUser) {
  //     navigate("/", {replace:true});
  //   }
  // }, [verifyUser, navigate]);

  return (
    <section className="flex items-center h-full  mx-0 font-inter lg:py-20">
   
        <form onSubmit={handleSubmit(onSubmit)} className="md:w-[35rem] bg-white dark:bg-darkMood w-full px-5 py-10 flex flex-col justify-center items-center mx-auto h-auto ">
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className="mb-10" />
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
              <FormControl
                sx={{ width: "100%", height: 60, borderRadius: "10px" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  style={{ width: "100%", height: 60, borderRadius: "10px", }}
                  id="outlined-adornment-password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                   // eslint-disable-next-line @typescript-eslint/no-unused-vars       
                   error={!!errors.password}
                   helperText={errors.password ? <>{errors.password.message}</> : ""}
                  // value={values.password}
                  type={showPassword ? "text" : "password"}
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
              <span className="text-bluePrimary underline font-semibold pb-1">
                <NavLink to="/signup">Create one</NavLink>
              </span>
            </p>
          </div>
        </form>
    
    </section>
  );
}

export default LoginForm;
