import React from 'react';
import './Header.css'
import user from '../../img/user.png'

export default ({ black }) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt='logo da netflix'></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src={user} alt="usuario" />
        </a>
      </div>
    </header >
  );
}