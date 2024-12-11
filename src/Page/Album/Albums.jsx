import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAlbums } from "../../Services/album.service";
import useAppContext from "../../Components/AppContext/useAppContext";
import { ALBUM, HOME } from "../../Utils/menuConstants";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const { setContext } = useAppContext();

  useEffect(() => {
    setContext({
      appTitle: ALBUM,
      breadcrumbs: [{ label: HOME, link: "/" }, { label: ALBUM }],
      activeMenu: ALBUM,
    });
  }, []);

  useEffect(() => {
    getAlbums().then((res) => {
      setAlbums(res);
    });
  }, []);

  return (
    <div>
      <div className="albums-list">
        {albums.map((album) => (
          <div key={album.id}>
            <Link to={`/albums/${album.id}`}>
              <h2>{album.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
