import React, { useState, useEffect } from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { getStudentGamification } from '../../../services/getStudentGamification';
import { Container, Row, Col } from 'reactstrap';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import { Input, Label } from 'reactstrap';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import { Progress } from 'reactstrap';
import studentsIllustration from '../../../assets/illustrations/students.png';

const StudentProfile = (props) => {
    const { currentUser } = useToken();
    const [myGamification, setMyGamification] = useState();
    const [myLevelBadges, setMyLevelBadges] = useState([]);

    useEffect(() => {
        const getMyInfo = async () => {
            const studentInfo = await getStudentGamification(currentUser._id).then(response => {
                // if get students info success
                if (response) {
                    return response;
                }
            });

            var levels = Array.apply(null, {length: studentInfo.level}).map(Number.call, Number)
            setMyLevelBadges(levels);
            setMyGamification(studentInfo);
        }

        getMyInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const calculatePoints = (points) => {
        let minus = Math.trunc(points/100);
        return points - minus*100;
    }

    return (
        <div>
            <NavBarStudent profile></NavBarStudent>
            {
                currentUser && myGamification ?
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
                                                <img img src={require(`../../../assets/illustrations/badges/levels/LEVEL${myGamification.level}.png`).default} alt="level badge" style={{ width: "100%" }}></img>
                                            </Col>
                                            <Col className="d-flex flex-column justify-content-center">
                                                <Row>
                                                    <Col className="text-muted">
                                                        Objetivo: Nivel {myGamification.level + 1}
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex flex-column justify-content-center">
                                                        <Progress value={calculatePoints(myGamification.score)} color="primary" striped animated></Progress>
                                                    </Col>
                                                    <Col xs="2" className="d-flex flex-column justify-content-center p-0">
                                                        <span>{calculatePoints(myGamification.score)}/100</span>
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
                                                {
                                                    myLevelBadges.map((value, i) => {
                                                        return (
                                                            <Col xs="2" className="d-flex align-items-center" key={i}>
                                                                <img img src={require(`../../../assets/illustrations/badges/levels/LEVEL${value + 1}.png`).default} alt="level badge" style={{ width: "100%" }}></img>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                                <Col xs="2" className="d-flex align-items-center">
                                                    <img img src={require(`../../../assets/illustrations/badges/levels/LEVEL${myGamification.level + 1}.png`).default} alt="level badge" style={{ width: "100%" }}></img>
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