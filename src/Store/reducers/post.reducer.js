import { FETCH_POSTS } from "../types/post.type";

const initialValue = {
  list: [],
};
const postReducer = (state = initialValue, action) => {
  if (action.type === FETCH_POSTS) {
    return { list: action.payload };
  }
  return state;
};

export default postReducer;
