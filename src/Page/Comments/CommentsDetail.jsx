import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import { getComment } from "../../Services/comments.service";

const CommentsDetail = () => {
  const { id } = useParams();
  const [comments, setComments] = useState(null);

  useEffect(() => {
    getComment(id).then((res) => {
      setComments(res);
    });
  }, [id]);
  return (
    <div>
      {comments && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="body2" gutterBottom sx={{ fontSize: 12 }}>
              {"Post ID: " + comments.postId}
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ fontSize: 12 }}>
              {"ID: " + comments.id}
            </Typography>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 20 }}
            >
              {comments.name}
            </Typography>

            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 13 }}
            >
              {"Email : " + comments.email}
            </Typography>

            <Typography variant="body2">{comments.body}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CommentsDetail;
