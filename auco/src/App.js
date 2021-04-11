import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import ChooseUser from './components/Register/ChooseUser';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/choose-user' component={ChooseUser} />
          <Route path='/login' component={Login} />
          <Route path='/create-account' component={Register} />
          <Route path='/dashboard' component={DashBoard} />
        </div>
      </Router>
    );
  }
}

export default App;