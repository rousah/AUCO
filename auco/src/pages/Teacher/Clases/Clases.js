import React from 'react';
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import ClassButton from '../../../components/Buttons/ClassButton'
import CreateClassButton from '../../../components/Buttons/CreateClassButton'
import { Container, Row, Col } from 'reactstrap';
import { getClasses } from '../../../services/getClasses';
import { getStudentsFromClass } from '../../../services/getStudentsFromClass';
import { useState, useEffect } from 'react';
import Loading from '../../../components/Loading';

const Clases = (props) => {
    const [completeClasses, setCompleteClasses] = useState(null);

    useEffect(() => {
        async function getAllStudentsFromThisClass(id) {
            const students = await getStudentsFromClass(id).then(response => {
                // if get students from this class success
                if (response) {
                    console.log(response);
                    return response;
                }
                else {
                    return false;
                }
            });
            return students;
        }
        async function getMyClasses() {
            const classes = await getClasses(props.history.location.state).then(response => {
                // if get classes success
                if (response) {
                    console.log(response);
                    return response;
                }
            });
            for (const thisClass of classes) {
                const students = await getAllStudentsFromThisClass(thisClass._id);
                thisClass.personalStudents = students;
            }
            console.log(classes);
            setCompleteClasses(classes);
        }
        getMyClasses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    {completeClasses ?
                        <Row>
                            {completeClasses.map((val, i) => {
                                return (
                                    <Col key={i} xs="3" className="mb-4">
                                        <ClassButton thisClass={val}></ClassButton>
                                    </Col>
                                )
                            })}
                            <Col xs="3" className="mb-4">
                                <CreateClassButton square id={props.history.location.state}></CreateClassButton>
                            </Col>
                        </Row>

                        :
                        <Loading></Loading>
                    }
                </Row>
            </Container>
        </div >
    );
}

export default Clases;