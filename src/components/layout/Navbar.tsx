import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-burgundy/10' : 'bg-transparent'
      }`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-2xl text-burgundy tracking-widest2 hover:text-orange transition-colors duration-300"
        >
          LOBA
        </a>
        <div className="hidden md:flex items-center gap-10">
          {['Boards', 'Shaper', 'Order', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-label font-600 text-sm tracking-widest2 uppercase text-burgundy/70 hover:text-orange transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex font-label font-bold text-xs tracking-widest2 uppercase border border-burgundy text-burgundy px-5 py-2.5 hover:bg-burgundy hover:text-cream transition-all duration-300"
        >
          Order a Board
        </a>
        {/* Mobile nav toggle placeholder */}
        <button className="md:hidden font-label text-xs tracking-widest2 uppercase text-burgundy">
          Menu
        </button>
      </div>
    </motion.nav>
  )
}
