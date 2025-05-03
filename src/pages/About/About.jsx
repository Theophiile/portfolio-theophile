import './About.scss';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src="../../assets/profile.jpg" alt="Théo" />
        </div>
        <div className="about-content">
          <h2>À propos de moi</h2>
          <p>
            Passionné par le développement web depuis 5 ans, j'ai suivi une formation intensive 
            chez OpenClassrooms pour perfectionner mes compétences. J'aime créer des interfaces 
            intuitives et résoudre des problèmes complexes.
          </p>
          <p>
            En dehors du code, je suis amateur de photographie et de randonnée en montagne.
          </p>
        </div>
      </div>
    </section>
  );
}