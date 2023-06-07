import style from './Story.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Buttons/Button'
import Image from 'next/image'

import ourStoryCoverPhoto from '../../../public/section_1_tablet.png'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h4: 'Our story',
    p: 'Suspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor. Nunc sollicitudin diam. Suspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor. Nunc sollicitudin diam.',
    btn:'étlapunk',
}

const Story = () => {
  return (
  <div className={style.container}>
     <div className={style.imageContainer}>
        <div className={style.layer}></div>
          <Image alt='Fuego' priority={true} src={ourStoryCoverPhoto}/>
        </div>
    <div className={style.textContainer}>
      <h4 className={dosis.className}>{textContent.h4}</h4>
      <p>{textContent.p}</p>
          <Button btnBlue={true} url={'/etlap'} name={textContent.btn}/>
    </div>
  </div>
  )
}

export default Story