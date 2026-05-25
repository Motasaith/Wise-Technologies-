import Header from '@/src/components/Header'
import ServicesPage from '@/src/page-content/Services'
import Footer from '@/src/sections/Footer'

export const metadata = {
  title: 'Services',
  description: 'Explore our 13+ services including bespoke software, cloud solutions, AI integration, app design, and cybersecurity.',
}

export default function Services() {
  return (
    <>
      <Header />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  )
}
