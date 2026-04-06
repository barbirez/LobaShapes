import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ColorBlock } from '../components/ui/ColorBlock'
import { testimonials } from '../data/testimonials'
import { slideLeft, slideRight, stagger, fadeUp } from '../lib/motion'

function TestimonialCard({ quote, name, location, size }: { quote: string; name: string; location: string; size: 'large' | 'medium' }) {
  return (
    <div className="flex flex-col h-full">
      <motion.span
        className="font-display text-8xl text-orange/20 leading-none mb-0 -mb-4 block"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
      >
        "
      </motion.span>
      <motion.p
        className={`font-serif italic text-burgundy/80 leading-relaxed flex-1 ${
          size === 'large' ? 'text-xl md:text-2xl' : 'text-base md:text-lg'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {quote}
      </motion.p>
      <motion.div
        className="mt-6 pt-4 border-t border-burgundy/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="font-mono text-xs text-burgundy/60 tracking-widest uppercase">
          — {name}
        </p>
        <p className="font-mono text-xs text-burgundy/35 tracking-widest mt-1">
          {location}
        </p>
      </motion.div>
    </div>
  )
}

export function InTheWater() {
  return (
    <section id="water" className="bg-cream-dark py-section px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionLabel index="005" name="IN THE WATER" className="mb-6" />
          <h2 className="font-display text-display-lg text-burgundy leading-none">
            IN THE
            <br />
            <span className="text-orange">WATER</span>
          </h2>
        </motion.div>

        {/* Row 1: large testimonial + color block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <motion.div
            className="lg:col-span-7 bg-cream p-8 md:p-12"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <TestimonialCard {...testimonials[0]} />
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ColorBlock color="#D4621E" aspect="aspect-[4/3] lg:aspect-auto lg:h-full" hover />
          </motion.div>
        </div>

        {/* Row 2: color block + large testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <motion.div
            className="lg:col-span-5 order-2 lg:order-1"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ColorBlock color="#E8A826" aspect="aspect-[4/3] lg:aspect-auto lg:h-full" hover />
          </motion.div>
          <motion.div
            className="lg:col-span-7 bg-burgundy p-8 md:p-12 order-1 lg:order-2"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="[&_p]:text-cream/80 [&_p.font-mono]:text-cream/50 [&_.border-t]:border-cream/10">
              <motion.span
                className="font-display text-8xl text-orange/30 leading-none -mb-4 block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
              >
                "
              </motion.span>
              <motion.p
                className="font-serif italic text-cream/80 leading-relaxed text-xl md:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {testimonials[3].quote}
              </motion.p>
              <motion.div
                className="mt-6 pt-4 border-t border-cream/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="font-mono text-xs text-cream/50 tracking-widest uppercase">
                  — {testimonials[3].name}
                </p>
                <p className="font-mono text-xs text-cream/30 tracking-widest mt-1">
                  {testimonials[3].location}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Row 3: three medium cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {[testimonials[1], testimonials[2], testimonials[4]].map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              className="bg-cream p-6 md:p-8"
            >
              <TestimonialCard {...t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom color strip */}
        <motion.div
          className="grid grid-cols-3 gap-2 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ColorBlock color="#7A3B2E" aspect="aspect-[8/1]" />
          <ColorBlock color="#D4621E" aspect="aspect-[8/1]" />
          <ColorBlock color="#E8A826" aspect="aspect-[8/1]" />
        </motion.div>
      </div>
    </section>
  )
}
