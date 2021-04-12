import React from 'react';
import '../App.css';

const DashBoard = (props) => {
    const logout = (e) => {
        props.logout();
        window.location.href = '/';
        // return false;
    }

    return (
        <div>
            <h1>You have successfully logged in!</h1>
            <p> Token: {props.token}</p>
            <button onClick={logout}>Log out</button>
        </div>
    );
}

export default DashBoard;