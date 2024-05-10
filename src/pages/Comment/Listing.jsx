import { useEffect, useReducer } from "react";
import { useAppContext } from "../../components/AppContext/AppContext";
import Title from "../../components/Title/Title";
import { Link } from 'react-router-dom';
import { getComments } from "../../models/comment.model";


const reducer = (state,action) =>{
  if (action.type === 'SET_COMMENTS')
    return action.payload;
}


const Listing = () => {
  const { setAppTitle } = useAppContext();
  const [comments, dispatch] = useReducer(reducer, []);
  useEffect(() => {
    setAppTitle("Comment Listing");
  }, [setAppTitle]);

  useEffect(() => {
    getComments().then((res)=> {
      dispatch({type: "SET_COMMENTS", payload: res})
    });
  }, []);
  return (
    <>
    <Title>Comment Listing</Title>
    {comments.map((item) => (
          <Link key={item.id} to={"/comment/" + item.id}>
            <h3>{item.name}</h3>
          </Link>
    ))}
    </>
  );
      

};

export default Listing;
