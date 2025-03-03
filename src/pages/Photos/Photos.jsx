import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getPhoto } from "../../services/post.service";
import "./photos.scss";

function Photos() {

  const { id } = useParams();
  const [photos, setPhotos] = useState();
  useEffect(() => {
    getPhoto(id).then((res) => {
      setPhotos(res);
    });
  }, [id]);

  return (
    <div>
      <h2>Photo Detail Page {id}</h2>
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