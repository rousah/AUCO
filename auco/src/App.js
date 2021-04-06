import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import Register from './components/Register/Register';
import CreateUser from './components/Register/CreateUser';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={LandingPage} />
          <Route path='/create-account' component={CreateUser} />
        </div>
      </Router>
    );
  }
}

export default App;