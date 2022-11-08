import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostsAction } from "../../store/actions/post-action";
// import { getPosts } from "../../services/post-service";
import { useAppContext } from "../../utility/context";

const Post = () => {
  // const [posts, setPosts] = useState([]);
  const { updateTitle } = useAppContext();
  const { posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    updateTitle("Post");
    if (!posts.length) {
      dispatch(getPostsAction());
    }
    // getPosts().then((res) => {
    //   setPosts(res);
    // });
  }, []);
  return (
    <div>
      <h2> Post</h2>
      {posts.map((item) => (
        <div key={item.id}>
          <Link to={"/post/" + item.id}>
            <h4>{item.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Post;
