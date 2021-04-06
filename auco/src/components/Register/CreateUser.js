import React from 'react';
import '../../App.css';
import './Register.css';
import NavBar from '../NavBar/NavBar';
import { Container, Row, Col } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ButtonMain from '../Buttons/ButtonMain';

const CreateUser = (props) => {

    return (
        <div className="register fullscreen">
            <NavBar showlogin></NavBar>
            <div className="d-flex h-100 align-items-center">
                <Container className="align-content-center h-75 create-user">
                    <Row>
                        <Col xs="6" className="p-5 explanation" style={{ color: "white" }}>
                            <h1 style={{ fontWeight: "800" }} className="mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </h1>
                            <p>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                <br /><br />
                                Después de crear tu cuenta de pofesorado podrás dar de alta una clase para dar acceso a tus alumnos al contenido de la plataforma.
                            </p>
                        </Col>
                        <Col xs="6" className="p-5 registration-form">
                            <h4 style={{ fontWeight: "700" }} className="mb-4">Crear cuenta de profesor/a:</h4>
                            <Form>
                                <FormGroup>
                                    <Label for="name">
                                        <h6>Nombre:</h6>
                                    </Label>
                                    <Input type="text" name="name" className="mb-2" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="surname">
                                        <h6>Apellidos:</h6>
                                    </Label>
                                    <Input type="text" name="surname" className="mb-2" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">
                                        <h6>Correo electrónico:</h6>
                                    </Label>
                                    <Input type="email" name="email" className="mb-2" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="institution">
                                        <h6>Institución:</h6>
                                    </Label>
                                    <Input type="text" name="intitution" className="mb-2" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">
                                        <h6>Contraseña:</h6>
                                    </Label>
                                    <Input type="password" name="password" className="mb-2" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="passwordCheck">
                                        <h6>Repetir contraseña:</h6>
                                    </Label>
                                    <Input type="password" name="passwordCheck" className="mb-2" />
                                </FormGroup>
                                <Button style={{background: "none", border: "none"}}>
                                    <ButtonMain buttonText="CREAR CUENTA" className="mt-5">
                                    </ButtonMain>
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default CreateUser;