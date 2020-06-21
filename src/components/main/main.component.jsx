import React from 'react';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import SubProjects from '../sub-projects/subProjects.component';

import './main.styles.scss';

const Main = () => (
  <div>
    <About />
    <Projects />
    <SubProjects />
  </div>
);

export default Main;
