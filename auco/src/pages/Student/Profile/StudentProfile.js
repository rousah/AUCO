import React from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col } from 'reactstrap';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import { Input, Label } from 'reactstrap';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import { Progress } from 'reactstrap';
import studentsIllustration from '../../../assets/illustrations/students.png';
import levelIllustration from '../../../assets/illustrations/badges/levels/LEVEL1.png';

const StudentProfile = (props) => {
    const { currentUser } = useToken();
    console.log(currentUser);
    return (
        <div>
            <NavBarStudent profile></NavBarStudent>
            {
                currentUser ?
                    <Container>
                        <Row className="p-3 justify-content-between mt-3 mb-4">
                            <Col className="p-0 d-flex align-items-center">
                                <h2>
                                    Mi perfil
                                </h2>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col xs="6">
                                <Row className="mb-3">
                                    <DashboardCard title="Mi progreso" content={
                                        <div className="d-flex">
                                            <Col xs="2" className="me-3">
                                                <img src={levelIllustration} alt="level badge" style={{ width: "100%" }}></img>
                                            </Col>
                                            <Col className="d-flex flex-column justify-content-center">
                                                <Row>
                                                    <Col className="text-muted">
                                                        Objetivo: Nivel 2
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex flex-column justify-content-center">
                                                        <Progress value="50" color="primary" striped animated></Progress>
                                                    </Col>
                                                    <Col xs="2" className="d-flex flex-column justify-content-center p-0">
                                                        <span>50/100</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="invisible">
                                                        <Progress value="50" color="primary" striped animated></Progress>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </div>
                                    }></DashboardCard>
                                </Row>
                                <Row className="mb-3">
                                    <DashboardCard title="Mis logros" content={
                                        <div>
                                            <Row className="mb-4">
                                                <Col xs="2">
                                                    <img src={levelIllustration} alt="level badge" style={{ width: "100%" }}></img>
                                                </Col>
                                                <Col xs="2">
                                                    <img src={levelIllustration} alt="level badge" style={{ width: "100%" }}></img>
                                                </Col>
                                                <Col xs="2">
                                                    <img src={levelIllustration} alt="level badge" style={{ width: "100%" }}></img>
                                                </Col>
                                                <Col xs="2">
                                                    <img src={levelIllustration} alt="level badge" style={{ width: "100%" }}></img>
                                                </Col>
                                                <Col xs="2">
                                                    <img src={levelIllustration} alt="level badge" style={{ width: "100%" }}></img>
                                                </Col>
                                            </Row>
                                        </div>
                                    }></DashboardCard>
                                </Row>
                            </Col>
                            <Col xs="6">
                                <Row className="mb-3">
                                    <Col>
                                        <DashboardCard title="Datos personales" content={
                                            <div>
                                                <Row>
                                                    <Col className="d-flex align-items-center">
                                                        <Label for="exampleEmail">Nombre:</Label>
                                                    </Col>
                                                    <Col xs="9">
                                                        <Input placeholder={currentUser.name} plaintext />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex align-items-center">
                                                        <Label for="exampleEmail">Apellidos:</Label>
                                                    </Col>
                                                    <Col xs="9">
                                                        <Input placeholder={currentUser.surname} plaintext />
                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-center d-flex">
                                                    <ButtonMain buttonText="Editar" className="px-4" fontWeight="500" fontSize="20px"></ButtonMain>
                                                </Row>
                                            </div>
                                        }></DashboardCard>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <DashboardCard title="Datos de usuario" content={
                                            <div>
                                                <Row>
                                                    <Col className="d-flex align-items-center">
                                                        <Label for="exampleEmail">Usuario:</Label>
                                                    </Col>
                                                    <Col xs="9">
                                                        <Input placeholder={currentUser.username} plaintext />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex align-items-center">
                                                        <Label for="exampleEmail">Contraseña:</Label>
                                                    </Col>
                                                    <Col xs="9">
                                                        <Input placeholder="********" plaintext />
                                                    </Col>
                                                </Row>
                                                <Row className="justify-content-center d-flex">
                                                    <ButtonMain buttonText="Editar" className="px-4" fontWeight="500" fontSize="20px"></ButtonMain>
                                                </Row>
                                            </div>
                                        }></DashboardCard>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    :
                    <Loading></Loading>
            }
            <img src={studentsIllustration} alt="teacher in class" style={{ width: "32%", position: "absolute", bottom: "0px", right: "0px" }}></img>
        </div>
    );
}

export default StudentProfile;