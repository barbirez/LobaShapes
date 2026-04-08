import { GrainOverlay } from './components/ui/GrainOverlay'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { Boards } from './sections/Boards'
import { Shaper } from './sections/Shaper'
import { Process } from './sections/Process'
import { CustomOrders } from './sections/CustomOrders'
import { InTheWater } from './sections/InTheWater'
import { Contact } from './sections/Contact'

function App() {
  return (
    <>
      <GrainOverlay />
      <Navbar />
      <main>
        <Hero />
        <Boards />
        <Shaper />
        <Process />
        <CustomOrders />
        <InTheWater />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
