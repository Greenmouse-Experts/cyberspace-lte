import axios from "axios";

export const getAbout = async () => {
    const response = await axios.get("/abouts"); 
    return response.data.data;
  };
  
  export const getServices = async () => {
    const response = await axios.get("/services"); 
    return response.data.data;
  };
  
  export const getTerms = async () => {
    const response = await axios.get("/terms/conditions"); 
    return response.data.data;
  };
  
  export const getPolicy = async () => {
    const response = await axios.get("/privacy/policies"); 
    return response.data.data;
  };

  export const getContact = async () => {
    const response = await axios.get("/offices"); 
    return response.data.data;
  };
  
  export const getBreadCrumbs = async () => {
    const response = await axios.get("/breadcrumbs"); 
    return response.data.data;
  };
  
 