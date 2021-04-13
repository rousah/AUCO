import React from 'react';
import '../App.css';
import NavBarTeacher from '../components/NavBar/NavBarTeacher'

const DashBoard = (props) => {
    return (
        <div>
            <NavBarTeacher></NavBarTeacher>
            <h1>You have successfully logged in!</h1>
        </div>
    );
}

export default DashBoard;