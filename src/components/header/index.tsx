import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/site-logo.svg';

import './header.css';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </header>
    </div>
  );
};
