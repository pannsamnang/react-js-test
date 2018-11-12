import React from 'react';
import Logo from '../../Logo/Logo'
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems'
const Toolbar = (props) => (
  <header className="toolbar">
    <div>Menu</div>
    <div className="toolbar-logo">
      <Logo />
    </div>
    <nav className="desktop-only">
      <NavigationItems />
    </nav>
  </header>
)

export default Toolbar;