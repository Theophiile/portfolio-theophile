import React from 'react'
import './Projects.scss'
import BookiImg from '../../assets/images/Booki.webp'
import FaireImg from '../../assets/images/Faire.webp'
import GrimoireImg from '../../assets/images/monvieuxgrimoire.webp'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Projet Booki",
      description: "Site de réservation d'hébergements et d'activités",
      image: BookiImg,
      technologies: ["HTML", "CSS"],
      link: "https://theophiile.github.io/projet-booki/"
    },
    {
      id: 2,
      title: "Mon Vieux Grimoire",
      description: "Application de gestion de bibliothèque",
      image: GrimoireImg,
      technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      link: "https://mon-vieux-grimoire-puj1.vercel.app/"
    },
    {
      id: 3,
      title: "Faire Events",
      description: "Site vitrine d'une agence événementielle",
      image: FaireImg,
      technologies: ["React", "Vite", "SASS", "JavaScript"],
      link: "https://faire-events.fr/"
    }
  ]

  return (
    <section id="projets" className="projects">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-image" style={{ backgroundImage: `url(${project.image})` }} aria-label={`Voir le projet ${project.title}`}></a>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 