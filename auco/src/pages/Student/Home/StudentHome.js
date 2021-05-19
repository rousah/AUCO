import React, {useState, useEffect} from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col } from 'reactstrap';
import { getStudent } from '../../../services/getStudent';

const StudentHome = (props) => {
    console.log(props.history.location.state.response)
    const [student, setStudent] = useState(null);
    useEffect(() => {
        async function getMyStudent() {
            const thisStudent = await getStudent(props.history.location.state.response.user).then(response => {
                console.log(response)
                // if get student success
                if (response) {
                    console.log(response);
                    return response;
                }
            });
            setStudent(thisStudent);
        }
        getMyStudent();
    }, []);

    return (
        <div>
            <NavBarStudent home></NavBarStudent>
            <Container>
                <Row className="p-3 justify-content-between mt-3 mb-4">
                    <Col className="p-0 d-flex align-items-center">
                        <h2>
                            Bienvenido/a {props.history.location.state.response.user} {props.history.location.state.response.name}
                        </h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default StudentHome;