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
        postRegister(formData, [props.setId, props.setToken, props.setCurrentUser]).then(response => {
            // if register success
            if (response) {
                props.setId(response.userDetails._id);
                props.setToken(response.token);
                props.setCurrentUser(response.userDetails);
                props.setRole('teacher');
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
                    <Row className="m-2 m-lg-0">
                        <Col xs="12" lg="6" className="p-5 explanation mb-2 mg-lg-0" style={{ color: "white" }}>
                            <h1 style={{ fontWeight: "800" }} className="mb-3">
                                Regístrate, y hoy mismo podrás empezar a ayudar.
                            </h1>
                            <p style={{ fontWeight: 600, fontSize: '20px' }}>
                                Únete a <b>AUCO</b> y ayudarás a combatir el bullying y enseñar buenos valores a las generaciones del futuro. Rellena el formulario de la derecha con tus datos personales y entrarás a la plataforma.
                                <br /><br />
                                Después de crear tu cuenta de profesorado, podrás dar de alta una clase y dar acceso a tus alumnos al contenido de la plataforma.
                            </p>
                        </Col>
                        <Col xs="12" lg="6" className="pt-5 pb-4 ps-5 pe-5 registration-form mb-2 mg-lg-0">
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
                                    <Input type="password" name="passwordCheck" className="mb-3" />
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
    setToken: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired
}

export default Register;