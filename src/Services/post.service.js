import axios from "../Utils/axios";

export const getPosts = () => axios.get("posts").then((res) => res.data);
export const getPost = (id) => axios.get("posts/" + id).then((res) => res.data);

export const getUsers = () => axios.get("users").then((res) => res.data);
export const getUser = (id) => axios.get("users/" + id).then((res) => res.data);
