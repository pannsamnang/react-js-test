import React, { Component } from 'react'
import Aux from '../Aux/Aux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SlideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'
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