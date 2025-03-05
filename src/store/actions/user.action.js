import { getUsers } from "../../services/user.service";
import { GET_USERS } from "../types/user.type";

const getUserAction = (users) => ({ type: GET_USERS, payload: users });

export const fetchUserAction = () => (dispatch, getState) => {
  getUsers().then((res) => {
    dispatch(getUserAction(res));
  });
};
