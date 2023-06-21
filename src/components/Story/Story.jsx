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
  p: 'Látogassatok el hozzánk a Kazinczy utcába, kóstoljátok meg hamisítatlan Fuego csirkénket és sült burgonyánkat, próbáljátok ki különleges házi készítésű szószainkat és igyatok melléjük egy jéghideg sört.',
  p1:'A Fuegoban a csirkét és a kacsát titkos fűszerkeverékünkkel készítjük el, majd saját levükben sütjük őket a sütőben, hogy ízük és állaguk egyedülálló legyen. Csapatunk a hét minden napján azon munkálkodik, hogy a lehető legjobban érezzétek magatokat nálunk, éttermünk atmoszférája és ízei pedig garantáltan felpezsdítik majd a hangulatot.',
  btn:'étlapunk',
  url:'/etlap'
}

const textContentEn = {
  h4: 'About us',
  p: 'Visit us in Kazinczy Street in the 7th district of Budapest and get ready to take a bite out of our roasted chicken and baked potatoes, but neither miss to enjoy our delicious selection of sauces and some cold beers.',
  p1:'with our secret spice blend, and we roast them in their own juices in the oven to ensure their flavor and texture are unique. Our amazing team always goes above and beyond to provide you the best dining experience. We guarantee that the ambience and flavors of our restaurant will add extra vibrancy to the mood.',
  btn:'Our menu',
  url:'/en/menu'
}


const Story = ({lang}) => {

  const pText = `${!lang ? textContent.p : textContentEn.p }`
  const pText2 = `${!lang ? textContent.p1 : textContentEn.p1 }`
  const h2Text = `${!lang ? textContent.h4 : textContentEn.h4}`
  const btnUrl = `${!lang ? textContent.url : textContentEn.url}`
  const btnName = `${!lang ? textContent.btn : textContentEn.btn}`

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
      <h2 className={dosis.className}>{h2Text}</h2>
      <p>{pText} <br/><br/>{pText2}</p>
      <Button engColorPrefixBlue={lang ? true : false} btnBlue={true} url={btnUrl} name={btnName}/>
    </div>
  </div>
  )
}

export default Story