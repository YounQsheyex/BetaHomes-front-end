import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://beta-house-backend-ywp5.onrender.com/api",
});
