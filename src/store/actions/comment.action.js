import { getComments } from "../../services/post.service";
//import axios from "../../utils/axios";
import { GET_COMMENTS } from "../types/comment.type";

const getCommentsAction = (comments) => ({ type: GET_COMMENTS, payload: comments });

export const fetchCommentAction = () => (dispatch, getState) => {
    //axios.get("comments").then((res) => {
    getComments().then((res) => {
    dispatch(getCommentsAction(res));
  }).catch((error) => {
    console.error("Error fetching comments:", error);
  });
};
