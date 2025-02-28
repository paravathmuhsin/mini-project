import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPost } from "../../services/post.service";

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    getPost(id).then((res) => {
      setPost(res);
    });
  }, [id]);
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
