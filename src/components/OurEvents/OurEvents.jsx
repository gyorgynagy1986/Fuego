import style from './OurEvents.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Button'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h2: 'Check out our events!',
    p: 'Suspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor. Nunc sollicitudin diam. ',
    btn:'étlapunk',
}

const OurEvents = () => {
  return (
    <div className={style.container}>
    <div className={style.textContainer}>
      <h2 className={dosis.className}>{textContent.h2}</h2>
      <p>{textContent.p}</p>
          <Button btnBlue={true} url={'/etlap'} name={textContent.btn}/>
    </div>
  </div>
  )
}

export default OurEvents