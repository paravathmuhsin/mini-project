import axiosInstance from "../utils/axios";

export const getPhotos = () =>
  axiosInstance.get("photos").then((result) => result.data);
