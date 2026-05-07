import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect!</h3>
          <p>
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
          
          <div className="contact-links">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <a href="mailto:2403a51055@sru.edu.in">D Karthik </a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/dandu-karthik/" target="_blank" rel="noopener noreferrer">
                Dandu Karthik
                </a>
              </div>
            </div>
            
            <div className="contact-item">
              <span className="contact-icon">🐙</span>
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/Amarnadh2006/karthik-portfolio" target="_blank" rel="noopener noreferrer">
                  github.com/karthik
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            {submitted ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
