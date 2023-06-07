"use client"


import React from 'react'
import Image from "next/image"

import photo from '../../../public/assets/gallery/covers/1.png'
import photo1 from '../../../public/assets/gallery/covers/2.png'
import photo2 from '../../../public/assets/gallery/covers/3.png'
import photo3 from '../../../public/assets/gallery/covers/4.png'
import photo4 from '../../../public/assets/gallery/covers/5.png'
import photo5 from '../../../public/assets/gallery/covers/6.png'
import photo6 from '../../../public/assets/gallery/covers/5.png'
import photo7 from '../../../public/assets/gallery/covers/3.png'

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
      (<Image onClick={() => handleClick(coverPhoto.id,)}
        priority={true}
        key={coverPhoto.id}
        alt={coverPhoto.alt}
        src={coverPhoto.url}>
      </Image>))}
    </>
  )
}

export default CoverPhotoItems