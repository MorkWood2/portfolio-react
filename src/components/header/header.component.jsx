import React from 'react';

import './header.styles.scss';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => (
  <Navbar bg='white' expand='xl' className='fixed-top shadow-sm'>
    <div className='pl-4 pr-4 h6 '>
      <div className='link-item' onClick={() => scroll.scrollToTop()}>
        <img
          src={require('../../assets/logo.png')}
          alt='logo'
          className='logo'
        />
      </div>
    </div>

    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto nav '>
        <Link
          to='about'
          smooth={true}
          duration={1000}
          className='pl-4 pr-4 h6 '
        >
          <div className='link-item'>ABOUT</div>
        </Link>

        <Link
          to='projects'
          smooth={true}
          duration={1000}
          className='pl-4 pr-4 h6 '
        >
          <div className='link-item'>PROJECTS</div>
        </Link>
        <Link
          to='contact'
          smooth={true}
          duration={1000}
          className='pl-4 pr-4 h6 '
        >
          <div className='link-item'>CONTACT</div>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
