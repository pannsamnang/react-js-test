import React, { Component } from 'react';

import Layout from './components/Layout/Layout'
import Toolbar from './components/Navigation/Toolbar/Toolbar'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Toolbar />
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
