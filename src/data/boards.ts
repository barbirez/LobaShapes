export interface Board {
  id: string
  name: string
  tagline: string
  color: string
  textColor: string
  image: string
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
    name: 'UIVA',
    tagline: 'High-performance shortboard',
    color: '#D4621E',
    textColor: '#F5EDD8',
    image: '/surfboard-1.png',
    specs: {
      lengths: ["5'6\"", "5'8\"", "5'10\""],
      width: '18.5"',
      thickness: '2.25"',
    },
    description:
      'High-performance shortboard. Maximum release, maximum expression. The board that makes noise.',
  },
  {
    id: 'midlength',
    name: 'ALCATEIA',
    tagline: 'The everyday driver',
    color: '#E8A826',
    textColor: '#3D1520',
    image: '/surfboard-2.png',
    specs: {
      lengths: ["6'8\"", "7'0\"", "7'4\""],
      width: '21"',
      thickness: '2.625"',
    },
    description:
      'Built for community waves, familiar breaks. The board you ride with your people.',
  },
  {
    id: 'fish',
    name: 'MATILHA',
    tagline: 'The fish or mid-length',
    color: '#7A3B2E',
    textColor: '#F5EDD8',
    image: '/surfboard-3.png',
    specs: {
      lengths: ["5'4\"", "5'6\"", "5'8\""],
      width: '20.5"',
      thickness: '2.5"',
    },
    description:
      "Pure fun, pure momentum. The one you grab when your body just *knows* before your brain does.",
  },
  {
    id: 'longboard',
    name: 'BREU',
    tagline: 'Your dawn patrol board',
    color: '#F5EDD8',
    textColor: '#3D1520',
    image: '/surfboard-4.png',
    specs: {
      lengths: ["9'0\"", "9'4\"", "9'8\""],
      width: '22.5"',
      thickness: '2.875"',
    },
    description:
      "Designed for those pre-light sessions when the ocean belongs to no one else.",
  },
  {
    id: 'eggy',
    name: 'ESPREITA',
    tagline: 'A step-up for bigger surf',
    color: '#5C2236',
    textColor: '#E8A826',
    image: '/surfboard-5.png',
    specs: {
      lengths: ["6'2\"", "6'6\"", "6'10\""],
      width: '20.75"',
      thickness: '2.625"',
    },
    description:
      "Patient, calculated, built for when you're reading the set and waiting for the right moment.",
  },
  {
    id: 'gun',
    name: 'VIGÍLIA',
    tagline: 'Reading everything, missing nothing',
    color: '#2B3A4A',
    textColor: '#F5EDD8',
    image: '/surfboard-6.png',
    specs: {
      lengths: ["7'6\"", "8'0\"", "8'6\""],
      width: '19"',
      thickness: '2.5"',
    },
    description:
      'The wolf that sits at the edge of the treeline and watches the ocean breathe.',
  },
]
