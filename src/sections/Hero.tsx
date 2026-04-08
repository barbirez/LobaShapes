import { motion, useScroll, useTransform } from 'framer-motion'

export function Hero() {
  const { scrollY } = useScroll()
  const headlineY = useTransform(scrollY, [0, 700], [0, -100])
  const bgY = useTransform(scrollY, [0, 700], [0, -160])

  const slide = (fromX: number, delay: number) => ({
    hidden: { opacity: 0, x: fromX },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.95,
        delay,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  })

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
    >
      {/* ── Background photo — slightly oversized so parallax never shows gaps ── */}
      <motion.img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-x-0 w-full object-cover object-center"
        style={{ y: bgY, top: '-20%', height: '140%' }}
        draggable={false}
      />

      {/* ── Gradient overlay: light at top, darkens toward bottom where text lives ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.62) 100%)',
        }}
      />

      {/* ── Content ── */}
      <div className="relative h-full flex flex-col px-[5.5%]">

        {/* Push headline to ~19% from top */}
        <div style={{ height: '19%' }} className="shrink-0" />

        {/* Headline — parallax group */}
        <motion.div style={{ y: headlineY }} className="shrink-0">
          {/* LOBA */}
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-display-xl text-cream leading-none"
              variants={slide(-80, 0.15)}
              initial="hidden"
              animate="visible"
            >
              LOBA
            </motion.h1>
          </div>

          {/* SHAPES — offset ~14% to the right, matching Figma x:280 vs x:80 */}
          <div className="overflow-hidden">
            <motion.h1
              className="font-display text-display-xl text-cream leading-none ml-[13.9%]"
              variants={slide(-80, 0.38)}
              initial="hidden"
              animate="visible"
            >
              SHAPES
            </motion.h1>
          </div>
        </motion.div>

        {/* ~39px gap relative to 920px frame → ≈4.2vh */}
        <div style={{ height: '4.2vh' }} className="shrink-0" />

        {/* Orange band — spans full content width */}
        <motion.div
          className="h-[3px] bg-orange origin-left shrink-0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ~24px gap → ≈2.6vh */}
        <div style={{ height: '2.6vh' }} className="shrink-0" />

        {/* Tagline + Location — same row */}
        <motion.div
          className="flex items-end justify-between shrink-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
        >
          <p className="font-serif italic text-cream text-xl md:text-[22px] leading-none">
            Handcrafted surfboards from the south of Brazil.
          </p>
          <span className="font-mono text-[10px] tracking-widest uppercase text-cream/40 hidden md:block">
            Florianópolis · SC · Brazil
          </span>
        </motion.div>

        {/* ~61px gap → ≈6.6vh */}
        <div style={{ height: '6.6vh' }} className="shrink-0" />

        {/* CTA button — filled orange */}
        <motion.div
          className="shrink-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-cream font-label font-bold text-[13px] tracking-widest uppercase px-8 h-[52px]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Order a Board &nbsp;→
          </motion.a>
        </motion.div>

        {/* Spacer pushes scroll hint to bottom */}
        <div className="flex-1" />

        {/* Scroll hint — centered */}
        <motion.div
          className="flex justify-center pb-[3.5%] shrink-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <motion.span
            className="font-mono text-[9px] tracking-widest text-cream/30 uppercase"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          >
            ↓&nbsp;&nbsp;Scroll
          </motion.span>
        </motion.div>

      </div>
    </section>
  )
}
