import axios from "axios"

export const verifyUser = async(payload:unknown) => {
    return  axios.post(`/email-confirm`, payload).then((response) => response.data)
  } 
  