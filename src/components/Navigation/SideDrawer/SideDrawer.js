import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../../Logo/Logo'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux';
import './SideDrawer.css'

const sideDrawer = (props) => {
  let drawerStyle = 'sidedrawer close'
  if (props.opened) {
    drawerStyle = 'sidedrawer open'
  }

  return (
    <Aux>
      <Backdrop show={props.opened} clicked={props.clicked} />
      <div className={drawerStyle}>
        <div className="sidedrawer-logo">
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </Aux>
  )
}

export default sideDrawer;