import './Portfolio.scss';

const projects = [
  {
    title: 'Site E-commerce',
    description: 'Plateforme de vente en ligne avec panier et paiement',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Application Météo',
    description: 'Application de prévisions météo en temps réel',
    technologies: ['React', 'API REST'],
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}