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
    // Ici, on pourra ajouter la logique pour envoyer le formulaire
    console.log('Formulaire soumis:', formData)
  }

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Envoyer</button>
        </form>
        <div className="contact-info">
          <h3>Informations de contact</h3>
          <p>Email: theo-pinto@hotmail.fr</p>
          <p>Téléphone: +33 6 76 15 73 20</p>
          <div className="social-links">
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 