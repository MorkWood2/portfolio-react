import React from 'react';

import './contact.styles.scss';

const Contact = () => (
  <div>
    <div className='contact-container' id='contact'>
      <h1>Mark Wild</h1>
      <h5>SOFTWARE ENGINEER + VISUAL DESIGNER</h5>
      <p>TECHNICAL SKILLS</p>
      <p>
        PROFICIENT | JavaScript, React, Node, Express, MongoDB, Heroku, HTML5,
        CSS3, SASS, Redux, Git & Github, Bootstrap, Object-Oriented Programming,
        Functional Programming, Agile FAMILIAR | Redux-Saga, GraphQL, GatsbyJS,
        AWS, Jest & React Testing Library, Babel, Firebase, Webpack, SQL,
        Docker, OAuth, Passport, Sockets, Stripe
      </p>
      <p>CREATIVE SKILLS</p>
      <p>
        Sketch App, Final Cut Pro X, Hand-Drawn Illustration, Music Composition
      </p>
      <div className='icons'>
        <a href='https://www.linkedin.com/in/mark-wild/'>
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a href='mailto:mark.wild189@gmail.com'>
          <i className='far fa-envelope'></i>
        </a>
        <a href='https://github.com/MorkWood2'>
          <i className='fab fa-github-alt'></i>
        </a>
      </div>
    </div>
    <footer>© Mark Wild 2020</footer>
  </div>
);

export default Contact;
