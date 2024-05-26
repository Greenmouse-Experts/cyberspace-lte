// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { FormEvent, useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useForgotPassword } from "../../features/auth/useForgotPassword";
import {  setVerifyEmail } from "../../state/user/userSlice";
import { NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";

export function ForgotModal({ open, handleOpen }) {
  const { getToken, isLoading } = useForgotPassword();
  const dispatch = useDispatch();
  //const mood = useAppSelector(isDark);

  // const userEmail = useAppSelector(getVerifyEmail);

  const [email, setemail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getToken(
      { email },
      {
        onSuccess() {
          dispatch(setVerifyEmail(email));
        },
      }
    );
  };

  return (
    <>
      <Dialog open={open} size="sm" handler={handleOpen}>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full md:p-0 p-5 flex justify-center items-center mx-auto flex-col"
        >
          <DialogBody className=" dark:bg-darkMood w-full h-full flex flex-col items-center justify-center gap-4">
            <NavLink to="/">
              <img src="/logo.svg" alt="logo" className="mb-5" />
            </NavLink>
            <h4 className="">Enter your email</h4>
            <div className=" w-full mt-5">
              <TextField
                id="outlined-basic"
                label="Email Address"
                type="email"
                value={email}
                variant="outlined"
                style={{ width: "100%", height: 60, borderRadius: "10px" }}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
          </DialogBody>
          <DialogFooter className=" dark:bg-darkMood w-full">
            <Button
              color="red"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              className=" bg-bluePrimary text-white disabled:!cursor-not-allowed"
              disabled={email === "" || isLoading}
              type="submit"
            >
              <span> Get token</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
