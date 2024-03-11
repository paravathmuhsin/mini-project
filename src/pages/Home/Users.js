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
import { useDispatch } from "react-redux";
import { getUsers } from "../../services/posts.service";

const Users = () => {
  const { setTitle } = useAppContext();
  const [usersData, setUsersData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUsers()
      .then((res) => {
        setUsersData(res);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, []);

  useEffect(() => {
    setTitle("Users");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Title>Users</Title>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {usersData.map((item) => (
          <Card key={item.id} sx={{ width: "300px" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2">{item.email}</Typography>
              <Typography variant="h6" component="div">
                Address:
              </Typography>
              <Typography variant="body2">
                {item.address.street}, {item.address.suite},{" "}
                {item.address.city}, {item.address.zipcode}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to={`/user/${item.id}`}>
                More Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Users;
