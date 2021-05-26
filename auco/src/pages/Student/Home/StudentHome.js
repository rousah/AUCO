import React, { useState, useEffect } from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col } from 'reactstrap';
import { getStudent } from '../../../services/getStudent';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';
import DashboardCard from '../../../components/Dashboard/DashboardCard';

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
                                    <div>
                                        Hello
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