import React from 'react';
import Logo from '../../Logo/Logo'
import './Toolbar.css';

const Toolbar = (props) => (
  <header className="toolbar">
    <div>Menu</div>
    <Logo className="logo" />
    <nav>...</nav>
  </header>
)

export default Toolbar;