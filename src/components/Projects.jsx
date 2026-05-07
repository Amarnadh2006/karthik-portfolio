import './Projects.css'

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React and Node.js featuring product browsing, cart management, and secure checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive UI.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current weather and forecasts using public APIs with responsive design.',
    tags: ['React', 'OpenWeather API', 'CSS'],
    link: '#'
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A modern blog platform with markdown support, categories, and search functionality. Perfect for sharing thoughts and ideas.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
