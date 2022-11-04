import axiosInstane from "../utility/axios";

export const getPosts = () =>
  axiosInstane.get("/posts").then((res) => res.data);

export const getPost = (id) =>
  axiosInstane.get("/posts/" + id).then((res) => res.data);
