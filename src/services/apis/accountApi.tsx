import axios from "axios";

export const updateProfile = async (payload:unknown) => {
    return axios.post(`/profile-update`, payload).then((response) => response.data);
  };

  export const updatePassword = async (payload:unknown) => {
    return axios.post(`/profile-update-password`, payload).then((response) => response.data);
  };
  
  