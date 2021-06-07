import React from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col, Progress } from 'reactstrap';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';
import Question from '../../../components/Question/Question';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import './questionnaires.css';

const Questionnaires = (props) => {
    const { currentUser } = useToken();
    console.log(currentUser);
    return (
        <div>
            <NavBarStudent home></NavBarStudent>
            {
                currentUser ?
                    <div className="fullscreen justify-content-between d-flex flex-column">
                        <Container className="w-50 mt-3">
                            <div>
                                <Row>
                                    <h2>Sexismo</h2>
                                </Row>
                                <Row>
                                    <Col>
                                        <Progress value="10" color="secondary"></Progress>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Question></Question>
                                </Row>
                            </div>
                        </Container>
                        <div className="border-top">
                            <div className="w-50 container d-flex justify-content-between">
                                <ButtonMain secondary buttonText="Volver" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px" onClick={""}></ButtonMain>
                                <ButtonMain buttonText="Siguiente" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px" onClick={""}></ButtonMain>
                            </div>
                        </div>
                    </div>
                    :
                    <Loading></Loading>
            }
        </div>
    );
}

export default Questionnaires;