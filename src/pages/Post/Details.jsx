import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../models/post.model";
import Title from "../../components/Title/Title";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton } from "@mui/material";

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
      ) : (
        <>
          <Skeleton variant="text" height={40} sx={{ fontSize: "1rem" }} />
          <br />
          <Skeleton variant="rectangular" height={60} />
        </>
      )}
    </>
  );
};

export default Details;
