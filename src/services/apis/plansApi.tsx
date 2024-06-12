import axios from "axios";
import * as ENDPOINT from "../constant";

export const getPlans = async () => {
  return axios
    .get(`${ENDPOINT.GET_ALL_PLANS}`)
    .then((response) => response.data);
};
