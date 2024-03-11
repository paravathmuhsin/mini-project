import React, { useEffect } from "react";
import Title from "../../components/Title/Title";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useAppContext } from "../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/slices/posts.slice";

const Home = () => {
  const { posts } = useSelector((state) => state.post);
  const { setTitle } = useAppContext();
  const dispatch = useDispatch();

  useEffect(() => {
    // getPosts().then((res) => {
    //   setPosts(res);
    // });
    if (!posts.length) {
      dispatch(fetchPosts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [posts]);

  useEffect(() => {
    setTitle("Posts");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Posts</Title>
      {posts.map((item) => (
        <Card key={item.id} sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2">{item.body}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={"/post/" + item.id}> Learn More</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Home;
