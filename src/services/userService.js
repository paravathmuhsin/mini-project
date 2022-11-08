import axiosInstane from "../utility/axios";

export const getUsers = () =>
  axiosInstane.get("/users").then((res) => res.data);
export const getUser = (id) =>
  axiosInstane.get("/users/" + id).then((res) => res.data);
