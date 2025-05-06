import React from 'react'
import './Footer.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>Théophile Pinto</p>
          <p>Développeur Full Stack</p>
          <p>theo-pinto@hotmail.fr</p>
        </div>
        <div className="footer-copyright">
          <p>&copy; {currentYear} Théophile Pinto. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 