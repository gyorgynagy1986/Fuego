
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from '../UI/Modals/Modal';

import style from './PhotoGallery.module.css'

import photo from '../../../public/assets/gallery/covers/1.png'
import photo1 from '../../../public/assets/gallery/covers/2.png'
import photo2 from '../../../public/assets/gallery/covers/3.png'
import photo3 from '../../../public/assets/gallery/covers/4.png'
import photo4 from '../../../public/assets/gallery/covers/5.png'
import photo5 from '../../../public/assets/gallery/covers/6.png'
import photo6 from '../../../public/assets/gallery/covers/5.png'
import photo7 from '../../../public/assets/gallery/covers/3.png'


const PhotoGallery = ({galleryClose, clickedItem}) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(clickedItem - 1);

  
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
      {
        id: 4,
        title: 'Photo 4',
        imageUrl: photo3,
      },
      {
        id: 5,
        title: 'Photo 5',
        imageUrl: photo4,
      },
      {
        id: 6,
        title: 'Photo 6',
        imageUrl: photo5,
      },
      {
        id: 7,
        title: 'Photo 7',
        imageUrl: photo6,
      },
      {
        id: 8,
        title: 'Photo 8',
        imageUrl: photo7,
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
  
  

    return (
         <>
          <div  className={style.container}>
            <div onClick={galleryClose} className={style.layerToCloseTheGallery}></div>
              <div className={style.containerImage}>
                  <Image src={currentPhoto.imageUrl} alt={currentPhoto.title} />
              
                  <div className={style.buttonContainer}>
                   <p>{currentPhoto.id}/{photos.length}</p>
                   <div><button onClick={handleNextPhoto}>+</button>
                  <button onClick={handlePrevPhoto}>-</button></div>
              </div>      
              </div>
                
          </div>
      </>
    );
  };
  
  export default PhotoGallery;