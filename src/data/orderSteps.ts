export interface OrderStep {
  number: string
  title: string
  description: string
}

export const orderSteps: OrderStep[] = [
  {
    number: '01',
    title: 'Choose Your Model',
    description:
      'Browse the shapes and find the model that matches how you surf and where you surf. Not sure? We\'ll figure it out together.',
  },
  {
    number: '02',
    title: 'Share Your Details',
    description:
      'Height, weight, experience, home break, what you love about your current board, what you hate. The more you tell us, the better the result.',
  },
  {
    number: '03',
    title: 'Confirm & Deposit',
    description:
      '50% deposit to secure your slot in the shaping bay. Lead time is typically 6–10 weeks. We\'ll keep you updated throughout.',
  },
  {
    number: '04',
    title: 'Pick Up or Ship',
    description:
      'Collect from the shaping bay in Florianópolis — we\'d love to show you the finished board in person. Or we ship anywhere in Brazil.',
  },
]
