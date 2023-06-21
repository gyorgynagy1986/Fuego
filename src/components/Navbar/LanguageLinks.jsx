import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const LanguageLinks = () => {
    const pathname = usePathname();
    const [langHandlerEn, setLangHandlerEn] = useState('/');
    const [langHandlerHu, setLangHandlerHu] = useState('/');


    useEffect(() => {
      if (pathname === '/') {
        setLangHandlerEn('/en');
      } else if (pathname === '/en') {
        setLangHandlerEn('/en')
      } else if (pathname === '/en/gallery') {
        setLangHandlerEn('/en/gallery')
        setLangHandlerHu('/galeria')
      } else if (pathname === '/en/menu') {
        setLangHandlerEn('/en/menu')
        setLangHandlerHu('/etlap')
      } else if (pathname === '/en/contact') {
        setLangHandlerEn('/en/contact')
        setLangHandlerHu('/kapcsolat')
      }
    }, [pathname]);

    useEffect(() => {
      if (pathname === '/en') {
        setLangHandlerHu('/');
      } else if (pathname === '/galeria') {
        setLangHandlerEn('/en/gallery')
        setLangHandlerHu('/galeria')
      } else if (pathname === '/etlap') {
        setLangHandlerEn('/en/menu')
        setLangHandlerHu('/etlap')
      } else if (pathname === '/kapcsolat') {
        setLangHandlerEn('/en/contact')
        setLangHandlerHu('/kapcsolat')
      }
    }, [pathname]);

  return (
    <div>
         <Link href={langHandlerEn}><span>EN</span></ Link>
            <span> / </span>
         <Link href={langHandlerHu}><span>HU </span></ Link>
    </div>
  )
}

export default LanguageLinks