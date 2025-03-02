import axios from "../utils/axios";

export const getPosts = () => axios.get("posts").then((res) => res.data);

export const getPost = (id) => axios.get(`posts/${id}`).then((res) => res.data);

export const gettodos = () => axios.get("todos").then((res) => res.data);

export const gettodo = (id) => axios.get(`todos/${id}`).then((res) => res.data);

export const getuser = (id) => axios.get(`users/${id}`).then((res) => res.data);
