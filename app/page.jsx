'use client'

import { useRef } from 'react';
import ParallaxComponent from '@components/ParallaxComponent';
import BentoComponent from '@components/BentoGrid';
import ContactComponent from '@components/Contact';
import AboutComponent from '@components/AboutComponent';
export default function Home() {

  const ref = useRef();

  return (
    <>
      <ParallaxComponent />
      <section className=' bg-gradient-to-b from-green-700 via-emerald-400 to-emerald-200'>
      <AboutComponent/>
      </section>
      <BentoComponent />
      <ContactComponent/>
    </>
  )
}
