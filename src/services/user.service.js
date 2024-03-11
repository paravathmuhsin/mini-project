import axios from "../utility/axios";

export const getUsers = () => axios.get("users").then((res) => res.data);

export const getUserDetails = (id) =>
  axios.get("users/" + id).then((res) => res.data);
