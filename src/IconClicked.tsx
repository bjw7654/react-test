export function IconClicked() {
  return (
    <>
      <nav>
        <ul className="flex-container">
          <li>
            <a href="#" className="icon-text">
              Home
            </a>
          </li>
          <hr />
          <li>
            <a href="#services" className="icon-text">
              Services
            </a>
          </li>
          <hr />
          <li>
            <a href="#projects" className="icon-text">
              Projects
            </a>
          </li>
          <hr />
          <li>
            <a href="#about" className="icon-text">
              About
            </a>
          </li>
          <hr />
          <li>
            <a className="cta icon-text" href="#contact">
              <button className="contact-button">Contact</button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
