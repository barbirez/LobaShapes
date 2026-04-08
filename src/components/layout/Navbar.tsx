import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = ['Boards', 'Shaper', 'Process', 'Order', 'Contact']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled && !menuOpen ? 'bg-cream/95 backdrop-blur-sm border-b border-burgundy/10' : 'bg-transparent'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <img
              src="/loba-shapes-logo.svg"
              alt="Loba Shapes"
              className="h-16 w-auto transition-opacity duration-300 group-hover:opacity-70"
            />
          </a>
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
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
          <button
            className="md:hidden font-label text-xs tracking-widest2 uppercase text-burgundy z-50 relative"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-cream flex flex-col items-center justify-center gap-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(`#${item.toLowerCase()}`)}
                className="font-label text-3xl tracking-widest2 uppercase text-burgundy hover:text-orange transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNavClick('#contact')}
              className="mt-4 font-label font-bold text-sm tracking-widest2 uppercase border border-burgundy text-burgundy px-8 py-3 hover:bg-burgundy hover:text-cream transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
            >
              Order a Board
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
