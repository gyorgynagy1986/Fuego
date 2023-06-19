"use client"

import Hero from '@/components/Hero/Hero'
import SectionStory from '@/components/Story/Story'
import Event from '@/components/Event/Event'
import OurEvents from '@/components/OurEvents/OurEvents'
import JoinUs from '@/components/JoinUs/JoinUs'
import Contact from '@/components/Contact/Contact'
import Services from '@/components/Services/Services'
import { ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {

  return (
    <>
    <ParallaxProvider>
     <Hero />
      <main>
        <SectionStory />
        <Services />
        <Event />
        <JoinUs />
        <Contact />
      </main>
      </ParallaxProvider>
    </>
  )
}
