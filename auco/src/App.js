import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage';
import ChooseUser from './components/Register/ChooseUser';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard';

import useToken from './services/useToken';

function App() {
  const { token, setToken, deleteToken } = useToken();
  return (
    <Router>
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/choose-user' component={ChooseUser} />
        <Route path='/login'>
          <Login setToken={setToken} token={token}></Login>
        </Route>
        <Route path='/create-account' component={Register} />
        <Route path='/dashboard'>
          <DashBoard token={token} logout={deleteToken}></DashBoard>
        </Route>
      </div>
    </Router>
  );
}

export default App;