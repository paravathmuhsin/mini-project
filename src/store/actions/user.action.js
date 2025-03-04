import { getUsers } from "../../services/user.service";
import { GET_USERS } from "../types/user.type";

const getUserAction = (posts) => ({ type: GET_USERS, payload: posts });

export const fetchUserAction = () => (dispatch, getState) => {
    getUsers().then((res) => {
    dispatch(getUserAction(res));
  });
};
