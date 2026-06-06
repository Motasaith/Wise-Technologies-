import type { Metadata } from 'next'
import Header from '@/src/components/Header'
import HeroSketch from '@/src/sections/HeroSketch'
import About from '@/src/sections/About'
import Features from '@/src/sections/Features'
import TechStack from '@/src/sections/TechStack'
import Process from '@/src/sections/Process'
import Testimonials from '@/src/sections/Testimonials'
import Contact from '@/src/sections/Contact'
import Footer from '@/src/sections/Footer'
import PencilCursor from '@/src/components/PencilCursor'

export const metadata: Metadata = {
  title: 'Wise Technologies — A Web Solution Provider',
  description: 'We build enterprise-grade web applications, scalable digital infrastructure, and custom software solutions for modern businesses. Software house in Rahim Yar Khan, Pakistan.',
  openGraph: {
    title: 'Wise Technologies — A Web Solution Provider',
    description: 'We build the Digital Future. Enterprise software, web apps, and cloud solutions.',
    images: ['/og-image.avif'],
  },
}

export default function HomePage() {
  return (
    <>
      <PencilCursor color="#4A4A4A" strokeWidth={2} maxTrailLength={35} />
      <Header />
      <main id="main-content" className="relative">
        <HeroSketch />
        <About />
        <Features />
        <TechStack />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
