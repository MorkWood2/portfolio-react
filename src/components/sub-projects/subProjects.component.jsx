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
          <h3>Water.</h3>
          <h6>Layout Design</h6>

          <p>
            Organic shapes, color harmony, and svg graphics makes this
            fictitious website almost believable...
          </p>
        </div>
        <div className='subProjects'>
          <a href='https://githubsearch22.netlify.app/'>
            <img src={require('../../assets/subproject2.png')} alt='project' />
          </a>
          <h3>Github Search</h3>
          <h6>Data Fetch App</h6>

          <p>
            Built in React, this tool allows users to search Github accounts.
          </p>
        </div>
        <div className='subProjects'>
          <a href='https://powerful-beyond-97610.herokuapp.com/art'>
            <img src={require('../../assets/subproject3.png')} alt='project' />
          </a>
          <h3>OakShare</h3>
          <h6>CRUD platform</h6>

          <p>An art share application for Oakland based artists.</p>
        </div>
      </div>
    </div>
  </div>
);
export default SubProjects;
