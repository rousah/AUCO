import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane, CustomInput } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import classnames from 'classnames';
import './CreateClassModal.css'
import file from '../../assets/files/plantilla_alumnos.xlsx'

const initialFormData = Object.freeze({
    classname: "",
    year: "",
    students: [{ name: "", surname: "" }, { name: "", surname: "" }, { name: "", surname: "" }],
    // Initially, no file is selected 
    selectedFile: null,
    withFile: false
});

const CreateClassModal = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
        var withFile = null;
        if (tab === '1') withFile = false;
        else withFile = true;
        let data = {
            classname: formData.classname,
            year: formData.year,
            students: formData.students,
            selectedFile: formData.selectedFile,
            withFile: withFile
        }
        updateFormData(data);

    }

    const [formData, updateFormData] = useState(initialFormData);

    let history = useHistory();

    let students = formData.students;

    const addStudent = (e) => {
        updateFormData((prevState) => ({
            students: [...prevState.students, { name: "", surname: "" }],
        }));
    }

    // On file select
    const onFileChange = event => {
        // Update the state 
        let data = {
            classname: formData.classname,
            year: formData.year,
            students: formData.students,
            selectedFile: event.target.files[0],
            withFile: formData.withFile
        }
        updateFormData(data);
    };

    const handleChange = (e) => {
        // For student names
        if (["name", "surname"].includes(e.target.name)) {
            let students = [...formData.students];
            students[e.target.dataset.id][e.target.name] = e.target.value.trim();
            let data = {
                classname: formData.classname,
                year: formData.year,
                students: students,
                selectedFile: formData.selectedFile,
                withFile: formData.withFile
            }
            updateFormData(data);
        }
        // For rest
        else {
            updateFormData({ ...formData, [e.target.name]: e.target.value.trim() })
        }
    }

    const handleSubmit = (e) => {
        if (activeTab !== 1) {
            e.preventDefault();
            console.log(formData);
        }
        else {
            console.log(formData);
        }
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
        <Modal isOpen={props.modal} toggle={props.toggle} className={props.className} style={{ maxWidth: '75%' }}>
            <ModalHeader toggle={props.toggle} close={closeBtn}>Creando una clase</ModalHeader>
            <ModalBody style={{ minHeight: '50vh' }}>
                <Form>
                    <FormGroup>
                        <Label for="classname">
                            <h6>Nombre de la clase:</h6>
                        </Label>
                        <Input type="text" name="classname" className="mb-3" onChange={handleChange} placeholder="Ética" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="year">
                            <h6>Curso:</h6>
                        </Label>
                        <Input type="text" name="year" className="mb-3" onChange={handleChange} placeholder="2º ESO" />
                    </FormGroup>
                    <h6 className="mt-5">Alumnos:</h6>
                    <p className="fs-6 rounded p-2" style={styleBorder}>
                        Para cada alumno añadido a la clase se creará una cuenta con un usuario y contraseña para el alumno, que podrá cambiar una vez activada la cuenta iniciando sesión. De esta forma se le da acceso al contenido a los alumnos. Se pueden añadir de forma manual, escribiendo el nombre y apellido de cada uno de ellos, o subiendo un archivo .xls con un formato específico.
                    </p>
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggleTab('1'); }}>Añadir de forma manual</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggleTab('2'); }}>Añadir con hoja de cálculo</NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1" className="p-2">
                            <p className="fs-6">
                                Escribe los nombres y apellidos de todos los alumnos de la clase:
                            </p>
                            {
                                students.map((val, i) => {
                                    return (
                                        <Row key={i.toString()}>
                                            <Col className="align-items-center">
                                                <FormGroup>
                                                    <Input type="text" name="name" className="mb-3" onChange={handleChange} placeholder={'Nombre alumno #' + i} data-id={i} />
                                                </FormGroup>
                                            </Col>
                                            <Col className="">
                                                <FormGroup>
                                                    <Input type="text" name="surname" className="mb-3" onChange={handleChange} placeholder={'Apellidos alumno #' + i} data-id={i} />
                                                </FormGroup>
                                            </Col>
                                            <Col sm="auto" className="mb-3 align-self-center ps-0">
                                                {i < students.length - 1 ?
                                                    <FontAwesomeIcon icon={faPlusCircle} className="fs-5" style={{ color: '#ffffff' }}></FontAwesomeIcon>
                                                    :
                                                    <FontAwesomeIcon icon={faPlusCircle} className="fs-5" style={{ color: '#3956f7', cursor: 'pointer' }} onClick={addStudent}></FontAwesomeIcon>
                                                }
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </TabPane>
                        <TabPane tabId="2" className="p-2">
                            <p className="fs-6">
                                Sube un archivo .xls con los datos de los alumnos de la clase formateados de la siguiente forma:
                            </p>
                            <p className="fs-6">
                                Columna A: Nombre <br></br>
                                Columna B: Apellido
                            </p>
                            <p className="fs-6">
                                O bien, <a download href={file}>descarga la plantilla</a>, rellénala y súbela.
                                {/*<ButtonMain buttonText="Descargar plantilla" className="px-2 rounded-3 me-3 py-1 fs-6" fontWeight="300" download href={file}></ButtonMain>*/}
                            </p>
                            <FormGroup>
                                <Label for="exampleCustomFileBrowser">Seleccionar hoja de cálculo:</Label>
                                <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" label="Selecciona un archivo" onChange={onFileChange} accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                            </FormGroup>
                        </TabPane>
                    </TabContent>
                </Form>
            </ModalBody>
            <ModalFooter>
                <ButtonMain buttonText="Crear clase" className="px-2 rounded-4 me-3 py-1" fontWeight="500" fontSize="18px" onClick={handleSubmit}></ButtonMain>
                <ButtonMain secondary buttonText="Cancelar" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" onClick={props.toggle}></ButtonMain>
            </ModalFooter>
        </Modal >
    );
}

export default CreateClassModal;