import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAlbum } from "../../Services/album.service";
import useAppContext from "../../Components/AppContext/useAppContext";
import { ALBUM, HOME } from "../../Utils/menuConstants";

const AlbumDetails = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const { setContext } = useAppContext();

  useEffect(() => {
    setContext({
      appTitle: "Album details",
      breadcrumbs: [
        { label: HOME, link: "/" },
        { label: ALBUM, link: "/albums" },
        { label: "Album details" },
      ],
      activeMenu: ALBUM,
    });
  }, []);

  useEffect(() => {
    getAlbum(id).then((res) => {
      setAlbum(res);
    });
  }, [id]);

  return (
    album && (
      <div>
        <h2>{album.title}</h2>
      </div>
    )
  );
};

export default AlbumDetails;
