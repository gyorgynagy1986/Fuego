"use client"

import style from './Story.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Buttons/Button'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax';

import ourStoryCoverPhoto from '../../../public/assets/sections/Our_story.png'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h4: 'Rólunk',
    p: 'Látogassatok el hozzánk a Kazinczy utcába, kóstoljátok meg hamisítatlan Fuego csirkénket és sült burgonyánkat, próbáljátok ki különleges házi készítésű szószainkat és igyatok melléjük egy jéghideg sört A Fuegoban a csirkét és a kacsát titkos fűszerkeverékünkkel készítjük el, majd saját levükben sütjük őket a sütőben, hogy ízük és állaguk egyedülálló legyen. Csapatunk a hét minden napján azon munkálkodik, hogy a lehető legjobban érezzétek magatokat nálunk, éttermünk atmoszférája és ízei pedig garantáltan felpezsdítik majd a hangulatot. ',
    btn:'étlapunk',
}

const Story = () => {

  const parallax = useParallax({
    opacity	: [-1, 4],
    speed:-5

  });


  return (
  <div className={style.container}>
     <div className={style.imageContainer}>
        <div className={style.layer}></div>
          <Image  placeholder="blur" priority alt='Fuego' src={ourStoryCoverPhoto}/>   
    </div>
    <div ref={parallax.ref} className={style.textContainer}>
      <h2 className={dosis.className}>{textContent.h4}</h2>
      <p>{textContent.p}</p>
          <Button btnBlue={true} url={'/etlap'} name={textContent.btn}/>
    </div>
  </div>
  )
}

export default Story