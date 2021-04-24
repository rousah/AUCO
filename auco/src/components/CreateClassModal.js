import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';
import ButtonMain from '../components/Buttons/ButtonMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";

const initialFormData = Object.freeze({
    email: "",
    password: ""
});

const CreateClassModal = (props) => {
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
        /*postLogin(formData).then(response => {
            // if login success
            if (response) {
                props.setToken(response.token);
                history.push({
                    pathname: '/home',
                    state: { response }
                });  // redirect
            }
        });*/
    };

    const styleBorder = {
        border: '1px solid #E3E3E3',
        borderRadius: '4px',
        borderLeft: '5px solid #f89f1e'
    }

    const closeBtn = <ButtonMain buttonText={<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>} className="px-2 py-1 rounded-3" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className} style={{ maxWidth: '75%'}}>
            <ModalHeader toggle={props.toggle} close={closeBtn}>Creando una clase</ModalHeader>
            <ModalBody style={{ minHeight: '50vh'}}>
                <Form>
                    <FormGroup>
                        <Label for="nombre-clase">
                            <h6>Nombre de la clase:</h6>
                        </Label>
                        <Input type="text" name="nombre-clase" className="mb-3" onChange={handleChange} placeholder="Ética" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="curso">
                            <h6>Curso:</h6>
                        </Label>
                        <Input type="text" name="curso" className="mb-3" onChange={handleChange} placeholder="2º ESO" />
                    </FormGroup>
                    <h6 className="mt-5">Alumnos:</h6>
                    <p className="fs-6 rounded p-2" style={styleBorder}>
                        Para cada alumno añadido a la clase se creará una cuenta con un usuario y contraseña para el alumno, que podrá cambiar una vez activada la cuenta iniciando sesión. De esta forma se le da acceso al contenido a los alumnos.
                    </p>
                    <Row>
                        <Col className="align-items-center">
                            <FormGroup>
                                <Input type="text" name="nombre-alumno" className="mb-3" onChange={handleChange} placeholder="Nombre" />
                            </FormGroup>
                        </Col>
                        <Col className="">
                            <FormGroup>
                                <Input type="text" name="apellido-alumno" className="mb-3" onChange={handleChange} placeholder="Apellidos" />
                            </FormGroup>
                        </Col>
                        <Col sm="auto" className="mb-3 align-self-center ps-0">
                            <FontAwesomeIcon icon={faPlusCircle} className="fs-5" style={{color: '#3956f7'}}></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <ButtonMain buttonText="Crear clase" className="px-2 rounded-4 me-3 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
                <ButtonMain secondary buttonText="Cancelar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
            </ModalFooter>
        </Modal >
    );
}

export default CreateClassModal;