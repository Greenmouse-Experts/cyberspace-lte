import { AXIOS } from ".";
import { BASE_URL } from "../config/_url";
import { getBearerToken } from "../utils/helpers";

AXIOS.defaults.baseURL = BASE_URL;
AXIOS.defaults.headers.common["Authorization"] = getBearerToken();
AXIOS.interceptors.request.use(
  function(config) {
    const token = getBearerToken(); 
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
AXIOS.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 40) {
        localStorage.clear()
      return (window.location.href = "/login");
    }
    return Promise.reject(error);
  }
);
