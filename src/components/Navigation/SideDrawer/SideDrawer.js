import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import './SideDrawer.css'

const sideDrawer = (props) => (
  <div className="sidedrawer">
    <div className="sidedrawer-logo">
      <Logo />
    </div>
    <NavigationItems />
  </div>
)

export default sideDrawer;