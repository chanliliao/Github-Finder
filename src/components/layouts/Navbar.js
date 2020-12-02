import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className='navbar bg-primary flex'>
        <h1>
          <FaGithub size='1.5rem' />
          <span className='m-1'>{this.props.title}</span>
        </h1>
      </nav>
    );
  }
}

export default Navbar;
