import Header from '@/src/components/Header'
import BlogPage from '@/src/page-content/Blog'
import Footer from '@/src/sections/Footer'

export const metadata = {
  title: 'Blog',
  description: 'Insights on AI, development, and automation from Wise Technologies.',
}

export default function Blog() {
  return (
    <>
      <Header />
      <main>
        <BlogPage />
      </main>
      <Footer />
    </>
  )
}
