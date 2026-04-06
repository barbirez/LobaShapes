import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { orderSteps } from '../data/orderSteps'
import { stagger, fadeUp, staggerFast, charReveal } from '../lib/motion'

function SplitHeadline({ text }: { text: string }) {
  return (
    <motion.span
      variants={staggerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="inline-flex flex-wrap"
      aria-label={text}
    >
      {text.split('').map((char, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            variants={charReveal}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

export function CustomOrders() {
  return (
    <section id="order" className="bg-yellow py-section px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <SectionLabel index="004" name="CUSTOM ORDERS" className="mb-6 [&>*]:text-burgundy/60 [&_.text-orange]:text-burgundy/40" />
        </div>

        <div className="mb-4 overflow-hidden">
          <h2 className="font-display text-display-lg text-burgundy leading-none">
            <SplitHeadline text="ORDER A BOARD" />
          </h2>
        </div>

        <div className="w-full h-px bg-burgundy/20 mb-16" />

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {orderSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="group"
            >
              <p className="font-mono text-6xl font-bold text-burgundy/15 mb-4 leading-none">
                {step.number}
              </p>
              <h3 className="font-label font-bold text-xl tracking-widest uppercase text-burgundy mb-3">
                {step.title}
              </h3>
              <p className="font-serif text-base text-burgundy/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Lead time note */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-burgundy/20 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="font-mono text-xs text-burgundy/50 tracking-widest uppercase mb-2">
              Current lead time
            </p>
            <p className="font-display text-4xl text-burgundy leading-none">6–10 WEEKS</p>
          </div>
          <div>
            <p className="font-mono text-xs text-burgundy/50 tracking-widest uppercase mb-2">
              Starting from
            </p>
            <p className="font-display text-4xl text-burgundy leading-none">R$ 2.800</p>
          </div>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-4 font-label font-bold text-base tracking-widest2 uppercase bg-burgundy text-cream px-10 py-5 hover:bg-burgundy/90 transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Order
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
