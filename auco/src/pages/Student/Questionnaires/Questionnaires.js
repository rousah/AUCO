import React from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col, Progress } from 'reactstrap';
import Loading from '../../../components/Loading';
import { useParams } from "react-router-dom";
import useToken from '../../../services/useToken';
import Question from '../../../components/Question/Question';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import './questionnaires.css';

const Questionnaires = (props) => {
    let { questionnaire } = useParams();
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
                                    <h2>{questionnaire}</h2>
                                </Row>
                                <Row>
                                    <Col>
                                        <Progress value="10" color="secondary"></Progress>
                                    </Col>
                                </Row>
                                <Row className="mb-5 p-3">
                                    A continuación, verás unas frases que se refieren a comportamientos que algunos chicos y chicas realizan en el colegio. Por favor, contesta con sinceridad y sin ningún miedo si algún compañero/a del colegio o instituto para molestarte de verdad, se ha comportado así contigo el curso anterior.
                                </Row>
                                <Row className="mt-3">
                                    {
                                        questionnaire == "Bullying" ?
                                            <Question scale></Question>
                                            :
                                            <Question></Question>
                                    }
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