import axios from "axios";

export const payment = async (payload: unknown) => {
  return axios
    .post("https://payment-api.staging.cyberpay.ng/api/v1/payments", payload)
    .then((response) => response.data);
};

export const getPaymentStatus = async (transactionReference: string) => {
  return axios
    .get(
      `https://payment-api.staging.cyberpay.ng/api/v1/payments/${transactionReference}`
    )
    .then((response) => response.data);
};

export const confirmPayment = async (payload:unknown) => {
  return axios.post(`/orders/verify/payment`, payload).then((response) => response.data);
};

export const confirmPlanPayment = async (payload:unknown) => {
  return axios.post(`/plan/orders/verify/payment`, payload).then((response) => response.data);
};

