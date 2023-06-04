
import React, { useState } from 'react';
import Image from 'next/image';

import photo from '../../../public/assets/gallery/photos/1.webp'
import photo1 from '../../../public/assets/gallery/photos/2.webp'
import photo2 from '../../../public/assets/gallery/photos/3.webp'


const PhotoGallery = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(2);
    const [startX, setStartX] = useState(0);

  
    const photos = [
      {
        id: 1,
        title: 'Photo 1',
        imageUrl: photo,
      },
      {
        id: 2,
        title: 'Photo 2',
        imageUrl: photo1,
      },
      {
        id: 3,
        title: 'Photo 3',
        imageUrl: photo2,
      },
     
    ];


    const currentPhoto = photos[currentPhotoIndex];

    const handleNextPhoto = () => {
      if (currentPhotoIndex < photos.length - 1) {
        setCurrentPhotoIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentPhotoIndex(0);
      }
    };
  
    const handlePrevPhoto = () => {
      if (currentPhotoIndex > 0) {
        setCurrentPhotoIndex((prevIndex) => prevIndex - 1);
      } else {
        setCurrentPhotoIndex(photos.length - 1);
      }
    };
  
    const handleTouchStart = (e) => {
      setStartX(e.touches[0].clientX);
    };
  
    const handleTouchMove = (e) => {
      const currentX = e.touches[0].clientX;
      const deltaX = startX - currentX;
  
      // Adjust the threshold to your liking
      if (deltaX > 50) {
        handleNextPhoto();
      } else if (deltaX < -50) {
        handlePrevPhoto();
      }
    };
  
    return (
      <div>
        <h1>Photo Gallery</h1>
        <div
          className="gallery"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}>
            <Image src={currentPhoto.imageUrl} alt={currentPhoto.title} />
            <p>{currentPhoto.id}/{photos.length}</p>
        </div>
        <button onClick={handlePrevPhoto}>-</button>
      <button onClick={handleNextPhoto}>+</button>
      </div>
    );
  };
  
  export default PhotoGallery;