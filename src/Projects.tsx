import './Projects.css';
import Project from './Project.tsx';
import FilmCriticPhoto1 from './images/filmCritic/filmCritic_SignInAndOut.png';
import FilmCriticPhoto2 from './images/filmCritic/filmCritic_Feed.png';
import FilmCriticPhoto3 from './images/filmCritic/filmCritic_FilmDetails.png';
import FilmCriticPhoto4 from './images/filmCritic/filmCritic_recommendations.png';
import FilmCriticPhoto5 from './images/filmCritic/filmCritic_FilmDetails.png';
import FilmCriticPhoto6 from './images/filmCritic/filmCritic_FilmDetailsTrailers.png';
import FilmCriticPhoto7 from './images/filmCritic/filmCritic_FilmDetailsLinks.png';
import FilmCriticPhoto8 from './images/filmCritic/filmCritic_Rating.png';
import FilmCriticPhoto9 from './images/filmCritic/filmCritic_Profile.png';
import FilmCriticPhoto10 from './images/filmCritic/filmCritic_Profile2.png';
import FilmCriticPhoto11 from './images/filmCritic/filmCritic_Profile3.png';

import KeyWordReliefPhoto1 from './images/keywordRelief/KeywordRelief.png';
import KeyWordReliefPhoto2 from './images/keywordRelief/loading.png';
import KeyWordReliefPhoto3 from'./images/keywordRelief/selectVocabWords.png';
import KeyWordReliefPhoto4 from './images/keywordRelief/keywordList.png';
import KeyWordReliefPhoto5 from './images/keywordRelief/deletePopup.png';
import KeyWordReliefPhoto6 from './images/keywordRelief/keywordListAfterdelete.png';

export default function Projects() {
  const project1 = {
    photo: [
      FilmCriticPhoto1,
      FilmCriticPhoto2,
      FilmCriticPhoto3,
      FilmCriticPhoto4,
      FilmCriticPhoto5,
      FilmCriticPhoto6,
      FilmCriticPhoto7,
      FilmCriticPhoto8,
      FilmCriticPhoto9,
      FilmCriticPhoto10,
      FilmCriticPhoto11,
    ],
    link: 'http://filmcritic-dev.us-west-1.elasticbeanstalk.com/',
    title: 'FilmCritic',
    projectDetails: `
    Welcome to FilmCritic, where the magic of movies meets the warmth of community! I'm thrilled to showcase this project, a social media app designed for film enthusiasts seeking more than just recommendations. FilmCritic goes beyond the ordinary, leveraging the power of AI to enhance your cinematic journey.
    
    Crafted with a user-centric approach, the interface is a blend of React with TypeScript and Express, ensuring a seamless and engaging experience. Security is a top priority, with PostgreSQL providing robust data storage. JWT-based user authentication and error middleware have been seamlessly integrated to prioritize safety without compromising on user experience.
    
    FilmCritic is more than just a platform; it's a space for users to shape their movie experience. With a range of CRUD operations, you have the freedom to create and personalize profiles, curate watchlists, and share your thoughts through posts and user-generated content. Complete control over edits and deletions empowers users to tailor their FilmCritic journey.
    
    Excited to share this cinematic adventure with you! Explore the project on GitHub and join the FilmCritic community in celebrating the joy of movies together. 🎥🍿
    `,
    flexDirection: 'row',
  };

  const project2 = {
    photo: [
      KeyWordReliefPhoto1,
      KeyWordReliefPhoto2,
      KeyWordReliefPhoto3,
      KeyWordReliefPhoto4,
      KeyWordReliefPhoto5,
      KeyWordReliefPhoto6,
    ],
    link: 'https://aiden-peace300.github.io/KeyWord-Relief-AJAX/',
    title: 'Keyword Relief',
    projectDetails: `
    Welcome to Keyword Relief, your friendly companion in the quest for that elusive word! Ever find yourself stuck, trying to recall that perfect term? Keyword Relief has your back.

    This application, powered by the wonders of AI, is designed to rescue you from the word-finding dilemma. Imagine having a tool that not only understands your language needs but also makes the journey delightful.
    
    Under the hood, Keyword Relief employs asynchronous magic to fetch data from a REST API, bringing you personalized information with the help of OpenAI. JavaScript event listeners and custom functions—that not only make page transitions seamless but also create personalized vocabulary lists just for you.
    
    And let's talk about user experience—because we believe it should be a joy. Our attention to detail in DOM manipulation ensures that every interaction is smooth and efficient. Keyword Relief is not just an app; it's your linguistic sidekick, enhancing your language journey in the most friendly and intuitive way.
    
    Curious? Click the image on the right and it will lead you to keyword Relief live site. Say goodbye to word-related headaches and hello to the ease of Keyword Relief. Happy word hunting! 🚀📚
    `,
    flexDirection: 'row-reverse',
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h1>Projects</h1>
      <Project
        photos={project1.photo}
        link={project1.link}
        Title={project1.title}
        projectDetails={project1.projectDetails}
        flexDirection={project1.flexDirection}
      />
      <br />
      <br />
      <br />
      <br />
      <Project
        photos={project2.photo}
        link={project2.link}
        Title={project2.title}
        projectDetails={project2.projectDetails}
        flexDirection={project2.flexDirection}
      />
    </div>
  );
}
