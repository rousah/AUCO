import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';

import LandingPage from './components/LandingPage/LandingPage';
import ChooseUser from './components/Register/ChooseUser';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Home from './components/Teacher/Home/Home';
import Clases from './components/Teacher/Clases/Clases';

import useToken from './services/useToken';

function App() {
  const { token, setToken, isAuthenticated } = useToken();

  return (
    <Router>
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/choose-user' component={ChooseUser} />
        <Route path='/login'>
          <Login setToken={setToken} token={token}></Login>
        </Route>
        <Route path='/create-account'>
          <Register setToken={setToken} token={token}></Register>
        </Route>
        <PrivateRoute path='/home' isAuthenticated={isAuthenticated()} token={token} component={Home}/>
        <PrivateRoute path='/clases' isAuthenticated={isAuthenticated()} token={token} component={Clases}/>
      </div>
    </Router >
  );
}


export default App;