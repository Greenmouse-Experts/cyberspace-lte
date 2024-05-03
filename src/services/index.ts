
import axios from "axios";
import { BASE_URL } from "../config/_url";

export const AXIOS = axios.create({
  baseURL: BASE_URL,
});
