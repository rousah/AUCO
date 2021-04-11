import React from 'react';
import '../../App.css';
import './Register.css';
import NavBar from '../NavBar/NavBar';
import teacher from '../../assets/illustrations/teacher.png';
import student from '../../assets/illustrations/student.png';
import { Container, Row, Col } from 'reactstrap';
import SquareButton from '../Buttons/SquareButton';

const ChooseUser = (props) => {

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
                            <SquareButton buttonText="Alumno/a" secondary illustration={student} alt="student" width="30%"></SquareButton>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ChooseUser;