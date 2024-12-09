import { useEffect, useState } from "react";
import { getUsers } from "../../Services/post.service";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    }, []);
  });
  return (
    <div>
      {users.map((item) => (
        <Card key={item.id} sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {item.name}
            </Typography>
            <Typography variant="body2">{item.body}</Typography>
          </CardContent>
          <CardActions>
            <Link to={"/users/" + item.id}>View user details</Link>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default User;
