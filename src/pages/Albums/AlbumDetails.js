import React, { useEffect, useState } from "react";
import Title from "../../components/Title/Title";
import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { getalbumDetails } from "../../services/albums.services";
import { useAppContext } from "../../components/AppContext/AppContext";
// eslint-disable-next-line no-unused-vars
import { Albums } from "@mui/icons-material";

const AlbumDetails = () => {
  const [album, setalbum] = useState();
  const { id } = useParams();
  const { setTitle } = useAppContext();

  useEffect(() => {
    getalbumDetails(id).then((res) => {
      setalbum(res);
    });
  }, [id]);

  useEffect(() => {
    setTitle("AlbumDetails");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Title>Album Details</Title>
      <Card sx={{ minWidth: 275, mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {album ? album.title : <Skeleton />}
          </Typography>
          <Typography variant="body2">
            {album ? (
              album.body
            ) : (
              <>
                <Skeleton />
                <Skeleton />
              </>
              )}
              </Typography>
            </CardContent>
          </Card>
        </>
      );
    };
    
    export default AlbumDetails;
    