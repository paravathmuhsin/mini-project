import { getPosts } from "../../services/post.service";
import { GET_POSTS } from "../types/post.type";

const getPostsAction = (posts) => ({ type: GET_POSTS, payload: posts });

export const fetchPostAction = () => (dispatch, getState) => {
  getPosts().then((res) => {
    dispatch(getPostsAction(res));
  });
};
