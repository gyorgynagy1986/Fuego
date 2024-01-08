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
  p: 'Ha egy ínycsiklandó sült csirkére vagy kacsára vágysz, Kazinczy utcai éttermünk az ideális hely számodra. A Fuegoban a csirkét és a kacsát titkos recept alapján fűszerezzük, tetejükön ropogós és aranyszínű a bőr, ami szaftos és omlós hússal párosul.',
  p1:'Fűszeres burgonyánk pedig tökéletes kísérőül szolgál, íze és állaga harmonizál a sült hússal, de hagyd ki friss salátáinkat és különleges, házi készítésű szószainkat sem. A hét minden napján kellemes hangulattal, a legjobb minőséggel és ízekkel várunk!',
  btn:'étlapunk',
  url:'/etlap'
}

const textContentEn = {
  h4: 'About us',
  p: 'If you’d try a mouth-watering roasted chicken or duck, our Kazinczy Street restaurant in the 7th district of Budapest is the ideal place for you. At Fuego, both the chicken and the duck are marinated according to a secret recipe, with crispy and golden skin on top, which is combined with tasty and crumbly meat.',
  p1:'Our spicy potatoes serve as a perfect accompaniment, their taste and texture harmonize with the roast meat, but don’t miss out our fresh salads and our special homemade sauces either. We are waiting for you with a nice ambience and the best quality and flavors every day of the week!',
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
  <section className={style.container}>
    
     <div className={style.imageContainer}>
        <div className={style.layer}></div>
        <Image  placeholder="blur" priority alt='Fuego' src={ourStoryCoverPhoto}/>   
     </div>

    <div ref={parallax.ref} className={style.textContainer}>
      <h2 className={dosis.className}>{h2Text}</h2>
      <p>{pText} <br/><br/>{pText2}</p>
      <Button engColorPrefixBlue={lang ? true : false} btnBlue={true} url={btnUrl} name={btnName}/>
    </div>
  </section>
  )
}

export default Story