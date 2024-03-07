import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/posts.service";
import { useAppContext } from "../../components/AppContext/AppContext";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { setTitle } = useAppContext();

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);

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
