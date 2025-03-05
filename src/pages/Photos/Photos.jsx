import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./photos.scss";
import { getPhoto } from "../../services/photos.service";
import { useAppContext } from "../../componets/AppContext/AppContext";

function Photos() {
const { setPageTitle } = useAppContext();

  const { id } = useParams();
  const [photos, setPhotos] = useState();
  useEffect(() => {
    getPhoto(id).then((res) => {
      setPhotos(res);
    });
  }, [id]);

  useEffect(() => {
    setPageTitle("Gallery Detail");
  }, []);

  return (
    <div>
      <h2>{setPageTitle}{id}</h2>
      {/* <h3>{photos&& photos.title}</h3> */}

      {photos && (
        <>
          <h3>{photos.title}</h3>
          <p><img src={photos.url} /></p>
        </>
      )}
    </div>
  )
}

export default Photos