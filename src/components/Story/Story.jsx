import style from './Story.module.css'
import { Dosis } from 'next/font/google'
import Button from '../UI/Buttons/Button'

const dosis = Dosis({ subsets: ['latin'] })

const textContent = {
    h4: 'Our story',
    p: 'Suspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor. Nunc sollicitudin diam. Suspendisse in bibendum lorem, ac ullamcorper turpis. Etiam et diam orci. Phasellus vitae gravida dolor. Nunc sollicitudin diam.',
    btn:'étlapunk',
}

const Story = () => {
  return (
  <div className={style.container}>
    <div className={style.tabletPhoto}></div>
    <div className={style.textContainer}>
      <h4 className={dosis.className}>{textContent.h4}</h4>
      <p>{textContent.p}</p>
          <Button btnBlue={true} url={'/etlap'} name={textContent.btn}/>
    </div>
  </div>
  )
}

export default Story