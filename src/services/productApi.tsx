// import { AXIOS } from "."
import axios from "axios";
import { useAppSelector } from "../state/hooks";
import { getToken } from "../state/user/userSlice";


export const getProducts = async () => {
  const token = useAppSelector(getToken)
  const headers = {
    Authorization: token
  };
    return axios.get(`/product`,{headers}).then((response) => response.data);
  };