import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../models/post.model";
import Title from "../../components/Title/Title";
import { useAppContext } from "../../components/AppContext/AppContext";

const Details = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { setAppTitle } = useAppContext();

  useEffect(() => {
    setAppTitle("Post Details");
  }, [setAppTitle]);

  useEffect(() => {
    getPost(id).then((res) => {
      setPost(res);
    });
  }, [id]);
  return (
    <>
      <Title>Post Details</Title>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : null}
    </>
  );
};

export default Details;
