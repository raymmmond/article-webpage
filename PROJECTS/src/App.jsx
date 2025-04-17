import React from 'react'
import './src/pro.css'
import Header from './Header'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import SplitSection from './SplitSection'
import Categories from './Categories'
import HighlightSection from './HighlightSection'
import Bestsellers from './Bestsellers'
import Testimonial from './Testimonial'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <SplitSection />
      <Categories />
      <HighlightSection />
      <Bestsellers />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
