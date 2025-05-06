import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../assets/images/logo.webp'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <nav className="nav">
        <a href="#accueil" className="logo">
          <img src={Logo} alt="Logo TP" width="60" height="60" />
        </a>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#accueil" onClick={() => setIsMenuOpen(false)}>Accueil</a></li>
          <li><a href="#apropos" onClick={() => setIsMenuOpen(false)}>À propos</a></li>
          <li><a href="#projets" onClick={() => setIsMenuOpen(false)}>Projets</a></li>
          <li><a href="#competences" onClick={() => setIsMenuOpen(false)}>Compétences</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 