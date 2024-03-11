import axios from "../utility/axios";

export const getalbums = () => axios.get("Albums").then((res) => res.data);

export const getalbumDetails = (id) =>
  axios.get("Albums/" + id).then((res) => res.data);
