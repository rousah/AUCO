import React from 'react';
import NavBarTeacher from '../../NavBar/NavBarTeacher'
import ClassButton from '../../Buttons/ClassButton'
import { Container, Row, Col } from 'reactstrap';

const Clases = (props) => {

    return (
        <div>
            <NavBarTeacher clases></NavBarTeacher>
            <Container>
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
                        <ClassButton></ClassButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Clases;