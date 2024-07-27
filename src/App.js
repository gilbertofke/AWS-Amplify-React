import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#hire-me" className="hire-me-button">Hire Me</a></li>
          </ul>
        </nav>
        <h1>Gilbert Cheruiyot</h1>
        <p>Cloud and DevOps Engineer</p>
        <p>Welcome to my portfolio website!</p>
        <p>I help businesses create, manage, and optimize their infrastructure on the cloud and streamline their development work using DevOps.</p>
        <a href="#hire-me" className="hire-me-cta-button">Hire Me</a>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a passionate Cloud and DevOps Engineer with experience in managing and deploying cloud infrastructure. I have expertise in AWS, Terraform, Docker, and more.
          </p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-container">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>Cloud Infrastructure Setup</p>
              <button>Read More</button>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>CI/CD Pipeline Implementation</p>
              <button>Read More</button>
            </div>
            <div className="project-card">
              <h3>Project 3</h3>
              <p>Automated Deployment Scripts</p>
              <button>Read More</button>
            </div>
            <div className="project-card">
              <h3>Project 4</h3>
              <p>Monitoring and Logging Setup</p>
              <button>Read More</button>
            </div>
          </div>
        </section>
        <section id="testimonials">
          <h2>Testimonials</h2>
          <p>Coming soon...</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Gilbert Cheruiyot. All rights reserved.</p>
        <div className="social-links">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
