import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import NavBar from './NavBar';


class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            app_name: 'AUCO',
            language: 'Español'
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <NavBar></NavBar>
        );
    }
}

export default LandingPage;