import React from 'react';
import logo from '../../site-logo.svg'

import './header.css';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
    </div>
  );
};
