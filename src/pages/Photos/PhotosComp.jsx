import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./photos.scss";

function PhotosComp() {
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPhoto = async () => {
        setLoading(true);
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/photos/${id}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setPhoto(data);
        } catch (e) {
          setError(e.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPhoto();
    }, [id]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!photo) return <div>Photo not found</div>;
  
    return (
      <div className="photo-detail">
        <h2>Photo Detail Page</h2>
        <h3>{photo.title}</h3>
        <img src={photo.url} alt={photo.title} />
      </div>
    );
  }
  
  export default PhotosComp;