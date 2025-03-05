import { GET_COMMENTS } from "../types/comment.type";

const initialValue = {
  list: [],
};

const commentReducer = (state = initialValue, action) => {
  //console.log(state);
  if (action.type === GET_COMMENTS) {
    return { list: action.payload };
  }
  return state;
};
export default commentReducer;

//If the action type is GET_COMMENTS, it returns a new state object where the list key contains the payload from the action.
//If the action type does not match GET_COMMENTS, it simply returns the current state unchanged.