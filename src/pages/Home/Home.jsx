import React from 'react'
import './Home.scss'

const Home = () => {
  return (
    <section id="accueil" className="home">
      <div className="home-content">
        <h1>Théophile Pinto</h1>
        <p className="subtitle">Développeur Full Stack</p>
        <p className="description">
          Passionné par la création d'applications web modernes et innovantes
        </p>
        <div className="cta-buttons">
          <a href="#projets" className="cta-primary">Voir mes projets</a>
          <a href="#contact" className="cta-secondary">Me contacter</a>
        </div>
      </div>
    </section>
  )
}

export default Home 