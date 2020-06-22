import React from 'react';
import Geometry from '../geometry/geometry.component';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import SubProjects from '../sub-projects/subProjects.component';
import Contact from '../contact/contact.component';

import './main.styles.scss';

const Main = () => (
  <div>
    <Geometry />
    <About />
    <Projects />
    <SubProjects />
    <Contact />
  </div>
);

export default Main;
