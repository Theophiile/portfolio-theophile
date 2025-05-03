import './Competences.scss';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Git', level: 80 },
];

export default function Competences() {
  return (
    <section className="competences">
      <h2>Mes Compétences</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.level}%` }}
              ></div>
              <span>{skill.level}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}