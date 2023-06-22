import './globals.css'
import { Roboto_Condensed } from 'next/font/google'
import Navbar from '../components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Logo from '@/components/UI/Logo/Logo'
const roboto = Roboto_Condensed({ subsets: ['latin'],  weight: ["300", "400", "700"] })

export const metadata = {
  title: 'Fuego',
  description: 'Fuegó Étterem Budapest: ízletes sült csirke és kacsa fűszeres burgonyával. A legjobb hely, ha minőségi ízeket és kellemes éttermet keresel.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="hu">
      <body className={roboto.className}>
        <Logo />
        <Navbar nav={true} />
          {children}
        <Navbar NavFooter={true}  />
        <Footer />
        </body>
    </html>
  )
}
