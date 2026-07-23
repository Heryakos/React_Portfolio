import { BrowserRouter } from "react-router-dom"
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Stats,
  Services,
  WhyChooseMe,
} from './components'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Stats/>
        <Tech/>
        <Works/>
        <Experience/>
        <Services/>
        <WhyChooseMe/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
