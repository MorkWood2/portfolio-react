import React from 'react';
import './projects.styles.scss';

const Projects = () => (
  <div>
    <div className='project-container'>
      <div className='project-1'>
        <img src={require('../../assets/project1.jpg')} alt='' />
        <h1>Olen clothes</h1>
        <h2>E COMMERCE WEBSITE </h2>
        <a href='#'>Olen clothes</a>
        <p>
          Beam Up is an ethereal, immersive 3D experience that sends a user on a
          journey beyond our solar system, ultimately revealing the beauty and
          splendor of the existence of life on earth. Traveling through the
          universe, the user will discover different earth-like exoplanets to be
          considered for possible human habitation, and end the journey with a
          wish for the universe. Interacting with each planet reveals data
          sourced from NASA along with its habitability status. Aesthetically,
          this web app has a dreamy, uplifting, feminine feel, and implements
          the NERDS stack in combination with Three.JS to bring the 3D space to
          life.
        </p>
      </div>
      <div className='project-2'></div>
      <div className='projecr-3'></div>
    </div>
  </div>
);

export default Projects;
