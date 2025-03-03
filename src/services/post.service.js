import axios from "../utils/axios";

export const getPosts = () => axios.get("posts").then((res) => res.data);

export const getPost = (id) => axios.get(`posts/${id}`).then((res) => res.data);


export const getPhotos = () => axios.get("photos").then((res) => res.data);
export const getPhoto = (id) => axios.get(`photos/${id}`).then((res) => res.data);