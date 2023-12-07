import './About.css';

export default function About() {
  return (
    <div>
      <h1>Aiden's Journey</h1>
      <div className="about-container">
        <div>
          <p
            style={{
              color: 'white',
              fontSize: '1rem',
              marginBottom: '0.5rem',
              marginLeft: '1rem',
              marginRight: '1rem',
              textAlign: 'left',
            }}>
            In the expansive realm of coding, I stand as a Full Stack Developer
            Extraordinaire, a maestro weaving seamless harmonies between
            front-end elegance and back-end functionality. The dynamic
            challenges of web development are my playground, where I craft
            intuitive user interfaces and navigate the intricate labyrinths of
            server-side logic.
            <br />
            <br />
            Venturing beyond the digital frontiers, I find solace in the analog
            embrace of vinyl. As a Vinyl Enthusiast, my collection serves as a
            living chronicle, each record—be it the timeless "Led Zeppelin 1996
            - Led Zeppelin," the evocative "DAMN Kendrick Lamar," or the iconic
            "Linkin Park - Meteora"—opening portals to different eras and
            inviting me on a sonic journey through the rich tapestry of musical
            history.
            <br />
            <br />
            The stars, like old friends, beckon me to Joshua Tree—a celestial
            sanctuary where I unfurl my telescope and lose myself in the vast
            expanse of the night sky. The dance of constellations, the twinkle
            of the North Star, and the cosmic symphony of distant galaxies
            become poetry in the gaze of my telescope.
            <br />
            <br />
            Yet, my passions extend beyond the celestial. In the realm of
            physicality, Muy Thai becomes my canvas for strength and discipline,
            a discipline I've honed over a year of rigorous training. The
            artistry in the dance of combat and the satisfaction in pushing my
            physical limits reveal another facet of my multifaceted journey.
            <br />
            <br />
            Join me on this odyssey where code, vinyl, stars, and the art of
            combat converge into a tapestry that defines the essence of who I
            am—Aiden, the developer with a heart that beats to the rhythm of
            diverse passions. Together, let's embark on this intricate adventure
            that intertwines technology, music, the cosmos, and the pursuit of
            physical excellence.{' '}
          </p>
        </div>
        <a
          href="https://github.com/Aiden-Peace300"
          target="_blank"
          rel="noopener noreferrer">
          <div className="photoOfAidenInRecordStore"></div>
        </a>
      </div>
    </div>
  );
}
