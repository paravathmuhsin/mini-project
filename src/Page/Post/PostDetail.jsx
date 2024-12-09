import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { getPost } from "../../Services/post.service";
import useAppContext from "../../Components/AppContext/useAppContext";
import { HOME } from "../../Utils/menuConstants";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { setContext } = useAppContext();

  useEffect(() => {
    setContext({
      appTitle: "Post Details",
      breadcrumbs: [{ label: HOME, link: "/" }, { label: "Post Details" }],
      activeMenu: HOME,
    });
  }, []);

  useEffect(() => {
    getPost(id).then((res) => {
      setPost(res);
    });
  }, [id]);
  return (
    <div>
      {post && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {post.title}
            </Typography>
            <Typography variant="body2">{post.body}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PostDetail;
