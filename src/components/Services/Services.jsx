"use client"

import style from './Services.module.css'
import { Dosis, Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import HeroCoverPhoto from '../../../public/assets/sections/Our_services2.png'
import { useParallax } from 'react-scroll-parallax';

const dosis = Dosis({ subsets: ['latin'] })
const bebas = Bebas_Neue({ subsets: ['latin'], weight:'400' })

const textContent = {
    h1: 'Szolgáltatások ',
    p: 'Örömmel várjuk asztalfoglalásod, legyen szó céges rendezvényről, vagy megünnepelnéd életed egy különleges pillanatát családod és barátaid körében. Mi biztosítjuk az ínycsiklandó ételeket és a jó hangulatot!',
    p1:'Céges rendezvények',
    p2: 'baráti összejövetelek',
    p3: 'születésnapok'
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
              <li>{textContent.p1}</li>
              <li>{textContent.p2}</li>
              <li>{textContent.p3}</li>
            </ul>
            <p>{textContent.p}</p>
        </div>
    </section>
  )
}

export default Services