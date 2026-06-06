"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User, MessageCircle, Globe, ExternalLink, Copy, Check } from 'lucide-react'
import type { BlogPost } from '@/src/data/blogData'
import Header from '@/src/components/Header'
import Footer from '@/src/sections/Footer'

/* Scribble divider */
const ScribbleDivider = () => (
  <svg className="w-full h-6 my-8" viewBox="0 0 800 24" preserveAspectRatio="none">
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

/* Doodle checkbox */
const DoodleCheckbox = ({ checked = true }: { checked?: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="1" y="1" width="16" height="16" rx="2" stroke="#4A4A4A" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
    {checked && <path d="M4 9 L7 12 L13 6" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />}
  </svg>
)

function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)

  const shareUrl = encodeURIComponent(url)
  const shareTitle = encodeURIComponent(title)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm" style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}>Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sketch-border-thin p-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Share on Twitter"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sketch-border-thin p-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Share on Facebook"
      >
        <Globe className="w-4 h-4" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="sketch-border-thin p-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Share on LinkedIn"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
      <button
        onClick={handleCopy}
        className="sketch-border-thin p-2 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        style={{ color: 'var(--text-muted)' }}
        aria-label="Copy link"
      >
        {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  )
}

import { useState } from 'react'

function SectionHeading({ children, index }: { children: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="text-2xl md:text-3xl font-bold mt-12 mb-6 flex items-center gap-3"
      style={{ color: '#2c3e50', fontFamily: "'Kalam', cursive" }}
    >
      <DoodleCheckbox />
      {children}
    </motion.h2>
  )
}

function Paragraph({ children, index }: { children: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.03 }}
      className="text-base md:text-lg leading-relaxed mb-6"
      style={{ color: 'var(--text-secondary)', fontFamily: "'Architects Daughter', cursive" }}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}

export default function BlogPostPage({ post }: { post: BlogPost }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const articleUrl = `https://wisetechryk.com/blog/${post.slug}`

  return (
    <>
      <Header />
      <article className="min-h-screen pt-24 pb-16 relative" style={{ backgroundColor: 'var(--bg)' }}>
        {/* Paper lines background */}
        <div className="absolute inset-0 paper-lines pointer-events-none opacity-50" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-1 hover:text-[#e74c3c]"
              style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Hero image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="sketch-border p-2 md:p-3 bg-white transform rotate-1"
              style={{ boxShadow: '5px 5px 0px rgba(44,62,80,0.15)' }}
            >
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={450}
                className="w-full h-64 md:h-80 object-cover rounded-sm"
              />
            </div>
            {/* Tape */}
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-20 h-6 opacity-40"
              style={{
                background: 'repeating-linear-gradient(90deg, #e74c3c 0px, #e74c3c 4px, transparent 4px, transparent 8px)',
                transform: 'translateX(-50%) rotate(-2deg)',
              }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: '#2c3e50', fontFamily: "'Kalam', cursive" }}
          >
            {post.title}
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mb-6 text-sm"
            style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
          >
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" /> {post.author}
            </span>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 sketch-border-thin"
                style={{ color: 'var(--text-muted)', fontFamily: "'Kalam', cursive" }}
              >
                #{tag}
              </span>
            ))}
          </motion.div>

          <ScribbleDivider />

          {/* Content */}
          <div className="prose-custom">
            {post.content.map((section, i) => (
              <div key={i}>
                <SectionHeading index={i}>{section.heading}</SectionHeading>
                {section.svg && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.03 + 0.1 }}
                    className="sketch-border p-3 bg-white mb-4"
                    style={{ boxShadow: '3px 3px 0px rgba(44,62,80,0.1)' }}
                    dangerouslySetInnerHTML={{ __html: section.svg }}
                  />
                )}
                <Paragraph index={i}>{section.body}</Paragraph>
              </div>
            ))}
          </div>

          <ScribbleDivider />

          {/* Author card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sketch-border p-6 bg-white transform -rotate-1 mb-8"
            style={{ boxShadow: '4px 4px 0px rgba(44,62,80,0.1)' }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#e74c3c]/10 flex items-center justify-center">
                <User className="w-6 h-6 text-[#e74c3c]" />
              </div>
              <div>
                <p className="font-bold text-sm" style={{ color: '#2c3e50', fontFamily: "'Kalam', cursive" }}>
                  {post.author}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: "'Caveat', cursive" }}>
                  {post.authorRole}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <ShareButtons title={post.title} url={articleUrl} />
          </motion.div>

          {/* Sticky note CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: 'spring' }}
            className="p-5 transform rotate-1"
            style={{
              background: '#feff9c',
              boxShadow: '2px 3px 8px rgba(0,0,0,0.12)',
              fontFamily: "'Caveat', cursive",
            }}
          >
            <p className="text-xl text-[#2c3e50] leading-snug">
              "Enjoyed this article? We build the tools we write about."
            </p>
            <div className="mt-3 flex items-center gap-3">
              <Link
                href="/services"
                className="text-sm font-bold text-[#e74c3c] underline underline-offset-2"
              >
                Explore Our Services →
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
      <Footer />
    </>
  )
}
