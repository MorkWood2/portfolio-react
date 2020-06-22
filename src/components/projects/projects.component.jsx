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
            Beam Up is an ethereal, immersive 3D experience that sends a user on
            a journey beyond our solar system, ultimately revealing the beauty
            and splendor of the existence of life on earth. Traveling through
            the universe, the user will discover different earth-like exoplanets
            to be considered for possible human habitation, and end the journey
            with a wish for the universe. Interacting with each planet reveals
            data sourced from NASA along with its habitability status.
            Aesthetically, this web app has a dreamy, uplifting, feminine feel,
            and implements the NERDS stack in combination with Three.JS to bring
            the 3D space to life.
          </p>
        </div>
        <div className='projects'>
          <a href='https://commerce-live.herokuapp.com/'>
            <img src={require('../../assets/project2.png')} alt='project' />
          </a>
          <h1>Olem inc. </h1>
          <h5>E Commerce Website </h5>

          <p>
            Beam Up is an ethereal, immersive 3D experience that sends a user on
            a journey beyond our solar system, ultimately revealing the beauty
            and splendor of the existence of life on earth. Traveling through
            the universe, the user will discover different earth-like exoplanets
            to be considered for possible human habitation, and end the journey
            with a wish for the universe. Interacting with each planet reveals
            data sourced from NASA along with its habitability status.
            Aesthetically, this web app has a dreamy, uplifting, feminine feel,
            and implements the NERDS stack in combination with Three.JS to bring
            the 3D space to life.
          </p>
        </div>
        <div className='projects'>
          <a href='https://limitless-retreat-71267.herokuapp.com/login'>
            <img src={require('../../assets/project3.png')} alt='project' />
          </a>
          <h1>People Keeper</h1>
          <h5>Contact Storage App</h5>

          <p>
            Beam Up is an ethereal, immersive 3D experience that sends a user on
            a journey beyond our solar system, ultimately revealing the beauty
            and splendor of the existence of life on earth. Traveling through
            the universe, the user will discover different earth-like exoplanets
            to be considered for possible human habitation, and end the journey
            with a wish for the universe. Interacting with each planet reveals
            data sourced from NASA along with its habitability status.
            Aesthetically, this web app has a dreamy, uplifting, feminine feel,
            and implements the NERDS stack in combination with Three.JS to bring
            the 3D space to life.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
