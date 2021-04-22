import React, { useState } from 'react';
import '../../App.css';
import './Register.css';
import NavBarLanding from '../NavBar/NavBarLanding';
import teacher from '../../assets/illustrations/teacher.png';
import student from '../../assets/illustrations/student.png';
import { Container, Row, Col } from 'reactstrap';
import SquareButton from '../Buttons/SquareButton';
import ButtonMain from '../Buttons/ButtonMain';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import oopsIllustration from '../../assets/illustrations/error.png';

const ChooseUser = (props) => {
    const {
        className
    } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const closeBtn = <ButtonMain buttonText="x" className="px-3" fontWeight="700" fontSize="23px" onClick={toggle}></ButtonMain>

    return (
        <div className="register fullscreen">
            <NavBarLanding showlogin></NavBarLanding>
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
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} close={closeBtn}>¡Ups!</ModalHeader>
                <ModalBody style={{ paddingBottom: '9rem' }} className="text-center">
                    Para obtener una cuenta de estudiante, tu profesor tendrá que inscribirte. ¡Infórmale a tu profesor de la plataforma y obtendrás acceso a todo el contenido de AUCO muy pronto!
                    <img src={oopsIllustration} alt="error" style={{ width: "40%", position: 'absolute', bottom: '0', left: '2rem' }}></img>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <ButtonMain buttonText="VOLVER" className="px-2" fontWeight="500" fontSize="18px" onClick={toggle}></ButtonMain>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ChooseUser;