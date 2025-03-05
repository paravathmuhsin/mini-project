import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/photos?_limit=20'
        );
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);


  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <LazyImage key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

const LazyImage = ({ photo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(imgRef.current);
          }
        });
      },
      {
        rootMargin: '50px 0px', 




        
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="photo-item">
      <img
        ref={imgRef}
        src={isVisible ? photo.thumbnailUrl : ''} 
        alt={photo.title}
        style={{
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      />
      <p>{photo.title}</p>
    </div>
  );
};


export default PhotoGallery;