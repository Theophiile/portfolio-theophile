import './Contact.scss';

export default function Contact() {
  return (
    <section className="contact">
      <h2>Me Contacter</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-btn">Envoyer</button>
      </form>
    </section>
  );
}