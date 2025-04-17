import React from 'react'
import './src/pro.css'

const Bestsellers = () => {
  return (
    <section className="bestsellers">
      <h3>The Most Loved Wooden Pieces</h3>
      <div className="product-grid">
        <div className="product-card">
          <img src="/images1/f8.avif" alt="Product 1" />
          <p>Premium Solid Wood</p>
          <span>$750</span>
        </div>
        <div className="product-card">
          <img src="/images1/f9.avif" alt="Product 2" />
          <p>Premium Solid Wood</p>
          <span>$750</span>
        </div>
        <div className="product-card">
          <img src="/images1/f11.avif" alt="Product 3" />
          <p>Premium Solid Wood</p>
          <span>$750</span>
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
