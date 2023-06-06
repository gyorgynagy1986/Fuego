"use client"

import PhotoGallery from "@/components/PhotoGallery/PhotoGallery"
import style from './page.module.css'
import Image from "next/image"

import { Dosis } from 'next/font/google'

const dosis = Dosis({ subsets: ['latin'] })

import photo from '../../../public/assets/gallery/covers/1.png'
import photo1 from '../../../public/assets/gallery/covers/2.png'
import photo2 from '../../../public/assets/gallery/covers/3.png'
import photo3 from '../../../public/assets/gallery/covers/4.png'
import photo4 from '../../../public/assets/gallery/covers/5.png'
import photo5 from '../../../public/assets/gallery/covers/6.png'
import photo6 from '../../../public/assets/gallery/covers/7.png'
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


const Gallery = () => {
  return (
    <>
      <h1 className={`${style.h1} ${dosis.className}`}>Gallery</h1>
      <div className={style.container}>
         {photoGalleryCoverPhots.map((coverPhotos)=>
          (<Image 
            key={coverPhotos.id}
            alt={coverPhotos.alt}
            src={coverPhotos.url}>
          </Image>))}
      </div>
    </>
  )
}

export default Gallery