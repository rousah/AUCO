import React from 'react';
import '../../App.css';
import './Register.css';
import NavBarLanding from '../../components/NavBar/NavBarLanding';
import { Container, Row, Col } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { postRegister } from '../../services/registrateUser';
import PropTypes from 'prop-types';

const initialFormData = Object.freeze({
    name: "",
    surname: "",
    institution: "",
    email: "",
    password: ""
});

const Register = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);
    let history = useHistory();

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        postRegister(formData).then(response => {
            // if register success
            if (response) {
                props.setToken(response.token);
                history.push({
                    pathname: '/home',
                    state: { response }
                });  // redirect
            }
        });

    };

    return (
        <div className="register fullscreen">
            <NavBarLanding showlogin></NavBarLanding>
            <div className="d-flex h-100 align-items-center">
                <Container className="align-content-center h-75 create-user">
                    <Row>
                        <Col xs="6" className="p-5 explanation" style={{ color: "white" }}>
                            <h1 style={{ fontWeight: "800" }} className="mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </h1>
                            <p style={{ fontWeight: 600, fontSize: '20px' }}>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                <br /><br />
                                Después de crear tu cuenta de pofesorado podrás dar de alta una clase para dar acceso a tus alumnos al contenido de la plataforma.
                            </p>
                        </Col>
                        <Col xs="6" className="pt-5 pb-4 ps-5 pe-5 registration-form">
                            <h4 style={{ fontWeight: "700" }} className="mb-4">Crear cuenta de profesor/a:</h4>
                            <Form>
                                <FormGroup>
                                    <Label for="name">
                                        <h6>Nombre:</h6>
                                    </Label>
                                    <Input type="text" name="name" className="mb-3" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="surname">
                                        <h6>Apellidos:</h6>
                                    </Label>
                                    <Input type="text" name="surname" className="mb-3" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">
                                        <h6>Correo electrónico:</h6>
                                    </Label>
                                    <Input type="email" name="email" className="mb-3" onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="institution">
                                        <h6>Institución:</h6>
                                    </Label>
                                    <Input
                                        type="search"
                                        name="institution"
                                        placeholder="Escribe para buscar..."
                                        list="institutions"
                                        className="mb-2"
                                        onChange={handleChange}
                                    />
                                    <datalist id="institutions">
                                        <option value="Universidad Politécnica de Valencia" />
                                        <option value="IES Sierra Almijara" />
                                        <option value="IES José Cuervo" />
                                        <option value="IES Veles e Vents" />
                                        <option value="CEIP Joan XXIII" />
                                    </datalist>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="password">
                                        <h6>Contraseña:</h6>
                                    </Label>
                                    <Input type="password" name="password" onChange={handleChange} />
                                    <FormText className="mb-3">Mínimo 8 caracteres.</FormText>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="passwordCheck">
                                        <h6>Repetir contraseña:</h6>
                                    </Label>
                                    <Input type="password" name="passwordCheck" className="mb-3"/>
                                </FormGroup>
                                <Button onClick={handleSubmit} style={{ background: "none", border: "none" }} className="w-100 mt-4 d-flex justify-content-center">
                                    <ButtonMain buttonText="CREAR CUENTA" className="w-50" fontWeight="500" fontSize="20px"></ButtonMain>
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

Register.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Register;