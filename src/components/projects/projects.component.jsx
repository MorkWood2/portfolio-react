import React from 'react';
import './projects.styles.scss';

const Projects = () => (
  <div>
    <div className='project-container' id='projects'>
      <div className='project-content-container'>
        <div className='projects'>
          <a href='https://morkwood2.github.io/neo-art/'>
            <img src={require('../../assets/project1.png')} alt='project' />
          </a>
          <h1>Art_Project_2</h1>
          <h5>Art & Design</h5>

          <p>
            A public declaration of my two greatest loves in this world. Coding
            and art. Inspired by the vast array of public art in Oakland and in
            the spirit of photojournalism, this project follows my journey to
            document and showcase some of my favorite pieces in the ever
            changing underworld of street art in the San Francisco Bay Area.
            Leveraging Google Maps Api & Javascript, I carefully designed this
            page to reflect the hues and cultures of the neighborhoods around
            me, this project is the embodiment of art and composition.
          </p>
        </div>
        <div className='projects'>
          <a href='https://morkwood2.github.io/covid-tracker/'>
            <img src={require('../../assets/covid.png')} alt='project' />
          </a>
          <h1>Covid-19 Tracker</h1>
          <h5>Data Visualization </h5>

          <p>
            COVID19 web dashboard built in React that provides real time data,
            fetched from an open-source API. Utilizes chart.js to spread data to
            visualize metrics. This application is an exercise in functionality,
            all wrapped up in a straightforward interface.
          </p>
        </div>
        <div className='projects'>
          <a href='https://commerce-live.herokuapp.com/'>
            <img src={require('../../assets/project2.png')} alt='project' />
          </a>
          <h1>Olem inc. </h1>
          <h5>E Commerce Website </h5>

          <p>
            Olem Inc. is an e-commerce website that sells appeal. Front-end cart
            and inventory components were designed and developed by integrating
            React, Redux, and the Stripe Api. This progressive web application
            is built with performance, and scale in mind. Tested with Jest, with
            Google’s Firebase as a backend, it is continuously deployed to
            Heroku.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
