import { useEffect } from "react";
import { Link } from "react-router";
// import { getPosts } from "../../services/post.service";
import { useAppContext } from "../../componets/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostAction } from "../../store/actions/post.action";

const List = () => {
  // const [posts, setPosts] = useState([]);
  const { setPageTitle, setAppBreadcrumbs } = useAppContext();
  const { list: posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   getPosts().then((res) => {
  //     setPosts(res);
  //   });
  // }, []);
  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPostAction());
    }
  }, [posts]);

  useEffect(() => {
    setPageTitle("Post");
    setAppBreadcrumbs([
      {
        label: "Home",
      },
    ]);
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
