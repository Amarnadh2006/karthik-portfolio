import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Karthik Dandu</h1>
        <p className="hero-subtitle">Full Stack Developer | Problem Solver | Student | </p>
        <p className="hero-description">
          I create beautiful and functional digital experiences. Currently exploring web technologies
          and building projects that make a difference.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="avatar-placeholder">👨‍💻</div>
      </div>
    </section>
  )
}
