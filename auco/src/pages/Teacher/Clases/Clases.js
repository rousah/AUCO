import React, { useState } from 'react';
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import ClassButton from '../../../components/Buttons/ClassButton'
import CreateClassButton from '../../../components/Buttons/CreateClassButton'
import { Container, Row, Col } from 'reactstrap';

const Clases = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <NavBarTeacher clases></NavBarTeacher>
            <Container>
                <Row className="p-3 justify-content-between">
                    <Col xs="4" className="p-0 d-flex align-items-center">
                        <h2>
                            Mis clases
                        </h2>
                    </Col>
                    <Col xs="4" className="p-0 d-flex align-items-center justify-content-end">
                        <CreateClassButton></CreateClassButton>
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
                        <CreateClassButton square></CreateClassButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Clases;