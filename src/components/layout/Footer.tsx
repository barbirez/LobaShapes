export function Footer() {
  const marqueeText = Array(12)
    .fill('LOBA SHAPES · FLORIANÓPOLIS · SINCE 2019 · HANDMADE · ')
    .join('')

  return (
    <footer className="bg-burgundy overflow-hidden">
      {/* Marquee */}
      <div className="py-8 border-t border-cream/10 overflow-hidden">
        <div
          className="whitespace-nowrap animate-marquee inline-block font-display text-4xl text-cream/15 tracking-widest2"
          aria-hidden="true"
        >
          {marqueeText}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-cream/10">
        <p className="font-mono text-xs text-cream/40 tracking-widest">
          © 2026 LOBA SHAPES · FLORIANÓPOLIS
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://instagram.com/lobashapes"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-cream/40 hover:text-orange transition-colors duration-300 tracking-widest"
          >
            INSTAGRAM
          </a>
          <a
            href="#contact"
            className="font-mono text-xs text-cream/40 hover:text-orange transition-colors duration-300 tracking-widest"
          >
            ENQUIRE
          </a>
        </div>
      </div>
    </footer>
  )
}
