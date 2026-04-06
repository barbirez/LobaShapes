interface SectionLabelProps {
  index: string
  name: string
  light?: boolean
  className?: string
}

export function SectionLabel({ index, name, light = false, className = '' }: SectionLabelProps) {
  const textColor = light ? 'text-cream/60' : 'text-burgundy/50'
  return (
    <div className={`flex items-center gap-2 font-label text-xs tracking-widest3 uppercase ${textColor} ${className}`}>
      <span className="text-orange font-label font-semibold">//</span>
      <span>{index}</span>
      <span className="opacity-40">—</span>
      <span>{name}</span>
    </div>
  )
}
