import axiosInstance from "../utils/axios";

export const getUsers = () =>
  axiosInstance.get("users").then((res) => res.data);

export const getUser = (id) =>
  axiosInstance.get("users/" + id).then((res) => res.data);