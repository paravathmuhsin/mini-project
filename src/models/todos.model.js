import axiosInstance from "../utils/axios";

export const getTodos = () =>
  axiosInstance.get("todos").then((res) => res.data);

export const getTodo = (id) =>
  axiosInstance.get("todos/" + id).then((res) => res.data);
