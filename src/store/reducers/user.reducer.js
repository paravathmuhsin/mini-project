import { GET_USERS } from "../types/user.type";

const initialValue = {
  list: [],
};

const userReducer = (state = initialValue, action) => {
  if (action.type === GET_USERS) {
    return { list: action.payload };
  }
  return state;
};
export default userReducer;
