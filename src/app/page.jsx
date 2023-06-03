import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/Hero/Hero'
import SectionStory from '@/components/Story/Story'

export default function Home() {
  return (
    <div>
     <Hero />
      <main>
        <SectionStory />
      </main>
    </div>
  )
}
