import { motion } from 'framer-motion'

export default function HeroSketch() {
  return (
    <section className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <video
          src="/hero_section.mp4"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          disableRemotePlayback
          controls={false}
          className="w-full h-auto object-cover pointer-events-none select-none"
          style={{ display: 'block' }}
        />
      </motion.div>
    </section>
  )
}
