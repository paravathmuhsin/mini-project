import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbum } from "../../services/album.service";

const AlbumDetails = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    getAlbum(id).then((res) => setAlbum(res));
  }, [id]);

  return (
    <div>
      {album && (
        <>
          <h2>{album.title}</h2>
          <p>Album ID: {album.id}</p>
        </>
      )}
    </div>
  );
};

export default AlbumDetails;
