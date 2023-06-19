"use client"

import style from './Services.module.css'
import { Dosis, Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import HeroCoverPhoto from '../../../public/assets/sections/Our_services2.png'
import { useParallax } from 'react-scroll-parallax';

const dosis = Dosis({ subsets: ['latin'] })
const bebas = Bebas_Neue({ subsets: ['latin'], weight:'400' })

const textContent = {
    h1: 'Our services',
    p: 'Etiam et diam ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor. Etiam et diam ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor.Etiam et diam ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor.',
}

const Services = () => {

  const parallax = useParallax({
    opacity	: [-1, 4],
    speed:-5
  });

  return (
    <section  className={style.container}>
         <div className={style.imageContainer}>
          <div className={style.layer}></div>
          <div className={style.layerTop}></div>
          <Image placeholder="blur" alt='Fuego' src={HeroCoverPhoto}/>
        </div>
        <div ref={parallax.ref} className={style.textContainer}>
            <h1 className={dosis.className}>{textContent.h1}</h1>
            <ul className={`${bebas.className} ${style.ulContainer}`}>
              <li>Céges rendezvények</li>
              <li>baráti összejövetelek</li>
              <li>születésnapok</li>
            </ul>
            <p>{textContent.p}</p>
        </div>
    </section>
  )
}

export default Services