export interface Testimonial {
  id: string
  quote: string
  name: string
  location: string
  color: string
  size: 'large' | 'medium'
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      "I've ridden boards from all over the world. Nothing fits the way I move through water like a Loba. It's like the board already knows what you're going to do before you do it.",
    name: 'Rafael M.',
    location: 'Joaquina, Florianópolis',
    color: '#D4621E',
    size: 'large',
  },
  {
    id: '2',
    quote:
      'Ordered a Caju mid-length for my partner who was transitioning from a longboard. First session and she was already trimming on the face. That board changed everything for her.',
    name: 'Ana & Pedro',
    location: 'Praia Mole',
    color: '#E8A826',
    size: 'medium',
  },
  {
    id: '3',
    quote:
      "The shaping process itself was an experience. Spent two hours talking about how I surf, where I surf, what I love and hate about my current boards. That conversation is IN the board.",
    name: 'Lucas F.',
    location: 'Campeche',
    color: '#7A3B2E',
    size: 'medium',
  },
  {
    id: '4',
    quote:
      "My Tainha arrived and I couldn't stop staring at it. The craftsmanship is something else — you can feel the hours and intention in every inch of glass. Then you actually surf it and realize it surfs even better than it looks.",
    name: 'Gabriela S.',
    location: 'Pântano do Sul',
    color: '#3D1520',
    size: 'large',
  },
  {
    id: '5',
    quote:
      'Three boards in and I keep coming back. Each one is a conversation, a collaboration. This is what custom really means.',
    name: 'Tomás W.',
    location: 'Barra da Lagoa',
    color: '#5C2236',
    size: 'medium',
  },
]
