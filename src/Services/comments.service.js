import axios from "../Utils/axios";

export const getComments = () => axios.get("comments").then((res) => res.data);
