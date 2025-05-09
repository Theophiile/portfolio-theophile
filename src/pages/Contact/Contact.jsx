import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contactez-moi</h2>
      <p className="contact-subtitle">Une question, une collaboration ou envie d'échanger sur un projet&nbsp;? N'hésitez pas à me contacter&nbsp;!</p>
      <div className="contact-card">
        <h3 className="contact-card-title">Mes coordonnées</h3>
        <div className="contact-card-item">
          <span className="contact-label">Email</span>
          <span className="contact-value"><a href="mailto:theo-pinto@hotmail.fr">theo-pinto@hotmail.fr</a></span>
        </div>
        <div className="contact-card-item">
          <span className="contact-label">Téléphone</span>
          <span className="contact-value"><a href="tel:+33676157320">+33 6 76 15 73 20</a></span>
        </div>
        <div className="contact-card-item">
          <span className="contact-label">Réseaux</span>
          <span className="contact-value">
            <a href="https://www.linkedin.com/in/théophile-pinto-06bbb21b2/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i> LinkedIn
            </a>
            <a href="https://github.com/Theophiile" target="_blank" rel="noopener noreferrer" className="github-link">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact 