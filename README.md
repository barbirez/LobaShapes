# Loba Shapes

Landing page for **Loba Shapes** — a handcrafted surfboard shaper based in Florianópolis, Brazil. Retro surf aesthetic, custom orders, and a direct line to the shaping bay.

Live: [project-o2yph.vercel.app](https://project-o2yph.vercel.app)

---

## Tech Stack

| | |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 12 |
| Deploy | Vercel (auto-deploy from `main`) |

---

## Project Structure

```
src/
├── App.tsx                   # Root layout — composes all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        # Fixed nav with mobile full-screen menu
│   │   └── Footer.tsx
│   └── ui/
│       ├── GrainOverlay.tsx  # Film grain texture layer
│       ├── SectionLabel.tsx  # Reusable section label component
│       └── ColorBlock.tsx
├── sections/
│   ├── Hero.tsx              # Full-bleed hero with video/image background
│   ├── Boards.tsx            # Board lineup (6 models, horizontally scrollable)
│   ├── Shaper.tsx            # Shaper bio
│   ├── Process.tsx           # Shaping process steps
│   ├── CustomOrders.tsx      # Order flow (4-step process)
│   ├── InTheWater.tsx        # Testimonials
│   └── Contact.tsx           # Contact / order form
└── data/
    ├── boards.ts             # Board models (name, specs, color, image)
    ├── orderSteps.ts         # 4-step custom order process
    └── testimonials.ts       # Customer quotes
```

---

## Boards

Six models, each with a name, Portuguese tagline, color palette, and size range:

| Model | Name | Type |
|---|---|---|
| UIVA | High-performance shortboard | 5'6"–5'10" |
| ALCATEIA | The everyday driver (mid-length) | 6'8"–7'4" |
| MATILHA | Fish | 5'4"–5'8" |
| BREU | Longboard (dawn patrol) | 9'0"–9'8" |
| ESPREITA | Step-up / eggy | 6'2"–6'10" |
| VIGÍLIA | Gun | 7'6"–8'6" |

---

## Custom Order Flow

1. Choose your model
2. Share your details (height, weight, experience, home break)
3. Confirm + 50% deposit — lead time 6–10 weeks
4. Pick up in Florianópolis or ship anywhere in Brazil

---

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # TypeScript check + Vite build
npm run preview   # Preview production build locally
```

---

## Deployment

Vercel is connected to this repo. Every push to `main` triggers an automatic deployment — no manual steps needed.
