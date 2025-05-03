import React from 'react'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-github"></i>
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-linkedin-in"></i>
            LinkedIn
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa-brands fa-x-twitter"></i>
            Twitter
          </a>
        </div>
        <div className="footer-info">
          <p>Théophile Pinto</p>
          <p>Développeur Full Stack</p>
          <p>contact@theophilepinto.com</p>
        </div>
        <div className="footer-copyright">
          <p>&copy; {currentYear} Théophile Pinto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 