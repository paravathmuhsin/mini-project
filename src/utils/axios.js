import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { Authorization: localStorage.getItem("authorization") },
});
export default axiosInstance;
