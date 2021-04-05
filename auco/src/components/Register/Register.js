import React from 'react';
import '../../App.css';
import './Register.css';
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import childrenIllustration from '../../assets/illustrations/round.png';
import { Container, Row, Col } from 'reactstrap';
import ButtonMain from './../ButtonMain';

const Register = (props) => {

    return (
        <div className="register">
            <NavBar></NavBar>
        </div>
    );
}

export default Register;