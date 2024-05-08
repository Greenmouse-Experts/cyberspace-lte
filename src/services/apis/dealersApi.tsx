import axios from "axios";
import * as ENDPOINT from "../constant";

export const getDealers = async () => {
    return axios
      .get(`${ENDPOINT.GET_DEALERS}`)
      .then((response) => response.data);
  };