import React from 'react';
import '../../App.css';
import './Login.css';
import NavBar from '../NavBar/NavBar';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import ButtonMain from '../Buttons/ButtonMain';

const Login = (props) => {

    return (
        <div className="fullscreen login">
            <NavBar showregister></NavBar>
            <div className="d-flex h-100 align-items-center">
                <Container className="align-content-center login-container w-25 p-5">
                    <div className="d-flex justify-content-center mb-4">
                        <h3 style={{ fontWeight: 700 }}>Iniciar sesión:</h3>
                    </div>
                    <Form>
                        <FormGroup>
                            <Label for="user">
                                <h6>Correo electrónico o usuario:</h6>
                            </Label>
                            <Input type="text" name="user" className="mb-3" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                <h6>Contraseña:</h6>
                            </Label>
                            <Input type="password" name="password" />
                            <a href="" className="mb-3">¿Has olvidado tu contraseña?</a>
                        </FormGroup>
                        <Button style={{ background: "none", border: "none" }} className="w-100 mt-4 d-flex justify-content-center">
                            <ButtonMain buttonText="ENTRAR" className="px-3" fontWeight="500" fontSize="20px"></ButtonMain>
                        </Button>
                        <div className="d-flex justify-content-center">
                            <a href="/choose-user">Crear cuenta</a>
                        </div>
                    </Form>
                </Container>
            </div>
        </div>
    );
}

export default Login;