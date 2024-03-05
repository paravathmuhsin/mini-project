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
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then((res) => {
        setPosts(res);
      });
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
              <Link to="/"> Learn More</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Home;
