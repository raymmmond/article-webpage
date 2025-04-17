import React from 'react'
import './src/pro.css'

const Categories = () => {
  return (
    <section className="categories">
      <h2>Explore Our Categories</h2>
      <div className="category-grid">
        <div className="category-item">
          <img src="/images1/f5.avif" alt="Accent Pieces" />
          <div className="category-label">Accent Pieces</div>
        </div>
        <div className="category-item">
          <img src="/images1/f10.avif" alt="Workspace" />
          <div className="category-label">Workspace</div>
        </div>
        <div className="category-item">
          <img src="/images1/f9.avif" alt="Living Room" />
          <div className="category-label">Living Room</div>
        </div>
      </div>
    </section>
  )
}

export default Categories
