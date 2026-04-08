import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ColorBlock } from '../components/ui/ColorBlock'
import { slideLeft, slideRight, stagger, fadeUp } from '../lib/motion'

export function Shaper() {
  return (
    <section id="shaper" className="bg-cream py-section px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          {/* Left — text */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionLabel index="003" name="SHAPER" className="mb-8" />

            <div className="overflow-hidden mb-2">
              <h2 className="font-display text-display-md text-burgundy leading-none">
                MEET THE
              </h2>
            </div>
            <div className="overflow-hidden mb-10">
              <h2 className="font-display text-display-lg text-orange leading-none">
                SHAPER
              </h2>
            </div>

            <div className="space-y-5 mb-10">
              <p className="font-serif text-lg text-burgundy/80 leading-relaxed">
                Loba grew up between the mountains and the ocean in Santa Catarina — the kind of place where you're surfing before school and shaping in your garage by seventeen. After years riding boards made for someone else's body and someone else's waves, the decision to shape became obvious.
              </p>
              <p className="font-serif text-lg text-burgundy/80 leading-relaxed">
                Every board starts with a conversation. Where do you surf? How do you move? What does the board do that surprises you — good or bad? The answers live in the rocker, the rails, the foil. That conversation is what separates a custom board from a production shape with your name on it.
              </p>
            </div>

            {/* Pull quote */}
            <motion.blockquote
              className="border-l-2 border-orange pl-6 my-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <p className="font-serif italic text-2xl md:text-3xl text-burgundy leading-snug">
                "The ocean doesn't care about your board — but you do. And you should."
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right — color blocks */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 lg:pt-20"
          >
            <div className="relative w-full overflow-hidden bg-brown aspect-[4/5] group">
              <img
                src="/shaper-shaping.png"
                alt="Loba shaping a surfboard"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/55 via-burgundy/10 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="font-label font-bold text-[11px] tracking-widest2 uppercase text-yellow">
                  In the shaping bay
                </span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative w-full overflow-hidden bg-orange aspect-[16/7] group">
                <img
                  src="/floripa-water.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/60 via-burgundy/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-label font-bold text-[11px] tracking-widest2 uppercase text-cream">
                    Florianópolis, SC
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
