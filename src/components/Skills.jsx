import './Skills.css'

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
  },
  {
    category: 'Tools & Others',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'DevTools']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-container">
        {skillsData.map((skillGroup, index) => (
          <div key={index} className="skill-group">
            <h3>{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.skills.map(skill => (
                <div key={skill} className="skill-item">
                  <span className="skill-dot"></span>
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
