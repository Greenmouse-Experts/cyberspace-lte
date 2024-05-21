import axios from "axios"

export const payment = async(payload:unknown) => {
    return  axios.post('https://payment-api.staging.cyberpay.ng/api/v1/payments', payload).then((response) => response.data)
  } 
  