import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbum } from "../../models/album.model";
import Title from "../../components/Title/Title";
import { useAppContext } from "../../components/AppContext/AppContext";
import { Skeleton } from "@mui/material";

const Albumdetails = () => {
  const { id } = useParams();
  const [album, setalbum] = useState(null);
  const { setAppTitle } = useAppContext();

  useEffect(() => {
    setAppTitle("Album Details");
  }, [setAppTitle]);

  useEffect(() => {
    getAlbum(id).then((result) => {
      setalbum(result);
    });
  }, [id]);
  return (
    <>
      <Title>Album Details</Title>
      {album ? (
        <>
          <h2>{album.title}</h2>
        </>
      ) : (
        <>
          <Skeleton variant="text" height={40} sx={{ fontSize: "1rem" }} />
          <br />
          <Skeleton variant="rectangular" height={60} />
        </>
      )}
    </>
  );
};

export default Albumdetails;
