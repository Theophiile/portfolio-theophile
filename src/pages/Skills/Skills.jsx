import React from 'react'
import './Skills.scss'

const Skills = () => {
  const skills = [
    {
      category: "Front-end",
      items: ["React", "Vue.js", "JavaScript", "HTML5", "CSS3", "SASS"]
    },
    {
      category: "Back-end",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Outils",
      items: ["Git", "VS Code", "Figma", "Lighthouse"]
    }
  ]

  return (
    <section id="competences" className="skills">
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <div className="skill-items">
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills 