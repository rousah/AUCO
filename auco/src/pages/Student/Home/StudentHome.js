import React, { useState, useEffect } from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col } from 'reactstrap';
import { getStudent } from '../../../services/getStudent';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';

const StudentHome = (props) => {
    const { setCurrentUser, currentUser } = useToken();

    //const [student, setStudent] = useState(null);
    useEffect(() => {
        async function getMyStudent() {
            const thisStudent = await getStudent(props.history.location.state.response.user).then(response => {
                // if get student success
                if (response) {
                    console.log(response);
                    return response;
                }
            });
            //setStudent(thisStudent);
            setCurrentUser(thisStudent);
        }
        getMyStudent();
    }, []);

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