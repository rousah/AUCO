import React, { useState } from 'react';
import '../../App.css';
import './Register.css';
import NavBar from '../NavBar/NavBar';
import teacher from '../../assets/illustrations/teacher.png';
import student from '../../assets/illustrations/student.png';
import { Container, Row, Col } from 'reactstrap';
import SquareButton from '../Buttons/SquareButton';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ChooseUser = (props) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="register fullscreen">
            <NavBar showlogin></NavBar>
            <div className="d-flex h-100 align-items-center">
                <Container className="align-content-center">
                    <Row className="align-content-center text-center mb-5">
                        <Col>
                            <h2 style={{ fontWeight: 800, color: "#3956f7" }}>Soy un/a...</h2>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col className="align-items-center justify-content-center d-flex ps-5">
                            <SquareButton href="/create-account" buttonText="Profesor/a" secondary illustration={teacher} alt="teacher" width="30%"></SquareButton>
                        </Col>
                        <Col className="align-items-center justify-content-center d-flex pe-5">
                            <SquareButton buttonText="Alumno/a" secondary illustration={student} alt="student" width="30%" onClick={toggle}></SquareButton>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ChooseUser;