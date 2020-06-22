import React from 'react';

import './header.styles.scss';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg='white' expand='xl' className='fixed-top shadow-sm'>
    <Navbar.Brand href='#home'>
      <img src={require('../../assets/logo.png')} alt='logo' className='logo' />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto nav '>
        <Nav.Link className='ml-4 mr-4 h6' href='#home'>
          ABOUT
        </Nav.Link>
        <Nav.Link className='ml-4 mr-4 h6' href='#link'>
          PROJECTS
        </Nav.Link>
        <Nav.Link className='ml-4 mr-4 h6' href='#link'>
          CONTACT
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
