import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ColorBlock } from '../components/ui/ColorBlock'
import { slideLeft, slideRight, stagger, fadeUp } from '../lib/motion'

const processSteps = [
  { number: '01', label: 'Blank Selection', detail: 'PU & EPS blanks, locally sourced when possible' },
  { number: '02', label: 'Shaping', detail: 'Hand-shaped, every board individually' },
  { number: '03', label: 'Glassing', detail: 'Poly & epoxy resin, custom tints available' },
  { number: '04', label: 'Sanding & Finish', detail: 'Gloss, matte, or sanded — your call' },
]

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

            {/* Process */}
            <div className="mt-12">
              <p className="font-label font-bold text-xs tracking-widest3 uppercase text-burgundy/40 mb-6">
                The Process
              </p>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="space-y-0"
              >
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    className={`flex items-start gap-6 py-5 ${
                      i < processSteps.length - 1 ? 'border-b border-burgundy/10' : ''
                    }`}
                  >
                    <span className="font-mono text-sm text-orange/60 w-8 shrink-0 mt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <p className="font-label font-bold text-base tracking-widest uppercase text-burgundy mb-1">
                        {step.label}
                      </p>
                      <p className="font-serif italic text-sm text-burgundy/50">
                        {step.detail}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right — color blocks */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4 lg:pt-20"
          >
            <ColorBlock
              color="#7A3B2E"
              aspect="aspect-[4/5]"
              label="In the shaping bay"
              labelColor="#E8A826"
              hover
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ColorBlock
                color="#D4621E"
                aspect="aspect-[16/7]"
                label="Florianópolis, SC"
                labelColor="#F5EDD8"
                hover
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
