import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAlbums } from "../../services/album.service";

const AlbumList =() => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then((res) => setAlbums(res));
    },[]);

    return (
        <div>
            <h2>Albums</h2>
            {albums.map((album) => (
                <div key={album.id}>
                    <h3>
                        <Link to={`/albums/${album.id}`}>{album.title}</Link>
                    </h3>
                </div>
            ))}
        </div>
    )
}

export default AlbumList;