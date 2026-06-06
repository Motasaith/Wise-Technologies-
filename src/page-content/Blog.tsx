"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '@/src/data/blogData'

/* Scribble divider */
const ScribbleDivider = () => (
  <svg className="w-full h-6 mb-8" viewBox="0 0 800 24" preserveAspectRatio="none">
    <path
      d="M0,12 Q40,4 80,12 T160,12 T240,12 T320,12 T400,12 T480,12 T560,12 T640,12 T720,12 T800,12"
      stroke="#C8C0B0"
      strokeWidth="2"
      strokeDasharray="6 4"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="400" cy="12" r="4" fill="#e74c3c" opacity="0.6" />
  </svg>
)

/* Doodle checkbox removed (unused) */

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="sketch-border paper-texture overflow-hidden transition-all duration-500 hover:scale-[1.02]"
      style={{ boxShadow: '4px 4px 0px rgba(44,62,80,0.1)' }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="h-48 sm:h-56 overflow-hidden relative">
          <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-wider px-2 py-1 sketch-border-thin"
                style={{ color: '#e74c3c', fontFamily: "'Kalam', cursive" }}
              >
                {tag}
              </span>
            ))}
          </div>
          <h3
            className="text-lg sm:text-xl font-bold mb-2"
            style={{ color: '#2c3e50', fontFamily: "'Kalam', cursive" }}
          >
            {post.title}
          </h3>
          <p
            className="text-sm mb-4 line-clamp-3"
            style={{ color: 'var(--text-muted)', fontFamily: "'Architects Daughter', cursive" }}
          >
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> {post.author}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="min-h-screen py-24 relative"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* SVG Scribble Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden text-[#2c3e50]/20 transform -translate-y-1/2 flex justify-center">
        <svg width="300" height="40" viewBox="0 0 300 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M5,20 Q40,5 75,20 T145,20 T215,20 T285,20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-all duration-300 hover:-translate-y-1 hover:text-[#e74c3c]"
          style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 relative"
        >
          <div className="inline-flex flex-col items-center gap-2 relative">
            <h1
              className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-0 inline-block relative"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              <span className="highlight-pink">Wise Blog</span>
            </h1>
            <svg className="md:hidden w-12 h-12 text-[#2c3e50] transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <svg className="hidden md:block absolute -bottom-8 -right-12 w-16 h-16 text-[#2c3e50] transform rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          <p
            className="text-lg text-[var(--text-muted)] mt-4"
            style={{ fontFamily: "'Architects Daughter', cursive" }}
          >
            Insights on AI, development & automation. Pick a sticky note!
          </p>
        </motion.div>

        <ScribbleDivider />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
