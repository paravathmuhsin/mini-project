import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getPosts } from "../../services/post.service";
import { useAppContext } from "../../componets/AppContext/AppContext";

const List = () => {
  const [posts, setPosts] = useState([]);
  const { setPageTitle } = useAppContext();
  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  useEffect(() => {
    setPageTitle("Post");
  }, []);
  return (
    <div>
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
