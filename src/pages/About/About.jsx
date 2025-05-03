import React from 'react'
import './About.scss'
import TheoImg from '../../assets/images/Theo.webp'

const About = () => {
  return (
    <section id="apropos" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>À propos de moi</h2>
          <p>
            Je suis Théophile Pinto, un développeur passionné par la création de sites web modernes et performants.
            Mon parcours m'a permis d'acquérir des compétences solides en développement front-end et back-end.
          </p>
          <p>
            J'aime relever des défis techniques et créer des solutions innovantes qui améliorent l'expérience utilisateur.
            Mon objectif est de développer des sites web qui allient esthétique et fonctionnalité.
          </p>
        </div>
        <div className="about-image">
          <img src={TheoImg} alt="Photo de Théophile Pinto" width="300" height="300" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

export default About 