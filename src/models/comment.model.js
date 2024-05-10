import axiosInstance from "../utils/axios";

export const getComments = () => 
    axiosInstance.get("comments").then((res) => res.data);

export const getComment = (id) =>
    axiosInstance.get("comments/" + id).then((res) => res.data);
