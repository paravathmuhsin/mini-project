import { GET_Albums } from "../types/album.types";

const initialValues = {
    Albums: []
}
const albumReducer = (state = initialValues, action) => {
    if (action.type === GET_Albums) {
      return {
        Albums: action.payload,
      };
    }
    return state;
  };
  export default albumReducer;