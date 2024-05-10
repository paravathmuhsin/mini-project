import { useEffect, useReducer } from "react";
import { useAppContext } from "../../components/AppContext/AppContext";
import Title from "../../components/Title/Title";
import { Link } from 'react-router-dom';
import { getUsers } from "../../models/users.model";


const reducer = (state,action) =>{
  if (action.type === 'SET_USERS')
    return action.payload;
}


const UserListing = () => {
  const { setAppTitle } = useAppContext();
  const [comments, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    setAppTitle("User Listing");
  }, [setAppTitle]);

  useEffect(() => {
    getUsers().then((res)=> {
      dispatch({type: "SET_USERS", payload: res})
    });
  }, []);
  return (
    <>
    <Title>User Listing</Title>
    {comments.map((item) => (
          <Link key={item.id} to={"/users/" + item.id}>
            <h3>{item.name}</h3>
          </Link>
    ))}
    </>
  );
      

};
export default UserListing;
