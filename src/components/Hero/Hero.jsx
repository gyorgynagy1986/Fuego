"use client"

import React, {useRef, useEffect, useState } from 'react'
import style from './Hero.module.css'
import { Dosis } from 'next/font/google'
import StickyNav from '../StickyNav/StickyNav'
import Button from '../UI/Button'
import Image from 'next/image'
import ButtonGetInTouch from '../UI/ButtonGetInTouch'

import HeroCoverPhoto from '../../../public/hero_tablet.png'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h1: 'Lorem ipsum dolor sit amet',
    p: 'Etiam et diam ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor.',
    btn:'asztalfoglalás',
    btn2: 'kapcsolat'
}

const Hero = () => {

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
      { rootMargin: '20% 20px 20px 20px' }
    );

    observer.observe(menuRef.current);

    return () => {
      observer.unobserve(menuRef.current);
    };
  }, []);


  return (
    <header ref={menuRef} className={style.container}>
        {stickyNav && <StickyNav />}
         <div className={style.imageContainer}>
        <div className={style.layer}></div>
        <div className={style.layerTop}></div>
          <Image src={HeroCoverPhoto}/>
        </div>

        <div className={style.textContainer}>
            <h1 className={dosis.className}>{textContent.h1}</h1>
            <p>{textContent.p}</p>
            <div className={style.btnContainer}>
                <Button url={'/'} name={textContent.btn}/>
                <ButtonGetInTouch url={'/kapcsolat'} name={textContent.btn2}/>
            </div>
        </div>
    </header>
  )
}

export default Hero