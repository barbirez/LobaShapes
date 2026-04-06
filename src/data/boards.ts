export interface Board {
  id: string
  name: string
  tagline: string
  color: string
  textColor: string
  specs: {
    lengths: string[]
    width: string
    thickness: string
  }
  description: string
}

export const boards: Board[] = [
  {
    id: 'shortboard',
    name: 'Sereia',
    tagline: 'High-performance shortboard',
    color: '#D4621E',
    textColor: '#F5EDD8',
    specs: {
      lengths: ["5'6\"", "5'8\"", "5'10\""],
      width: '18.5"',
      thickness: '2.25"',
    },
    description:
      'Built for consequence and commitment. Rocker, concaves, and rail everything — shaped for surfers who know exactly what they want.',
  },
  {
    id: 'midlength',
    name: 'Caju',
    tagline: 'Mid-length cruiser',
    color: '#E8A826',
    textColor: '#3D1520',
    specs: {
      lengths: ["6'8\"", "7'0\"", "7'4\""],
      width: '21"',
      thickness: '2.625"',
    },
    description:
      'The sweet spot between performance and flow. Paddles easy, trims fast, fits every point break and beach break the island throws at you.',
  },
  {
    id: 'fish',
    name: 'Tainha',
    tagline: 'Retro twin fin fish',
    color: '#7A3B2E',
    textColor: '#F5EDD8',
    specs: {
      lengths: ["5'4\"", "5'6\"", "5'8\""],
      width: '20.5"',
      thickness: '2.5"',
    },
    description:
      'Wide, flat, and fast. A classic fish outline with modern foil for waves that need volume and speed more than vertical ambition.',
  },
  {
    id: 'longboard',
    name: 'Farol',
    tagline: 'Classic single fin longboard',
    color: '#F5EDD8',
    textColor: '#3D1520',
    specs: {
      lengths: ["9'0\"", "9'4\"", "9'8\""],
      width: '22.5"',
      thickness: '2.875"',
    },
    description:
      'Slow down to go faster. A traditional longboard shaped for nose-riding, cross-stepping, and remembering why you fell in love with surfing.',
  },
  {
    id: 'eggy',
    name: 'Mamão',
    tagline: 'Egg / fun shape',
    color: '#5C2236',
    textColor: '#E8A826',
    specs: {
      lengths: ["6'2\"", "6'6\"", "6'10\""],
      width: '20.75"',
      thickness: '2.625"',
    },
    description:
      'Generous curves, forgiving rails, endless smiles. The board that makes every session a good session — whatever the ocean gives you.',
  },
]
