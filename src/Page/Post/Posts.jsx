import { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getPosts } from "../../Services/post.service";
import useAppContext from "../../Components/AppContext/useAppContext";
import { HOME } from "../../Utils/menuConstants";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { setContext } = useAppContext();

  useEffect(() => {
    setContext({
      appTitle: "Posts",
      breadcrumbs: [{ label: HOME }],
      activeMenu: HOME,
    });
  }, []);
  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
    });
  }, []);
  return (
    <div>
      {posts.map((item) => (
        <Card key={item.id} sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {item.title}
            </Typography>
            <Typography variant="body2">{item.body}</Typography>
          </CardContent>
          <CardActions>
            <Link to={"/post/" + item.id}>Learn More</Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
