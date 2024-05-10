import axiosInstance from "../utils/axios";

export const getAlbums = () =>
  axiosInstance.get("albums").then((result) => result.data);

export const getAlbum = (id) =>
  axiosInstance.get("albums/" + id).then((result) => result.data);