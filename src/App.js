import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gilbert Cheruiyot</h1>
        <p>Cloud and DevOps Engineer</p>
        <p>Welcome to my portfolio website!</p>
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
          <ul>
            <li>Project 1: Cloud Infrastructure Setup</li>
            <li>Project 2: CI/CD Pipeline Implementation</li>
            <li>Project 3: Automated Deployment Scripts</li>
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>You can reach me at: <a href="mailto:gilbert@example.com">gilbert@example.com</a></p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Gilbert Cheruiyot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
