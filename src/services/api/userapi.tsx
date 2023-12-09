import axios from "axios";


export const userApi = axios.create({
    baseURL: "http://localhost:3000/api/v1/"
})
    
export const setAuthToken = (token: string | null): void => {
    if (token) {
      userApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete userApi.defaults.headers.common['Authorization'];
    }
  };