import React, { useState, useEffect } from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col } from 'reactstrap';
import { getStudent } from '../../../services/getStudent';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';

const StudentHome = (props) => {
    const { currentUser } = useToken();

    return (
        <div>
            <NavBarStudent home></NavBarStudent>
            <Container>
                <Row className="p-3 justify-content-between mt-3 mb-4">
                    <Col className="p-0 d-flex align-items-center">
                        {
                            currentUser ?
                                <h2>
                                    Bienvenido/a {currentUser.name}
                                </h2>
                                :
                                <Loading></Loading>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default StudentHome;