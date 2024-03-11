import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { Card, CardContent, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../services/user.service";

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUserDetails(id)
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  }, [id]);

  return (
    <>
      <Title>User Details</Title>
      {user && (
        <Card sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2">{user.email}</Typography>
            {user.address && (
              <Typography variant="h6" component="div">
                {"Address: "}
                {user.address.street}
                {","}
                {user.address.suite}
                {","}
                {user.address.city}
                {","}
                {user.address.zipcode}
              </Typography>
            )}
            <Typography variant="h6" component="div">
              {"Phone: "}
              {user.phone}
            </Typography>
            <Typography variant="h6" component="div">
              {"Website: "}
              {user.website}
            </Typography>
            <Typography variant="h6" component="div">
              {"Company: "}
              {user.company.name}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default UserDetails;
