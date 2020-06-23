import React from 'react';
import './about.styles.scss';

const About = () => (
  <div>
    <div className='container-info' id='about'>
      <div className='image-container'>
        <img src={require('../../assets/portrait.jpg')} alt='portrait of man' />
      </div>
      <div className='intro-text-container'>
        <h1>
          hello, i'm <span>mark</span>{' '}
        </h1>
        <p>
          I am a <span>software engineer</span> and <span>visual designer</span>{' '}
          who is passionate about clean code and great UI/UX
        </p>
        <p>
          In software engineering, I see myself as a fullstack web developer
          with a strength in the frontend. In design, my specialties are digital
          media, video, and web design. I have a unique ability to rely on my
          own aesthetic sensibilities to create elegant user interfaces,
          leverage product insights to develop features, and rapidly learn new
          technologies along the way.
        </p>
        <p>
          My programming background has given me a rich, multi-disciplinary
          array of experiences: designing frontend architecture with React and
          Redux, developing single page applications with unidirectional data
          flow and persistence. Handling data requests with Express and Node
          scripts.
        </p>
        <p>
          Highly curious, analytical, and creative, I am driven by the challenge
          to constantly learn new things and execute with equal care to both
          form and function.
        </p>
      </div>
    </div>
  </div>
);

export default About;
