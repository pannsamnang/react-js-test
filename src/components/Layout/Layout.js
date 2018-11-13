import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SlideDrawer from '../Navigation/SideDrawer/SideDrawer'
import './Layout.css'
class Layout extends Component {
  state = {
    toggleSlideDrawer: false
  }

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => ({ toggleSlideDrawer: !prevState.toggleSlideDrawer }))
  }

  render() {
    return (
      <Aux>
        <Toolbar toggleSlideDrawer={this.toggleSideDrawerHandler }/>
        <SlideDrawer opened={this.state.toggleSlideDrawer} clicked={this.toggleSideDrawerHandler} />
        <main className="content">
          { this.props.children }
        </main>
      </Aux>
    )
  }
}

export default Layout;