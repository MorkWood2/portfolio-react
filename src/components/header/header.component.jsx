import React from 'react';

import './header.styles.scss';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg='light' expand='xl'>
    <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        <Nav.Link href='#home'>ABOUT</Nav.Link>
        <Nav.Link href='#link'>PROJECTS</Nav.Link>
        <Nav.Link href='#link'>CONTACT</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
