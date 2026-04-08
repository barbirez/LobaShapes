import { motion } from 'framer-motion'
import { SectionLabel } from '../components/ui/SectionLabel'

type ProcessStep = {
  number: string
  title: string
  detail: string
  iconSrc: string
  iconAlt: string
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Blank Selection',
    detail: 'PU & EPS blanks, locally sourced when possible',
    iconSrc: '/blank-selection.svg',
    iconAlt: 'Blank selection',
  },
  {
    number: '02',
    title: 'Shaping',
    detail: 'Hand-shaped, every board individually',
    iconSrc: '/shaping.svg',
    iconAlt: 'Shaping',
  },
  {
    number: '03',
    title: 'Glassing',
    detail: 'Poly & epoxy resin, custom tints available',
    iconSrc: '/glassing.svg',
    iconAlt: 'Glassing',
  },
  {
    number: '04',
    title: 'Sanding & Finish',
    detail: 'Gloss, matte, or sanded — your call',
    iconSrc: '/sanding-and-finishing.svg',
    iconAlt: 'Sanding and finishing',
  },
]

function CardContent({ step }: { step: ProcessStep }) {
  const { number, title, detail, iconSrc, iconAlt } = step
  return (
    <>
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-burgundy/10 to-transparent" />
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-5">
          <div className="relative mt-0.5">
            <div className="h-20 w-20 rounded-full border border-burgundy/10 bg-cream flex items-center justify-center">
              <img
                src={iconSrc}
                alt={iconAlt}
                className="h-10 w-10"
                draggable={false}
              />
            </div>
            <span className="absolute -top-2 -left-2 font-mono text-[11px] text-orange/80 bg-cream px-1.5 py-0.5 rounded-full border border-burgundy/10">
              {number}
            </span>
          </div>
          <div className="min-w-0">
            <p className="font-label font-bold text-[27px] tracking-widest2 uppercase text-burgundy">
              {title}
            </p>
            <p className="mt-2 font-serif italic text-[15px] text-burgundy/55 leading-relaxed">
              {detail}
            </p>
          </div>
        </div>
        <span className="hidden md:block mt-2 h-2 w-2 rounded-full bg-orange/30" />
      </div>
    </>
  )
}

export function Process() {
  return (
    <section id="process" className="bg-cream py-section px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24 self-start"
          >
            <SectionLabel index="004" name="PROCESS" className="mb-8" />

            <div className="overflow-hidden">
              <h2 className="font-display text-display-md text-burgundy leading-none">
                HOW IT
              </h2>
            </div>
            <div className="overflow-hidden mt-1">
              <h2 className="font-display text-display-lg text-orange leading-none">
                WORKS
              </h2>
            </div>

            <p className="mt-8 font-serif text-lg text-burgundy/75 leading-relaxed max-w-prose">
              From the first blank to the final finish, each board moves through a small, intentional
              set of hands-on steps—built around your waves, your stance, and your feel.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-px w-10 bg-burgundy/15" />
              <p className="font-label font-bold text-xs tracking-widest3 uppercase text-burgundy/40">
                Four steps. One board.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative border border-burgundy/10 bg-cream/70 px-[29px] py-[41px] rounded-none transform-gpu transition-transform duration-300 hover:scale-110 hover:z-10"
              >
                <CardContent step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
