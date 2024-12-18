import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://nhcb0mxj-3000.inc1.devtunnels.ms/",
  headers: {
    "Content-Type": "application/json",
    Accepts: " application/json",
  },
});
