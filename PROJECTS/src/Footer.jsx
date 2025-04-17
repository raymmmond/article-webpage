import React from 'react'
import './src/pro.css'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">🪵</div>
        </div>

        <div className="footer-right">
          <div className="footer-columns">
            <div className="footer-col">
              <h4>Info</h4>
              <ul>
                <li>
                  <a href="#">Collections</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>About us</h4>
              <ul>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>

            <div className="footer-col contact">
              <h4>Contact us</h4>
              <ul>
                <li>
                  <a href="tel:+2349156515234">+234-915-6515-234</a>
                </li>
                <li>
                  <a href="mailto:hello@egoitipsum.com">hello@egoitipsum.com</a>
                </li>
                <li>
                  <a href="#">Get a call</a>
                </li>
              </ul>
            </div>

            <div className="footer-col cta">
              <a href="#" className="cta-circle">
                Fill out the brief
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 — Copyright</p>
      </div>
    </footer>
  )
}

export default Footer
