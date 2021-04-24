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
                <Row className="p-3">
                    <h2>
                        Mis clases
                    </h2>
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
                        <CreateClassButton></CreateClassButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Clases;