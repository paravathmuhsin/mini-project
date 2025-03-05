import axios from "../utils/axios";

export const getPosts = () => axios.get("posts").then((res) => res.data);

export const getPost = (id) => axios.get(`posts/${id}`).then((res) => res.data);

export const getComments = () => axios.get("comments").then((res) => res.data);

export const getComment = (id) =>
  axios.get(`comments/${id}`).then((res) => res.data);

export const getUser = (id) =>
  axios.get(`users/${id}`).then((res3) => res3.data);

