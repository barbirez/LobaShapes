import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ColorBlock } from '../components/ui/ColorBlock'
import { boards } from '../data/boards'
import { stagger, scaleIn, slideLeft } from '../lib/motion'

export function Boards() {
  return (
    <section id="boards" className="bg-burgundy py-section px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel index="002" name="BOARDS" light className="mb-6" />
          <h2 className="font-display text-display-lg text-cream leading-none">
            THE BOARDS
          </h2>
        </motion.div>

        {/* Board grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {boards.map((board) => (
            <motion.div
              key={board.id}
              variants={scaleIn}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className="group cursor-pointer"
            >
              <ColorBlock
                color={board.color}
                aspect="aspect-[2/3]"
                hover
              />

              <div className="mt-4">
                <h3
                  className="font-display text-display-sm leading-none mb-1"
                  style={{ color: board.color === '#F5EDD8' ? '#F5EDD8' : board.color }}
                >
                  {board.name.toUpperCase()}
                </h3>
                <p className="font-label italic font-bold text-sm text-yellow/80 mb-4 tracking-wide">
                  {board.tagline}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 mb-4 border-t border-cream/10 pt-4">
                  <div>
                    <p className="text-spec text-cream/30 mb-1">Length</p>
                    <p className="font-mono text-xs text-cream/70">{board.specs.lengths[0]}</p>
                  </div>
                  <div>
                    <p className="text-spec text-cream/30 mb-1">Width</p>
                    <p className="font-mono text-xs text-cream/70">{board.specs.width}</p>
                  </div>
                  <div>
                    <p className="text-spec text-cream/30 mb-1">Thick</p>
                    <p className="font-mono text-xs text-cream/70">{board.specs.thickness}</p>
                  </div>
                </div>

                <p className="font-serif text-sm text-cream/50 leading-relaxed mb-4 hidden lg:block">
                  {board.description}
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-label font-bold text-xs tracking-widest2 uppercase text-orange hover:text-yellow transition-colors duration-300"
                >
                  Enquire <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="mt-20 font-serif italic text-cream/30 text-center text-lg"
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
