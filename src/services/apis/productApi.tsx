import axios from "axios";
import { BASE_URL } from "../constant";
import { getBearerToken, getToken } from "../helpers";
import * as ENDPOINT from "../constant";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Authorization"] = getBearerToken();
axios.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = getBearerToken();
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      sessionStorage.clear();
      // console.log(error)
      return (window.location.href = "/signin");
    }
    return Promise.reject(error);
  }
);

export const getProducts = async () => {
  return axios
    .get(`${ENDPOINT.GET_PRODUCTS}`)
    .then((response) => response.data);
};

export const getProduct = async (id:string) => {
  return axios
    .get(`${ENDPOINT.GET_PRODUCT}/${id}`)
    .then((response) => response.data);
};

export const getCategories = async () => {
  return axios
    .get(`${ENDPOINT.GET_CATEGORIES}`)
    .then((response) => response.data);
};
