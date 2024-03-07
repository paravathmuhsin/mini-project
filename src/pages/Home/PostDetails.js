import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getPostDetails } from "../../services/posts.service";
import { useAppContext } from "../../components/AppContext/AppContext";

const PostDetails = () => {
  const [post, setPost] = useState();
  const { id } = useParams();
  const { setTitle } = useAppContext();

  useEffect(() => {
    getPostDetails(id).then((res) => {
      setPost(res);
    });
  }, [id]);

  useEffect(() => {
    setTitle("Post Details");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Post Details</Title>
      <Card sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {post ? post.title : <Skeleton />}
          </Typography>
          <Typography variant="body2">
            {post ? (
              post.body
            ) : (
              <>
                <Skeleton />
                <Skeleton />
              </>
            )}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PostDetails;
