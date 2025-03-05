import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getPhotos } from "../../services/photos.service";
import "./photos.scss";
import { useAppContext } from "../../componets/AppContext/AppContext";

function PhotosList() {

 const { setPageTitle } = useAppContext();

  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos().then((res) => {
      const limitedPhotos = res.slice(0, 20);
      setPhotos(limitedPhotos);
    });
  }, []);

  useEffect(() => {
    setPageTitle("Gallery");
  }, []);

  return (
    <div>
      <h2>{setPageTitle}</h2>
      <div className="photos">
        {photos.map((item) => (
          <div key={item.id} className="photo">
            <Link to={`/photos/${item.id}`}>
              <img src={item.thumbnailUrl} />
              {`${item.id}`}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotosList;
