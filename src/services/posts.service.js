import axios from "../utility/axios";

export const getPosts = () => axios.get("posts").then((res) => res.data);

export const getPostDetails = (id) =>
  axios.get("posts/" + id).then((res) => res.data);
