import React from 'react'
import './Projects.scss'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Projet 1",
      description: "Description du premier projet",
      image: "https://picsum.photos/400/300?random=1",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Projet 2",
      description: "Description du deuxième projet",
      image: "https://picsum.photos/400/300?random=2",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Projet 3",
      description: "Description du troisième projet",
      image: "https://picsum.photos/400/300?random=3",
      technologies: ["Angular", "Firebase", "TypeScript"],
      link: "#"
    }
  ]

  return (
    <section id="projets" className="projects">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Voir le projet</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 