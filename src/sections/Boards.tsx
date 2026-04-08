import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { boards, type Board } from '../data/boards'
import { fadeUp, slideLeft } from '../lib/motion'

// ─── Board Card ────────────────────────────────────────────────────────────

function BoardCard({ board }: { board: Board }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div variants={fadeUp} className="w-[320px] shrink-0">
      {/* 3-D flip wrapper */}
      <div
        style={{ perspective: '1000px' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: hovered ? 180 : 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* ── FRONT ── */}
          <div
            className="flex flex-col items-center justify-between px-4 pt-8 pb-6"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              backgroundColor: '#4A1B2B',
              aspectRatio: '5 / 8',
            }}
          >
            {/* Board photo — fills most of the card */}
            <div className="flex-1 flex items-center justify-center w-full min-h-0">
              <img
                src={board.image}
                alt={board.name}
                draggable={false}
                className="select-none"
                style={{ maxHeight: '100%', maxWidth: '70%', objectFit: 'contain' }}
              />
            </div>

            {/* Board name inside the card */}
            <p
              className="font-display tracking-wide text-2xl leading-none text-center mt-4 shrink-0"
              style={{ color: '#F5EDD8', opacity: 0.9 }}
            >
              {board.name.toUpperCase()}
            </p>
          </div>

          {/* ── BACK ── */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center py-8 px-5"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              backgroundColor: board.color,
            }}
          >
            <p
              className="font-display text-4xl mb-3 text-center leading-none"
              style={{ color: board.textColor }}
            >
              {board.name.toUpperCase()}
            </p>
            <p
              className="font-label italic font-bold text-xs tracking-widest uppercase mb-6 text-center"
              style={{ color: board.textColor, opacity: 0.7 }}
            >
              {board.tagline}
            </p>

            {/* Specs */}
            <div className="grid grid-cols-3 gap-3 w-full mb-4">
              {[
                { label: 'Length', val: board.specs.lengths[0] },
                { label: 'Width', val: board.specs.width },
                { label: 'Thick', val: board.specs.thickness },
              ].map(({ label, val }) => (
                <div key={label} className="text-center">
                  <p
                    className="font-mono text-[9px] tracking-widest uppercase mb-1"
                    style={{ color: board.textColor, opacity: 0.45 }}
                  >
                    {label}
                  </p>
                  <p
                    className="font-mono text-xs font-bold"
                    style={{ color: board.textColor, opacity: 0.85 }}
                  >
                    {val}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="w-8 h-px my-4"
              style={{ backgroundColor: board.textColor, opacity: 0.2 }}
            />

            <p
              className="font-serif italic text-xs text-center leading-relaxed"
              style={{ color: board.textColor, opacity: 0.65 }}
            >
              {board.description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

// ─── Section ───────────────────────────────────────────────────────────────

// card width (320) + gap (20)
const CARD_STRIDE = 340
const SET_WIDTH = boards.length * CARD_STRIDE
const tripleBoards = [...boards, ...boards, ...boards]

export function Boards() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Start at the middle copy so both directions have room to scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = SET_WIDTH
    }
  }, [])

  // Silently jump between copies to create the infinite illusion
  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    if (el.scrollLeft < CARD_STRIDE) {
      el.scrollLeft += SET_WIDTH
    } else if (el.scrollLeft >= SET_WIDTH * 2) {
      el.scrollLeft -= SET_WIDTH
    }
  }

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'right' ? CARD_STRIDE : -CARD_STRIDE, behavior: 'smooth' })
  }

  return (
    <section id="boards" className="bg-burgundy py-section">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="mb-10 md:mb-14 lg:mb-10"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel index="002" name="BOARDS" light className="mb-6" />
              <h2 className="font-display text-display-lg text-cream leading-none">
                THE BOARDS
              </h2>
            </div>
            <div className="flex gap-3 pb-2">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 flex items-center justify-center border border-cream/20 text-cream/50 hover:border-cream/60 hover:text-cream transition-colors"
                aria-label="Previous board"
              >
                ←
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 flex items-center justify-center border border-cream/20 text-cream/50 hover:border-cream/60 hover:text-cream transition-colors"
                aria-label="Next board"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Carousel — outer div scrolls, inner div is overflow:visible so flip isn't clipped */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="overflow-x-auto pt-0 pb-6 -mt-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex gap-5" style={{ overflow: 'visible', width: 'max-content' }}>
          {tripleBoards.map((board, i) => (
            <div key={`${board.id}-${i}`} style={{ scrollSnapAlign: 'start' }}>
              <BoardCard board={board} />
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* Bottom note */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          className="mt-16 font-serif italic text-cream/30 text-center text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          All boards shaped to order. No two are ever exactly the same.
        </motion.p>
      </div>
    </section>
  )
}
