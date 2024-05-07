import { useEffect, useReducer } from "react";
import { useAppContext } from "../../components/AppContext/AppContext";
import Title from "../../components/Title/Title";
import { getPosts } from "../../models/post.model";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  if (action.type === "SET_POSTS") {
    return action.payload;
  }
  return state;
};

const Listing = () => {
  const { setAppTitle } = useAppContext();
  const [posts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    setAppTitle("Post Listing");
  }, [setAppTitle]);

  useEffect(() => {
    getPosts().then((res) => {
      dispatch({ type: "SET_POSTS", payload: res });
    });
  }, []);
  return (
    <>
      <Title>Post Listing</Title>
      {posts.map((item) => (
        <Link key={item.id} to={"/post/" + item.id}>
          <h3>{item.title}</h3>
        </Link>
      ))}
    </>
  );
};

export default Listing;
