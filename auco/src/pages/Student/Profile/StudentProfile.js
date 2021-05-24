import React from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col } from 'reactstrap';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import { Input, Label } from 'reactstrap';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import studentsIllustration from '../../../assets/illustrations/students.png';

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
                                        <Row className="mb-2">
                                            <Col className="d-flex align-items-center">
                                                <Label for="exampleEmail">Clase:</Label>
                                            </Col>
                                            <Col xs="9">
                                                <Input placeholder={currentUser.institution} plaintext />
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
                            <Col xs="6">
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
                    </Container>
                    :
                    <Loading></Loading>
            }
            <img src={studentsIllustration} alt="teacher in class" style={{ width: "40%", position: "absolute", bottom: "0px", right: "60px" }}></img>
        </div>
    );
}

export default StudentProfile;