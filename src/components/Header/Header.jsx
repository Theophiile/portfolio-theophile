import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo">TP</div>
        <ul className="nav-links">
          <li><a href="#accueil">Accueil</a></li>
          <li><a href="#apropos">À propos</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header 