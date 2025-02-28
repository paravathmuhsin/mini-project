import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getPosts } from "../../services/post.service";

const List = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);
  return (
    <div>
      List
      {posts.map((item, index) => (
        <div key={item.id}>
          <h3>
            <Link to={`/posts/${item.id}`}>{`${index + 1}: ${
              item.title
            }`}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default List;
