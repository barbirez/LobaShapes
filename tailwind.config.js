/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EDD8',
        'cream-dark': '#E8DCC0',
        burgundy: '#3D1520',
        'burgundy-light': '#5C2236',
        brown: '#7A3B2E',
        orange: '#D4621E',
        yellow: '#E8A826',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        label: ['"Barlow Condensed"', 'sans-serif'],
        serif: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(5rem,15vw,14rem)', { lineHeight: '0.88', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(3.5rem,10vw,9rem)', { lineHeight: '0.9' }],
        'display-md': ['clamp(2.5rem,6vw,6rem)', { lineHeight: '0.92' }],
        'display-sm': ['clamp(1.8rem,4vw,4rem)', { lineHeight: '0.95' }],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      spacing: {
        section: '8rem',
        'section-sm': '5rem',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
