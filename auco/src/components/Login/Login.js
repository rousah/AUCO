import React from 'react';
import '../../App.css';
import './Login.css';
import NavBar from '../NavBar/NavBar';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import ButtonMain from '../Buttons/ButtonMain';

const Login = (props) => {

    return (
        <div className="fullscreen">
            <NavBar showregister></NavBar>
            <div className="d-flex h-100 align-items-center">
                <Container className="align-content-center h-50 login w-25">
                    <h2>Iniciar sesión</h2>
                </Container>
            </div>
        </div>
    );
}

export default Login;