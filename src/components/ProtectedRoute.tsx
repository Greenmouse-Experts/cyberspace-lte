import  { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useAppSelector} from "../state/hooks"
import { isLoggedIn } from "../state/user/userSlice";

interface ProtectRouteProps{
  children: ReactNode
}

function ProtectedRoute({ children }:ProtectRouteProps) {
  const navigate = useNavigate();
  const verifyUser = useAppSelector(isLoggedIn)

  
  useEffect(() => {
    if (!verifyUser) {
      navigate("/signin");
    }
  }, [verifyUser, navigate]);


  if (verifyUser) return children;
}

export default ProtectedRoute;
