import { useEffect, useState } from "react";
import { getUser } from "../../Services/post.service";
import { getLocation } from "../../Services/map.service";
import { useParams } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  ListItem,
  Typography,
} from "@mui/material";
import useAppContext from "../../Components/AppContext/useAppContext";
import { USERS } from "../../Utils/menuConstants";
import profile from "../../../public/profile_icon.jpg";
import Grid from "@mui/material/Grid";

const UserDetails = () => {
  const { setContext } = useAppContext();
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    setContext({
      appTitle: "Detailed View",
      breadcrumbs: [
        { label: USERS, link: "/users" },
        { label: "User Details" },
      ],
      activeMenu: USERS,
    });
  });

  useEffect(() => {
    getUser(id).then((res) => {
      setUser(res);
      setLocation(res.address);
    });
  }, [id]);
  const openMap = () => {
    getLocation(location);
  };
  // let location = {
  //   lat: user.address.geo.lat,
  //   lng: user.address.geo.lng,
  // };
  // console.log("location", location);
  return (
    <div>
      {/* {user && (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              {user.name}
            </Typography>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={profile}
            />
            <Typography variant="body2">{user.email}</Typography>
          </CardContent>
        </Card>
      )} */}

      {/* {user && (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={profile}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {user.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Complete Address:
            </Typography>
          </CardContent>
        </Card>
      )} */}

      {user && (
        <Grid container spacing={4} padding={10} wrap="1">
          <Grid size={{ xs: 6, md: 8 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={profile}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {user.name}
                </Typography>
                {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Complete Address:
                </Typography> */}
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 8 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography variant="h6">Full Name : {user.name}</Typography>
                <Typography variant="h6">Username : {user.username}</Typography>
                <Typography variant="h6">Email : {user.email}</Typography>
                <Typography variant="h6">Address :</Typography>
              </CardContent>
            </Card>
            <Card>
              <Typography variant="h6">
                Current Location : <Button onClick={openMap}>Click here</Button>
              </Typography>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default UserDetails;
