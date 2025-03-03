import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getPhotos } from "../../services/post.service";
function PhotosList() {
  const [photos, setPhotos] = useState([]);
    useEffect(() => {
      getPhotos().then((res) => {
        const limitedPhotos = res.slice(0, 20);
        setPhotos(limitedPhotos);
      });
    }, []);
  return (
    <div>
      <h2>Photos List</h2>
      <div className="photos">
        {photos.map((item) => (
          <div key={item.id} className="photo">
            <Link to={`/photos/${item.id}`}>
            <img src={item.thumbnailUrl} />
            {`${
                item.id
              }`}</Link>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default PhotosList