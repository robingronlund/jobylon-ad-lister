import React from 'react';
import logo from '../../assets/site-logo.svg';

import './header.css';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <img src="dist/site-logo.svg" alt="logo" />
      </header>
    </div>
  );
};
