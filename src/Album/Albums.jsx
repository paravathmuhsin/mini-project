import React from "react";
import { Link } from "react-router-dom";

const Albums = () => {
  const albums = [
    { id: 1, title: "Vacation Album" },
    { id: 2, title: "Wedding Album" },
    { id: 3, title: "Family Album" },
  ];

  return (
    <div>
      <h1>Albums</h1>
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