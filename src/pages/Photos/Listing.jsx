import { useEffect } from "react";
import { useAppContext } from "../../components/AppContext/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "@mui/material";
import Title from "../../components/Title/Title";
import { fetchPhotosAsync } from "../../store/actions/photos.action";

const Listing = () => {
  const { setAppTitle } = useAppContext();
  const photos = useSelector((state) => state.photos);
  const dipatch = useDispatch();

  useEffect(() => {
    setAppTitle("Photos Listing");
  }, [setAppTitle]);

  useEffect(() => {
    if (!photos.length) {
      dipatch(fetchPhotosAsync());
    }
  }, [dipatch, photos.length]);
  return (
    <>
      <Title>Photos Listing</Title>
      {photos.length ? (
        photos.map((item) => <h3 key={item.id}>{item.title}</h3>)
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

export default Listing;
