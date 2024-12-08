import axios from "../Utils/axios";

export const getComments = (id) => axios.get("comments/" + id).then((res) => res.data);