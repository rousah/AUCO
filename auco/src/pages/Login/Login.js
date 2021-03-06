import React from 'react';
import '../../App.css';
import './Login.css';
import NavBarLanding from '../../components/NavBar/NavBarLanding';
import { Container } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { postLogin } from '../../services/loggingIn';
import { withRouter } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

const initialFormData = Object.freeze({
    email: "",
    password: ""
});

const noExiste = () => {
    alert("¡Ups! Esta función todavía no está disponible.")
}

const Login = (props) => {
    const [formData, updateFormData] = React.useState(initialFormData);
    const [visible, setVisible] = React.useState(false);

    const showAlert = () => setVisible(true);

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
                props.setCurrentUser(response.userDetails);
                props.setId(response.userDetails._id);
                props.setToken(response.token);
                if (response.role === 'student') {
                    console.log("Student logged in");
                    props.setRole(response.role);

                    history.push({
                        pathname: '/home',
                        state: { response }
                    });  // redirect
                }
                else {
                    props.setRole('teacher');
                    history.push({
                        pathname: '/clases',
                        state: { response }
                    });  // redirect
                }
            }
            else {
                updateFormData({ email: "", password: "" });
                showAlert();
            }
        });
    };

    return (
        <div className="fullscreen login">
            <NavBarLanding showregister></NavBarLanding>
            <div className="d-flex h-100 align-items-center">
                <Container className="align-content-center login-container p-5">
                    <div className="d-flex justify-content-center mb-4">
                        <h3 style={{ fontWeight: 700 }}>Iniciar sesión:</h3>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="email">
                                <h6>Correo electrónico o usuario:</h6>
                            </Label>
                            <Input type="text" name="email" className="mb-3" onChange={handleChange} value={formData.email} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                <h6>Contraseña:</h6>
                            </Label>
                            <Input type="password" name="password" onChange={handleChange} value={formData.password} autoComplete="on"/>
                            <a href="/login" className="mb-3" onClick={noExiste}>¿Has olvidado tu contraseña?</a>
                        </FormGroup>
                        <Alert color="danger" isOpen={visible}>
                            Usuario, correo electrónico o contraseña incorrecta
                        </Alert>
                        <Button type="submit" style={{ background: "none", border: "none", cursor: 'default' }} className="w-100 mt-4 d-flex justify-content-center">
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
    setToken: PropTypes.func.isRequired,
    setId: PropTypes.func.isRequired,
    setRole: PropTypes.func.isRequired
}

export default withRouter(Login);