import { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getComments } from "../../Services/comments.service";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments().then((res) => {
      setComments(res);
    });
  }, []);
  return (
    <div>
      {comments.map((item) => (
        <Card key={item.id} sx={{ minWidth: 800, mb: 2 }}>
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
      ))}
    </div>
  );
};

export default Comments;