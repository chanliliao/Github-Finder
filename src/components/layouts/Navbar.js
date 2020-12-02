import React from 'react';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar bg-primary flex'>
      <h1>
        <FaGithub size='1.5rem' />
        <span className='m-1'>{title}</span>
      </h1>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
