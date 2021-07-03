import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import PrivateRoute from './PrivateRoute';

import LandingPage from './pages/LandingPage/LandingPage';
import ChooseUser from './pages/Register/ChooseUser';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import StudentHome from './pages/Student/Home/StudentHome';
import Clases from './pages/Teacher/Clases/Clases';
import Class from './pages/Teacher/Clases/Class';
import Profile from './pages/Teacher/Profile/Profile';
import StudentProfile from './pages/Student/Profile/StudentProfile';
import Questionnaire from './pages/Student/Questionnaires/Questionnaire';

import useToken from './services/useToken';

function App() {
  const { token, setToken, isAuthenticated, setId, userId, setRole, role, setCurrentUser } = useToken();

  return (
    <Router>
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/choose-user' component={ChooseUser} />
        <Route path='/login'>
          <Login setToken={setToken} setId={setId} token={token} setRole={setRole} setCurrentUser={setCurrentUser}></Login>
        </Route>
        <Route path='/create-account'>
          <Register setToken={setToken} setId={setId} token={token} setRole={setRole} setCurrentUser={setCurrentUser}></Register>
        </Route>
        <PrivateRoute path='/home' isAuthenticated={isAuthenticated()} token={token} userId={userId} component={role === 'teacher' ? Clases : StudentHome} />
        <PrivateRoute path='/clases' isAuthenticated={isAuthenticated()} token={token} userId={userId} component={Clases} />
        <PrivateRoute path='/profile' isAuthenticated={isAuthenticated()} token={token} userId={userId} component={role === 'teacher' ? Profile : StudentProfile} />
        <PrivateRoute path='/class/:id' isAuthenticated={isAuthenticated()} token={token} userId={userId} component={Class} />
        <PrivateRoute path='/questionnaire/:questionnaireId' isAuthenticated={isAuthenticated()} token={token} userId={userId} component={Questionnaire} />
      </div>
    </Router >
  );
}


export default App;