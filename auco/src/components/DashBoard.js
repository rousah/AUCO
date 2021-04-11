import React from 'react';
import '../App.css';

const DashBoard = (props) => {
    return (
        <div>
            <h1>You have successfully logged in!</h1>
            <p> Token: {props.location.state.token}</p>
        </div>
    );
}

export default DashBoard;