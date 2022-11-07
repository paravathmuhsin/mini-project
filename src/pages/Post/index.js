import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/post-service";
import { useAppContext } from "../../utility/context";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const { updateTitle } = useAppContext();
  useEffect(() => {
    updateTitle("Post");
    getPosts().then((res) => {
      setPosts(res);
    });
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
