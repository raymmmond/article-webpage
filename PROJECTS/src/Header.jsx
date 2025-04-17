import React from 'react'
import './src/pro.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🪵</div>
      <nav className="nav">
        <a href="#">Collections</a>
        <a href="#">Services</a>
        <a href="#">Products</a>
        <a href="#">About Us</a>
      </nav>
      <button className="btn">En</button>
    </header>
  )
}

export default Header
