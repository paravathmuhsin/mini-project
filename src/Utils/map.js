import Axios from "axios";
const mapAxios = Axios.create({
  baseURL: "https://www.google.com/maps",
});

export default mapAxios;
