import React from 'react'
import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SlideDrawer from '../Navigation/SideDrawer/SideDrawer'
import './Layout.css'
const Layout = (props) => (
  <Aux>
    <Toolbar />
    <SlideDrawer />
    <main className="content">
      { props.children }
    </main>
  </Aux>
)

export default Layout;