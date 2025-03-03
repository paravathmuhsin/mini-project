import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPost } from "../../services/post.service";
import { useAppContext } from "../../componets/AppContext/AppContext";

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  const { setPageTitle } = useAppContext();

  useEffect(() => {
    getPost(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  useEffect(() => {
    setPageTitle("Post Details");
  }, []);
  return (
    <div>
      Details
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default Details;
