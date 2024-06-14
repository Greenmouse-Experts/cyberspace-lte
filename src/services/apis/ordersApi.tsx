import axios from "axios";
// import * as ENDPOINT from "../constant";

export const getOrders = async () => {
    return axios
      .get(`https://cyberspacelte.greenmouseacademy.com.ng/api/orders`)
      .then((response) => response.data);
  };