import { getPhotos } from "../../models/photos.model";
import { SET_PHOTOS } from "../types/photos.type";

const setPhotos = (payload) => ({
  type: SET_PHOTOS,
  payload,
});

export const fetchPhotosAsync = () => {
  return (dispatch) => {
    getPhotos().then((res) => {
      dispatch(setPhotos(res.splice(0, 20)));
    });
  };
};
