import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="horizontal-line"></div>
      <p className="text">© Aiden Peace, 2023. All rights reserved.</p>
      <div>
        <h2 className="follow-me-text">Follow Me</h2>
        <a
          href="https://www.linkedin.com/in/aiden-peace-025918211/"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="fab fa-linkedin" />
        </a>
        <a
          href="https://github.com/Aiden-Peace300"
          target="_blank"
          rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="fab fa-github" />
        </a>
      </div>
      <p className="text">© 2023. Vue.js & Tailwind CSS Portfolio.</p>
    </div>
  );
}
