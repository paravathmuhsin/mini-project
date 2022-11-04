import axios from "axios";

const axiosInstane = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { Authorization: localStorage.getItem("token") },
});
export default axiosInstane;
