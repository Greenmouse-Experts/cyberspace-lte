import { TextField } from "@mui/material";
import Button from "../components/Button";
import { FormEvent, useState } from "react";
import { useAppSelector } from "../state/hooks";
import { getVerifyEmail } from "../state/user/userSlice";
import { useVerifyUser } from "../features/auth/useVerifyUser";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

function VerifyAccount() {
  const { verify, isLoading } = useVerifyUser();

  const userEmail = useAppSelector(getVerifyEmail);

  const [token, settoken] = useState("");

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    verify(
      { email: userEmail, token },
      {
        onSuccess() {
          toast.success("Verification Successful");
        },
      }
    );
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="md:w-[580px] w-full h-full md:p-0 p-5 flex justify-center items-center mx-auto flex-col gap-8"
      >
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className="mb-5" />
        </NavLink>
        <h3>Enter Verification Code</h3>
        <div className="w-full">
          <TextField
            id="outlined-basic"
            label="Verification Code"
            type="text"
            value={token}
            variant="outlined"
            style={{ width: "100%", height: 60, borderRadius: "10px" }}
            onChange={(e) => settoken(e.target.value)}
          />
        </div>
        <Button disabled={token === "" || isLoading}>Verify</Button>
      </form>
    </section>
  );
}

export default VerifyAccount;
