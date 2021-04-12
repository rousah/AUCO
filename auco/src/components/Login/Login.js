import React from 'react';
import '../../App.css';
import './Login.css';
import NavBar from '../NavBar/NavBar';
import { Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ButtonMain from '../Buttons/ButtonMain';
import { postLogin } from '../../services/loggingIn';
import { withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

const initialFormData = Object.freeze({
    email: "",
    password: ""
});

const Login = (props) => {
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
        postLogin(formData).then(response => {
            // if login success
            if (response) {
                props.setToken(response.token);
                history.push({
                    pathname: '/dashboard',
                    state: { response }
                });  // redirect
            }
        });
    };

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
                            <Label for="email">
                                <h6>Correo electrónico o usuario:</h6>
                            </Label>
                            <Input type="text" name="email" className="mb-3" onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                <h6>Contraseña:</h6>
                            </Label>
                            <Input type="password" name="password" onChange={handleChange} />
                            <a href="/" className="mb-3">¿Has olvidado tu contraseña?</a>
                        </FormGroup>
                        <Button onClick={handleSubmit} style={{ background: "none", border: "none", cursor: 'default' }} className="w-100 mt-4 d-flex justify-content-center">
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default withRouter(Login);