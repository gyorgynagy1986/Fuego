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
  p: 'Ha egy ínycsiklandó sült csirkére vagy kacsára vágysz, Kazinczy utcai éttermünk a tökéletes választás számodra. A Fuego konyhájában a csirkét és a kacsát egyedi, titkos recept alapján fűszerezzük, így a hús páratlanul szaftos és omlós, míg a tetejük aranyszínű és ropogós. Fűszeres burgonyánk tökéletes kísérőül szolgál, ízében és állagában is harmonizál a sült hússal, de ne hagyd ki friss salátáinkat és különleges, házi készítésű szószainkat sem.',
  p1:'A hét minden napján kellemes hangulattal, a legjobb minőséggel és ízekkel várunk!',
  btn:'étlapunk',
  url:'/etlap'
}

const textContentEn = {
  h4: 'About us',
  p: "If you're in search of a delicious roasted chicken or duck, our restaurant in the 7th district is the perfect choice for you. At Fuego, the chicken and duck are marinated using a special, secret recipe, resulting in juicy and tender meat, crowned with a golden and crispy skin. Our spicy potatoes serve as a perfect accompaniment, harmonizing in both flavor and texture with the roast meat. Make sure not to miss our fresh salads and unique homemade sauces, either.",
  p1:'Join us to enjoy a cozy ambience, with the finest quality and flavors, any day of the week!',
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