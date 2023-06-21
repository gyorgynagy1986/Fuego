"use client"

import React, {useRef, useEffect, useState } from 'react'
import style from './Hero.module.css'
import { Dosis } from 'next/font/google'
import StickyNav from '../StickyNav/StickyNav'
import Button from '../UI/Buttons/Button'
import Image from 'next/image'
import ButtonGetInTouch from '../UI/Buttons/ButtonGetInTouch'
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


import HeroCoverPhoto from '../../../public/assets/hero/hero.webp'

const dosis = Dosis({ subsets: ['latin'] })


const textContent = {
    h1: 'Fuego étterem 🔥',
    p: 'Ennél egy finom sült csirkét vagy kacsát fűszeres burgonyával? A legjobb helyen vagy!',
    btn:'asztalfoglalás',
    btn2: 'kapcsolat'
}

const Hero = ({reservation}) => {

  const parallax = useParallax({
    speed:-5
  });



  const [stickyNav, setStickyNav] = useState(false)

  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStickyNav(false)
        } else {
          setStickyNav(true)
        }
      },
      { rootMargin: '0px 20px 20px 20px' }
    );

    observer.observe(menuRef.current);

  }, []);


  return (
    <header  ref={menuRef} className={style.container}>
        {stickyNav && <StickyNav />}
         <div  className={style.imageContainer}>
          <div className={style.layer}></div>
          <div className={style.layerTop}></div>
        <Image placeholder="blur" alt='Fuego' priority src={HeroCoverPhoto}/>
        </div>
        <div ref={parallax.ref} className={style.textContainer}>
            <h1 className={dosis.className}>{textContent.h1}</h1>
            <p>{textContent.p}</p>
            <div className={style.btnContainer}>
                <Button url={reservation} name={textContent.btn}/>
                <ButtonGetInTouch url={'/kapcsolat'} name={textContent.btn2}/>
            </div>
        </div>
    </header>
  )
}

export default Hero