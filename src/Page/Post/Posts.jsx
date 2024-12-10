import { useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useAppContext from "../../Components/AppContext/useAppContext";
import { HOME } from "../../Utils/menuConstants";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../../Store/actions/post.action";

const Posts = () => {
  const dispatch = useDispatch();
  const { list: posts } = useSelector((state) => state.post);
  const { setContext } = useAppContext();

  useEffect(() => {
    setContext({
      appTitle: "Posts",
      breadcrumbs: [{ label: HOME }],
      activeMenu: HOME,
    });
  }, []);
  useEffect(() => {
    if (!posts.length) {
      dispatch(fetchPostsAction());
    }
    // getPosts().then((res) => {
    //   setPosts(res);
    // });
  }, []);
  return (
    <div style={{ width: "100%" }}>
      {posts.length ? (
        posts.map((item) => (
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
        ))
      ) : (
        <>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  width: "400px",
                  mb: 1,
                }}
              >
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "700px" }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton sx={{ width: "300px", mt: 1 }} />
            </CardActions>
          </Card>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  width: "400px",
                  mb: 1,
                }}
              >
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "700px" }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton sx={{ width: "300px", mt: 1 }} />
            </CardActions>
          </Card>
          <Card sx={{ mb: 2 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  width: "400px",
                  mb: 1,
                }}
              >
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "700px" }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton sx={{ width: "300px", mt: 1 }} />
            </CardActions>
          </Card>
        </>
      )}
    </div>
  );
};

export default Posts;
