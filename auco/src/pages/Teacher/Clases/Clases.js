import React from 'react';
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import ClassButton from '../../../components/Buttons/ClassButton'
import CreateClassButton from '../../../components/Buttons/CreateClassButton'
import { Container, Row, Col } from 'reactstrap';
import { getClasses } from '../../../services/getClass';
import { useState, useEffect } from 'react';

const Clases = (props) => {
    const [classes, setClasses] = useState(null);
    useEffect(() => {
        async function getMyClasses() {
            const classes = await getClasses(props.history.location.state).then(response => {
                // if get classes success
                if (response) {
                    console.log(response);
                    return response;
                }
            });
            setClasses(classes);
        }
        getMyClasses();
    }, [])

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
                    {classes ?
                        classes.map((val, i) => {
                            console.log(val)
                            return (
                                <Col key={i} xs="3" className="mb-4">
                                    <ClassButton name={val.name} year={val.year} numberStudents={val.students.length} notifications={Math.floor(Math.random()*4)} students={val.students}></ClassButton>
                                </Col>
                            )
                        })
                        :
                        false
                    }
                    <Col xs="3" className="mb-4">
                        <CreateClassButton square id={props.history.location.state}></CreateClassButton>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Clases;