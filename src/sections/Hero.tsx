import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

export function Hero() {
  const { scrollY } = useScroll()
  const headlineY = useTransform(scrollY, [0, 700], [0, -120])
  const subtitleY = useTransform(scrollY, [0, 700], [0, -60])

  const wordVariant = (fromX: number, delay: number) => ({
    hidden: { opacity: 0, x: fromX },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-cream flex flex-col justify-between overflow-hidden"
    >
      {/* Section label — top left */}
      <motion.div
        className="absolute top-24 left-6 md:left-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <SectionLabel index="001" name="HERO" />
      </motion.div>

      {/* Established tag — top right */}
      <motion.div
        className="absolute top-24 right-6 md:right-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-mono text-xs text-burgundy/40 tracking-widest uppercase">
          Est. 2019
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.div
        style={{ y: headlineY }}
        className="flex-1 flex flex-col justify-center pt-32 pb-8 px-6 md:px-12"
      >
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-display-xl text-burgundy leading-none block"
            variants={wordVariant(-80, 0.2)}
            initial="hidden"
            animate="visible"
          >
            LOBA
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-display-xl text-burgundy leading-none block ml-[12%] md:ml-[18%]"
            variants={wordVariant(80, 0.45)}
            initial="hidden"
            animate="visible"
          >
            SHAPES
          </motion.h1>
        </div>

        {/* Orange accent band */}
        <motion.div
          className="h-1 bg-orange mt-8 mb-8 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Sub-copy */}
        <motion.div style={{ y: subtitleY }} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p
            className="font-serif italic text-xl md:text-2xl text-burgundy/70 max-w-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Handcrafted surfboards from the south of Brazil.
          </motion.p>
          <motion.div
            className="flex flex-col items-start md:items-end gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs text-burgundy/40 tracking-widest uppercase">
              Florianópolis · SC · Brazil
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-label font-bold text-sm tracking-widest2 uppercase border-2 border-burgundy text-burgundy px-8 py-4 hover:bg-burgundy hover:text-cream transition-all duration-400 group"
            >
              Order a Board
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom info strip */}
      <motion.div
        className="px-6 md:px-12 pb-10 flex items-center justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="flex items-center gap-6">
          <div className="w-8 h-[1px] bg-burgundy/30" />
          <span className="font-mono text-xs text-burgundy/40 tracking-widest uppercase">
            Custom · Made to order
          </span>
        </div>
        <motion.div
          className="flex flex-col items-center gap-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <span className="font-mono text-xs text-burgundy/30 tracking-widest">SCROLL</span>
          <span className="text-burgundy/30 text-sm">↓</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
