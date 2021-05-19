import React from 'react';
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher';
import { Container, Row, Col } from 'reactstrap';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';

const Home = (props) => {
    const { setCurrentUser, currentUser } = useToken();
    console.log(currentUser);
    return (
        <div>
            <NavBarTeacher home></NavBarTeacher>
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

export default Home;