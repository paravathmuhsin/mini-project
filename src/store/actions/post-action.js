import { getPosts } from "../../services/post-service";
import { GET_POSTS } from "../types/post-types";

export const getPostsAction = () => (dispatch, getState) => {
  getPosts().then((res) => {
    dispatch({ type: GET_POSTS, payload: res });
  });
};
