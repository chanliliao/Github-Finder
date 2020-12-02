import React, { Component } from 'react';

class UserItem extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;

    return (
      <div className='card text-center'>
        <img
          className='round-img'
          style={{ width: '60px' }}
          src={avatar_url}
          alt=''
        />
        <h3>{login}</h3>
        <div>
          <a className='btn btn-dark btn-sm my-1' href={html_url}>
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
