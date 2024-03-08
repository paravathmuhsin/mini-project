import { GET_POSTS } from "../types/posts.types";

const initialValues = {
  posts: [],
};
const postsReducer = (state = initialValues, action) => {
  if (action.type === GET_POSTS) {
    return {
      posts: action.payload,
    };
  }
  return state;
};
export default postsReducer;
