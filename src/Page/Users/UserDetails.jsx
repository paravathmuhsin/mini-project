import { useEffect, useState } from "react";
import { getUser } from "../../Services/post.service";
import { useParams } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUser(id).then((res) => {
      setUser(res);
    });
  }, [id]);
  console.log(user);
  return (
    <div>
      {user && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {user.name}
            </Typography>
            <Typography variant="body2">{user.email}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UserDetails;
