import { useEffect, useReducer } from "react";
import { useAppContext } from "../../components/AppContext/AppContext";
import Title from "../../components/Title/Title";
import { getAlbums } from "../../models/album.model";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

const reducer = (state, action) => {
  if (action.type === "SET_ALBUM") {
    return action.payload;
  }
  return state;
};

const Albumlisting = () => {
  const { setAppTitle } = useAppContext();
  const [albums, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    setAppTitle("Album Listing");
  }, [setAppTitle]);

  useEffect(() => {
    getAlbums().then((result) => {
      dispatch({ type: "SET_ALBUM", payload: result });
    });
  }, []);
  return (
    <>
      <Title>Album Listing</Title>
      {albums.length ? (
        albums.map((item) => (
          <Link key={item.id} to={"/album/" + item.id}>
            <h3>{item.title}</h3>
          </Link>
        ))
      ) : (
        <>
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
        </>
      )}
    </>
  );
};

export default Albumlisting;
