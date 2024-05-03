// import { AXIOS } from ".";
import { BASE_URL } from "../config/_url";
import { getBearerToken } from "../utils/helpers";
import axios from "axios";


export const AXIOS = axios.create({
  baseURL: BASE_URL
});
// Remove the default header setting (optional, if you only want interceptor injection)
// AXIOS.defaults.headers.common["Authorization"] = getBearerToken();

AXIOS.interceptors.request.use(
  function (config) {
    const token = getBearerToken();
    console.log("Token:", token); // Log for debugging

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`; // Include "Bearer" prefix
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AXIOS.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) { // Handle unauthorized (401) error
      localStorage.clear();
      return (window.location.href = "/signin"); // Redirect to signin page
    }
    return Promise.reject(error);
  }
);