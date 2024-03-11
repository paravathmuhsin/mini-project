import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import {
  Button,
  Card,
  CardActions,
  CardContent,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";
import { getalbums } from "../../services/albums.services";
import { useAppContext } from "../../components/AppContext/AppContext";
import { useDispatch } from "react-redux";

const Albums = () => {
  const [Albums, setalbums] = useState([]);
  const { setTitle } = useAppContext();
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();

  useEffect(() => {
    getalbums().then((res) => {
      setalbums(res);
    });
  }, []);
  useEffect(() => {
    setTitle("Albums");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Albums</Title>
      {Albums.map((item) => (
        <Card key={item.id} sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              <Link to={"/albums/" + item.id}> Learn More</Link>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Albums;
