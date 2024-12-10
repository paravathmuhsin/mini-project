import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AlbumDetails = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  
  const albumData = [
    { id: 1, title: "Vacation Album", 
        description: "Vacation photos.", 
        photos: ["https://via.placeholder.com/500"] 
    },
    { id: 2, title: "Wedding Album", 
        description: "Wedding photos.", 
        photos: ["https://via.placeholder.com/500"] 
    },
    { id: 3, title: "Family Album", 
        description: "Family photos.", 
        photos: ["https://via.placeholder.com/500"] 
    },
  ];

  useEffect(() => {
    const foundAlbum = albumData.find((album) => album.id === parseInt(id));
    setAlbum(foundAlbum);
  }, [id]);

  if (!album) return <div>Loading...</div>;

  return (
    <div>
      <h1>{album.title}</h1>
      <p>{album.description}</p>
      <div>
        {album.photos.map((photo, index) => (
          <img key={index} src={photo} alt={`Album ${album.title}`} />
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;