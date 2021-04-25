import React from 'react';
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import ClassButton from '../../../components/Buttons/ClassButton'
import CreateClassButton from '../../../components/Buttons/CreateClassButton'
import { Container, Row, Col } from 'reactstrap';

const Clases = (props) => {
    return (
        <div>
            <NavBarTeacher clases></NavBarTeacher>
            <Container>
                <Row className="p-3 justify-content-between mt-3 mb-4">
                    <Col xs="4" className="p-0 d-flex align-items-center">
                        <h2>
                            Mis clases
                        </h2>
                    </Col>
                    <Col xs="4" className="p-0 d-flex align-items-center justify-content-end">
                        <CreateClassButton id={props.history.location.state}></CreateClassButton>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ClassButton></ClassButton>
                    </Col>
                    <Col>
                        <ClassButton></ClassButton>
                    </Col>
                    <Col>
                        <ClassButton></ClassButton>
                    </Col>
                    <Col>
                        <CreateClassButton square id={props.history.location.state}></CreateClassButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Clases;