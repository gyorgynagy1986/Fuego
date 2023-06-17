"use client"

import React from 'react'
import Image from "next/image"
import style from './PhotoGallery.module.css'

import photo from '../../../public/assets/gallery/photos/Gallery1.webp'
import photo1 from '../../../public/assets/gallery/photos/Gallery2.webp'
import photo2 from '../../../public/assets/gallery/photos/Gallery3.webp'
import photo3 from '../../../public/assets/gallery/photos/Gallery4.webp'
import photo4 from '../../../public/assets/gallery/photos/Gallery5.webp'
import photo5 from '../../../public/assets/gallery/photos/Gallery6.webp'
import photo6 from '../../../public/assets/gallery/photos/Gallery7.webp'
import photo7 from '../../../public/assets/gallery/photos/Gallery8.webp'

const photoGalleryCoverPhots = [
  { 
    id:1, 
      alt:'fuego geléria cover photos',
      url:photo
  },
  { 
    id:2, 
      alt:'fuego geléria cover photos',
      url:photo1
  },
  { 
    id:3, 
      alt:'fuego geléria cover photos',
      url:photo2
  },
  { 
    id:4, 
      alt:'fuego geléria cover photos',
      url:photo3
  },
  { 
    id:5, 
      alt:'fuego geléria cover photos',
      url:photo4
  },
  { 
    id:6, 
      alt:'fuego geléria cover photos',
      url:photo5
  },
  { 
    id:7, 
      alt:'fuego geléria cover photos',
      url:photo6
  },
  { 
    id:8, 
      alt:'fuego geléria cover photos',
      url:photo7
  },
 
]

  const CoverPhotoItems = ({ photoGalleryHandler }) => {
   
    const handleClick = (id) => {
      photoGalleryHandler(id);
    };

  return (
    <> 
      {photoGalleryCoverPhots.map((coverPhoto)=>
      (<div onClick={() => handleClick(coverPhoto.id,)} className={style.hoverProperty}><Image 
       // priority
        placeholder="blur"  
        onClick={() => handleClick(coverPhoto.id,)}
        key={coverPhoto.id}
        alt={coverPhoto.alt}
        src={coverPhoto.url}>
      </Image></div>))}
    </>
  )
}

export default CoverPhotoItems