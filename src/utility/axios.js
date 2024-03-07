import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: { Authorization: "sbfiuwhifw8we7yrwey98" },
});
