import React from 'react';

import './subProjects.styles.scss';

const SubProjects = () => (
  <div>
    <div className='subProject-container'>
      <div className='subProject-container'>
        <div className='subProjects'>
          <a href='https://morkwood2.github.io/design-page/'>
            <img src={require('../../assets/subproject1.png')} alt='project' />
          </a>
          <h3>water.</h3>
          <h6>Layout Design</h6>

          <p>
            Organic shapes, color harmony, and svg graphics makes this
            fictitious website <i>almost</i> believable...
          </p>
        </div>
        <div className='subProjects'>
          <a href='https://githubsearch22.netlify.app/'>
            <img src={require('../../assets/subproject2.png')} alt='project' />
          </a>
          <h3>github search</h3>
          <h6>Data Fetch App</h6>

          <p>
            Built in React, this tool allows users to search Github accounts.
          </p>
        </div>
        <div className='subProjects'>
          <a href='https://limitless-retreat-71267.herokuapp.com/login'>
            <img src={require('../../assets/project3.png')} alt='project' />
          </a>
          <h3>People Keeper</h3>
          <h6>MERN Contact Storage App</h6>

          <p>
            Full stack MERN contact manager application with React hooks,
            context & JWT authentication.
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default SubProjects;
