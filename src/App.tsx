import './App.css';
import logo from '../public/images/aidensLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import About from './About.tsx';
import Pdf from '../public/documents/Document.pdf';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IconClicked } from './IconClicked.tsx';
import Qualifications from './Qualifications.tsx';
import Footer from './Footer.tsx';

export default function App() {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible);
  };

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <div className="nav__links">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#qualifications">Qualifications</a>
              </li>
            </ul>
          </nav>
          <a className="cta" href="#contact">
            <button className="contact-button">Contact</button>
          </a>
        </div>
        <div className="bars-icon" onClick={toggleMobileNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
      {mobileNavVisible && (
        <div className="list-container">
          <IconClicked />
        </div>
      )}
      <section id="home" className="meet">
        <div className="container">
          <div className="content">
            <div className="meet-main">
              <div className="photoOfAiden"></div>
              <div className="meet-text">
                <h2 className="position">Front-End React Developer</h2>
                <p>
                  Hi, I'm Aiden Peace. A passionate Front-end React Developer
                  based in Lake Forest, California. 📍
                </p>
                <div className="contact-row">
                  <a
                    href="https://www.linkedin.com/in/aiden-peace-025918211/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fab fa-linkedin"
                    />
                  </a>
                  <a
                    href="https://github.com/Aiden-Peace300"
                    target="_blank"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fab fa-github"
                    />
                  </a>
                  <a
                    className="resume"
                    href={Pdf}
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="resume-button">View Resume</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          <div className="skill-content">
            <div className="skills">
              <Skills />
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="container">
          <div className="project-content">
            <div className="projects">
              <Projects />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about">
              <About />
            </div>
          </div>
        </div>
      </section>
      <section id="qualifications" className="qualifications">
        <div className="container">
          <div className="qualifications-content">
            <div className="qualifications">
              <Qualifications />
            </div>
          </div>
        </div>
      </section>
      <section id="footer" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
