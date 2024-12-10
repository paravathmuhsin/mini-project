import axios from "../Utils/map";

export const getLocation = (location) =>
  axios.get(location.lat + "," + location.lng).then((res) => res.data);

//export const getUser = (id) => axios.get("users/" + id).then((res) => res.data);
