"use client"

import React, {useRef, useEffect, useState } from 'react'
import style from './Hero.module.css'
import { Dosis } from 'next/font/google'
import StickyNav from '../StickyNav/StickyNav'
import Button from '../UI/Buttons/Button'
import Image from 'next/image'
import ButtonGetInTouch from '../UI/Buttons/ButtonGetInTouch'
import { useParallax } from 'react-scroll-parallax';
import HeroCoverPhoto from '../../../public/assets/hero/hero.webp'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
  h1: 'Fuego Roasted Chicken Restaurant',
  p: 'A legjobb helyen vagy, ha egy ízletes sült csirkére vagy kacsára vágysz fűszeres burgonyával!',
  btn:'asztalfoglalás',
  btn2: 'kapcsolat',
  url: '/kapcsolat'
}

const textContentEn = {
  h1: 'Fuego Roasted Chicken Restaurant',
  p: 'You found the perfect spot if you’d like to try a delicious roasted chicken or duck with spicy potatoes!',
  btn:'Reservation',
  btn2: 'Get in touch',
  url: '/en/contact'
}

const Hero = ({reservation, lang}) => {
  const [stickyNav, setStickyNav] = useState(false)
  const parallax = useParallax({
    speed:-5
  });

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
    <header ref={menuRef} className={style.container}>
        {stickyNav && <StickyNav />}
          <div  className={style.imageContainer}>
          <div className={style.layer}></div>
          <div className={style.layerTop}></div>
        <Image placeholder="blur" alt='Fuego' priority src={HeroCoverPhoto}/>
        </div>
        <div ref={parallax.ref} className={style.textContainer}>
              <h1 className={dosis.className}>{!lang ? textContent.h1 : textContentEn.h1}</h1>
            <p>{!lang ? textContent.p : textContentEn.p}</p>
            <div className={style.btnContainer}>
                <Button engColorPrefix={lang ? true : false} url={reservation} name={!lang ? textContent.btn : textContentEn.btn}/>
                <ButtonGetInTouch url={!lang ? textContent.url : textContentEn.url} name={!lang ? textContent.btn2 : textContentEn.btn2}/>
            </div>
        </div>
    </header>
  )
}

export default Hero