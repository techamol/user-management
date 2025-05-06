import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = "Bearer fake-token";
  return config;
});

export default axiosInstance;
