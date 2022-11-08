import { GET_POSTS } from "../types/post-types";

const initialState = {
  posts: [],
};
const postReducer = (state = initialState, action) => {
  if (action.type === GET_POSTS) {
    return { posts: action.payload };
  } else {
    return state;
  }
};

export default postReducer;
