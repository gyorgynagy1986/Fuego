"use client"

import Hero from '@/components/Hero/Hero'
import SectionStory from '@/components/Story/Story'
import Event from '@/components/Event/Event'
import OurEvents from '@/components/OurEvents/OurEvents'
import JoinUs from '@/components/JoinUs/JoinUs'
import Contact from '@/components/Contact/Contact'
import Services from '@/components/Services/Services'
import { ParallaxProvider } from 'react-scroll-parallax';

const links = {
  facebook: 'https://www.facebook.com/FUEGOchicken/?locale=hu_HU',
  instagram: 'https://www.instagram.com/fuegobp/?hl=hu',
  reservation: 'https://reservours.com/fuego/tablereservation?s=website' 
}

export default function Home() {

  return (
    <>
    <ParallaxProvider>
     <Hero reservation={links.reservation} />
      <main>
        <SectionStory />
        <Services />
        <Event />
        <JoinUs />
        <Contact reservation={links.reservation} />
      </main>
      </ParallaxProvider>
    </>
  )
}
