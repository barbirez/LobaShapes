import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'
import { ColorBlock } from '../components/ui/ColorBlock'
import { boards } from '../data/boards'
import { slideLeft, slideRight, stagger, fadeUp } from '../lib/motion'

function FormField({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative group">
      <label className="font-mono text-xs tracking-widest uppercase text-cream/40 block mb-2">
        {label}
      </label>
      <div className="relative">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent border-0 border-b border-cream/20 py-3 font-serif text-base text-cream placeholder:text-cream/20 focus:outline-none focus:border-cream/0 transition-colors duration-300"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-orange"
          animate={{ scaleX: focused ? 1 : 0, originX: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}

function SelectField({ label, name }: { label: string; name: string }) {
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative group">
      <label className="font-mono text-xs tracking-widest uppercase text-cream/40 block mb-2">
        {label}
      </label>
      <div className="relative">
        <select
          name={name}
          className="w-full bg-transparent border-0 border-b border-cream/20 py-3 font-serif text-base text-cream focus:outline-none appearance-none cursor-pointer"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        >
          <option value="" className="bg-burgundy">Select a model</option>
          {boards.map((b) => (
            <option key={b.id} value={b.id} className="bg-burgundy">
              {b.name} — {b.tagline}
            </option>
          ))}
          <option value="not-sure" className="bg-burgundy">Not sure yet — let's talk</option>
        </select>
        <span className="absolute right-0 top-3 text-cream/30 pointer-events-none">↓</span>
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-orange"
          animate={{ scaleX: focused ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-burgundy py-section px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <SectionLabel index="006" name="CONTACT" light className="mb-8" />
            <h2 className="font-display text-display-lg text-cream leading-none mb-12">
              GET IN
              <br />
              <span className="text-orange">TOUCH</span>
            </h2>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <motion.div variants={fadeUp}>
                    <FormField label="Your name" name="name" placeholder="What do they call you?" />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <FormField label="Email" name="email" type="email" placeholder="your@email.com" />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <SelectField label="Board model" name="model" />
                  </motion.div>
                  <motion.div variants={fadeUp}>
                    <div className="relative">
                      <label className="font-mono text-xs tracking-widest uppercase text-cream/40 block mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about where you surf, how you surf, what you're looking for..."
                        className="w-full bg-transparent border-b border-cream/20 py-3 font-serif text-base text-cream placeholder:text-cream/20 focus:outline-none resize-none"
                      />
                    </div>
                  </motion.div>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full font-label font-bold text-base tracking-widest2 uppercase bg-orange text-cream py-5 hover:bg-orange/90 transition-all duration-300 flex items-center justify-center gap-4 group mt-4"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Send Enquiry
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </motion.button>

                <p className="font-mono text-xs text-cream/25 tracking-widest text-center">
                  Or DM us on{' '}
                  <a
                    href="https://instagram.com/lobashapes"
                    className="underline hover:text-orange transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @lobashapes
                  </a>
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="py-12"
              >
                <p className="font-display text-display-sm text-orange mb-4">GOT IT.</p>
                <p className="font-serif italic text-cream/60 text-xl">
                  We'll be in touch soon. In the meantime — go surf.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Right — location */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="lg:pt-24">
              <h3 className="font-display text-display-md text-cream leading-none mb-2">
                FLORIANÓPOLIS
              </h3>
              <p className="font-mono text-sm text-yellow tracking-widest uppercase mb-8">
                Santa Catarina, Brazil
              </p>

              <div className="relative w-full overflow-hidden bg-brown aspect-video mb-8 group">
                <img
                  src="/floripa-aerial.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy/70 via-burgundy/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="font-label font-bold text-[11px] tracking-widest2 uppercase text-yellow">
                    Ilha de Santa Catarina
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { prefix: '// INSTAGRAM', value: '@lobashapes', href: 'https://instagram.com/lobashapes' },
                  { prefix: '// EMAIL', value: 'shapes@lobashapes.com', href: 'mailto:shapes@lobashapes.com' },
                  { prefix: '// WHATSAPP', value: '+55 48 9 9999-0000', href: 'https://wa.me/5548999990000' },
                ].map((contact) => (
                  <div key={contact.prefix} className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-orange/60 tracking-widest shrink-0">
                      {contact.prefix}
                    </span>
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-label font-semibold text-sm tracking-wide text-cream/70 hover:text-orange transition-colors duration-300"
                    >
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-cream/10">
                <p className="font-serif italic text-cream/30 text-base leading-relaxed">
                  Visits to the shaping bay by appointment. We'd love to show you around.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
