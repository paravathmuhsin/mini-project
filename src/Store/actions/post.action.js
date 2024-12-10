import { getPosts } from "../../Services/post.service";
import { FETCH_POSTS } from "../types/post.type";

export const fetchPostsAction = () => {
  return (dispatch, getState) => {
    getPosts().then((res) => {
      dispatch({ type: FETCH_POSTS, payload: res });
    });
  };
};
