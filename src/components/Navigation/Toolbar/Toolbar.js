import React from 'react';
import Logo from '../../Logo/Logo'
import './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'
const Toolbar = (props) => (
  <header className="toolbar">
    <DrawerToggle toggleClick={props.toggleSlideDrawer} />
    <div className="toolbar-logo">
      <Logo />
    </div>
    <nav className="desktop-only">
      <NavigationItems />
    </nav>
  </header>
)

export default Toolbar;