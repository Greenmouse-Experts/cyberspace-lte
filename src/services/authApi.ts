import { AXIOS } from "."
import { SignupProps, VerifyProps } from "../features/auth/auth.types"

export const signin = async(payload:SignupProps) => {
    return  AXIOS.post(`/login`, payload).then((response) => response.data)
  } 

export const signup = async(payload:SignupProps) => {
    return  AXIOS.post(`/register`, payload).then((response) => response.data)
 } 

 export const verifyUser = async(payload:VerifyProps) => {
  return  AXIOS.post(`/email-confirm`, payload).then((response) => response.data)
} 



//  export const changePassword = async(payload) => {
//   return  AXIOS.post(`/auth/update-password`, payload).then((response) => response.data)
// } 