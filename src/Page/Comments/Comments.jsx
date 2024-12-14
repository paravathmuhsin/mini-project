import { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getComments } from "../../Services/comments.service";
import useAppContext from "../../Components/AppContext/useAppContext";
import { COMMENTS, HOME } from "../../Utils/menuConstants";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { setContext } = useAppContext();

  useEffect(() => {
    setContext({
      appTitle: "Comments",
      breadcrumbs: [{ label: HOME, link: "/" }, { label: COMMENTS }],
      activeMenu: COMMENTS,
    });
  }, []);
  useEffect(() => {
    getComments().then((res) => {
      setComments(res);
    });
  }, []);
  return (
    <div>
      {comments.length ? (comments.map((item) => (
        <Card key={item.id} sx={{ minWidth: 975, mb: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 18 }}
            >
              {item.name}
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 13 }}
            >
              {"Email : " + item.email}
            </Typography>
            <Typography variant="body2">{item.body}</Typography>
          </CardContent>
          <CardActions>
            <Link to={"/comments/" + item.id}>Learn More</Link>
          </CardActions>
        </Card> 
      ))
    ) : (
      <>
          <Card sx={{ minWidth: 975, mb: 2 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  width: "500px",
                
                }}
              >
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "300px", mb: 1 }}/>
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "900px" }} />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "800px" }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton sx={{ width: "250px", mt: 1 }} />
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 975, mb: 2 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  width: "500px",
                
                }}
              >
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "300px", mb: 1 }}/>
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "900px" }} />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "800px" }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton sx={{ width: "250px", mt: 1 }} />
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 975, mb: 2 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  width: "500px",
                
                }}
              >
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "300px", mb: 1 }}/>
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "900px" }} />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "800px" }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton sx={{ width: "250px", mt: 1 }} />
            </CardActions>
          </Card>
          <Card sx={{ minWidth: 975, mb: 2 }}>
            <CardContent>
              <Typography
                gutterBottom
                sx={{
                  color: "text.secondary",
                  fontSize: 14,
                  width: "500px",
                
                }}
              >
                <Skeleton />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "300px", mb: 1 }}/>
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "900px" }} />
              </Typography>
              <Typography variant="body2">
                <Skeleton sx={{ width: "800px" }} />
              </Typography>
            </CardContent>
            <CardActions>
              <Skeleton sx={{ width: "250px", mt: 1 }} />
            </CardActions>
          </Card>
        </>
      )}
    </div>
  );
};

export default Comments;
