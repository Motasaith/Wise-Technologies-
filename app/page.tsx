import Header from '@/src/components/Header'
import HeroSketch from '@/src/sections/HeroSketch'
import About from '@/src/sections/About'
import Features from '@/src/sections/Features'
import TechStack from '@/src/sections/TechStack'
import Process from '@/src/sections/Process'
import Testimonials from '@/src/sections/Testimonials'
import Contact from '@/src/sections/Contact'
import Footer from '@/src/sections/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
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
