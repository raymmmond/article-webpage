import React from 'react'
import './src/pro.css'

const HighlightSection = () => {
  return (
    <section className="highlight-section">
      <div className="container">
        <div className="highlight-features">
          <div className="feature-card">
            <img src="/images1/f8.avif" alt="Solid Wood Icon" />
            <h4>Premium Solid Wood</h4>
            <p>
              We use only hand-selected hardwoods—like teak, oak, and
              mahogany—renowned for natural.
            </p>
          </div>
          <div className="feature-card">
            <img src="/images1/f11.avif" alt="Craftsmanship Icon" />
            <h4>Artisanal Craftsmanship</h4>
            <p>
              Each piece is handmade by skilled artisans who bring decades of
              woodworking experience into detail.
            </p>
          </div>
          <div className="feature-card">
            <img src="/images1/f7.avif" alt="Built to Last Icon" />
            <h4>Built for Everyday Life</h4>
            <p>
              Strong, stable, and constructed—our pieces are made to withstand
              daily use while elevating your space.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightSection
