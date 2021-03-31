import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={LandingPage} />
          <Route path='/login' component={LandingPage} />
        </div>
      </Router>
    );
  }
}

export default App;