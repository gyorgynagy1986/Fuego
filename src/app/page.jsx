import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import SectionStory from '@/components/Story/Story'
import Event from '@/components/Event/Event'
import OurEvents from '@/components/OurEvents/OurEvents'
import JoinUs from '@/components/JoinUs/JoinUs'
import Contact from '@/components/Contact/Contact'

export default function Home() {

  return (
    <>
     <Hero />
      <main>
        <SectionStory />
        <Event />
        <OurEvents />
        <JoinUs />
        <Contact />
      </main>
    </>
  )
}
