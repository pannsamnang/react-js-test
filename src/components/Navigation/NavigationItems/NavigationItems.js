import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
  <ul className="navigation-items">
    <NavigationItem link="/" active>Home</NavigationItem>
    <NavigationItem link="/" >Check out</NavigationItem>
  </ul>
);

export default navigationItems;