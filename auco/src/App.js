import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';

import LandingPage from './pages/LandingPage/LandingPage';
import ChooseUser from './pages/Register/ChooseUser';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Teacher/Home/Home';
import StudentHome from './pages/Student/Home/StudentHome';
import Clases from './pages/Teacher/Clases/Clases';
import Class from './pages/Teacher/Clases/Class';

import useToken from './services/useToken';

function App() {
  const { token, setToken, isAuthenticated, setId, userId, setRole, role } = useToken();

  return (
    <Router>
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/choose-user' component={ChooseUser} />
        <Route path='/login'>
          <Login setToken={setToken} setId={setId} token={token} setRole={setRole}></Login>
        </Route>
        <Route path='/create-account'>
          <Register setToken={setToken} setId={setId} token={token}></Register>
        </Route>
        <PrivateRoute path='/home' isAuthenticated={isAuthenticated()} token={token} userId={userId} component={role === 'teacher' ? Home : StudentHome} />
        <PrivateRoute path='/clases' isAuthenticated={isAuthenticated()} token={token} userId={userId} component={Clases} />
        <PrivateRoute path='/class/:id' isAuthenticated={isAuthenticated()} token={token} userId={userId} component={Class} />
      </div>
    </Router >
  );
}


export default App;