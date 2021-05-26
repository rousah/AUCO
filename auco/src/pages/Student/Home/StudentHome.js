import React, { useState, useEffect } from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col } from 'reactstrap';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import { Progress } from 'reactstrap';
import levelIllustration from '../../../assets/illustrations/badges/levels/LEVEL1.png';

const StudentHome = (props) => {
    const { currentUser } = useToken();

    return (
        <div>
            <NavBarStudent home></NavBarStudent>
            {
                currentUser ?
                    <Container>
                        <Row className="p-3 justify-content-between mt-3 mb-4">
                            <Col className="p-0 d-flex align-items-center">
                                <h2>
                                    Bienvenido/a {currentUser.name}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <DashboardCard title="Progreso" className="h-100" content={
                                    <div className="d-flex">
                                        <Col xs="1" className="me-4">
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
                                                <Col xs="1" className="d-flex flex-column justify-content-center">
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
                            </Col>
                        </Row>
                    </Container>
                    :
                    <Loading></Loading>
            }
        </div>
    );
}

export default StudentHome;