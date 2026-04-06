import { motion } from 'framer-motion'

interface ColorBlockProps {
  color: string
  aspect?: string
  label?: string
  labelColor?: string
  className?: string
  hover?: boolean
}

export function ColorBlock({
  color,
  aspect = 'aspect-[3/4]',
  label,
  labelColor = '#F5EDD8',
  className = '',
  hover = false,
}: ColorBlockProps) {
  return (
    <div className={`overflow-hidden ${aspect} ${className}`}>
      <motion.div
        className="w-full h-full relative"
        style={{ backgroundColor: color }}
        whileHover={hover ? { scale: 1.04 } : undefined}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Inner grain layer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/grain.svg')",
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
            opacity: 0.15,
            mixBlendMode: 'multiply',
          }}
        />
        {label && (
          <div
            className="absolute bottom-4 left-4 font-label font-bold text-xs tracking-widest2 uppercase"
            style={{ color: labelColor }}
          >
            {label}
          </div>
        )}
      </motion.div>
    </div>
  )
}
