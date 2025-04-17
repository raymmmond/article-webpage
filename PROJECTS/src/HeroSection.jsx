import React from 'react'
import './src/pro.css'

const HeroSection = () => {
  return (
    <section className="hero-section fade-in-up">
      <div className="hero-top">
        <div className="hero-left">
          <h1>Crafted by Nature</h1>
        </div>
        <div className="hero-right">
          <p>/FURNITURE/</p>
          <p className="p2">
            Premium wooden furniture designed to add warmth, strength, and
            timeless charm to your living space.
          </p>
        </div>
      </div>
      <div className="hero-images">
        <img src="/images1/f4.avif" alt="Left table" />
        <img src="/images1/f9.avif" alt="Right table" />
      </div>
    </section>
  )
}

export default HeroSection
