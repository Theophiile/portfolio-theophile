import React, { useState } from 'react'
import './Contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pourrez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData)
  }

  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contactez-moi</h2>
      <p className="contact-subtitle">Une question, une collaboration ou envie d'échanger sur un projet&nbsp;? N'hésitez pas à me contacter&nbsp;!</p>
      <div className="contact-card">
        <h3 className="contact-card-title">Mes coordonnées</h3>
        <div className="contact-card-item">
          <span className="contact-label">Email</span>
          <span className="contact-value"><a href="mailto:contact@theophilepinto.com">contact@theophilepinto.com</a></span>
        </div>
        <div className="contact-card-item">
          <span className="contact-label">Téléphone</span>
          <span className="contact-value"><a href="tel:+336XXXXXXXX">+33 6 XX XX XX XX</a></span>
        </div>
        <div className="contact-card-item">
          <span className="contact-label">Réseaux</span>
          <span className="contact-value">
            <a href="https://www.linkedin.com/in/théophile-pinto-06bbb21b2/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i> LinkedIn
            </a>
          </span>
          <span className="contact-value">
            <a href="https://github.com/Theophiile" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact 