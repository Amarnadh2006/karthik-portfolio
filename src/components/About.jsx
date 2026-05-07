import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate student developer with a keen interest in building web applications
            and exploring cutting-edge technologies. With a strong foundation in computer science,
            I enjoy taking on challenging projects and continuously learning new skills.
          </p>
          <p>
            When I'm not coding, you'll find me reading tech blogs, contributing to open-source
            projects, or working on side projects that help me grow as a developer.
          </p>
          <p>
            I believe in writing clean, maintainable code and delivering solutions that provide
            real value to users. I'm always excited to collaborate with others and take on
            new challenges.
          </p>
        </div>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>🎓 Education</h3>
            <p>Currently pursuing Computer Science with focus on Web Development</p>
          </div>
          <div className="highlight-card">
            <h3>💡 Passion</h3>
            <p>Building meaningful digital products that solve real problems</p>
          </div>
          <div className="highlight-card">
            <h3>🚀 Growth</h3>
            <p>Continuously learning and adapting to new technologies</p>
          </div>
        </div>
      </div>
    </section>
  )
}
