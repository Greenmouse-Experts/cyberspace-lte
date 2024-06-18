import axios from "axios";
// import * as ENDPOINT from "../constant";

export const getOrders = async () => {
    return axios
      .get(`/orders`)
      .then((response) => response.data);
  };
  export const getOrder = async (id:number | string) => {
    return axios
      .get(`/orders/${id}`)
      .then((response) => response.data);
  };
  export const getPlans = async () => {
    return axios
      .get(`/plan/orders`)
      .then((response) => response.data);
  };