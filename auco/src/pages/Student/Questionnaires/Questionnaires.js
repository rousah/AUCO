import React, { useEffect, useState } from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col, Progress } from 'reactstrap';
import Loading from '../../../components/Loading';
import { useParams } from "react-router-dom";
import useToken from '../../../services/useToken';
import Question from '../../../components/Question/Question';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import { getQuestionnaire } from '../../../services/getQuestionnaire';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import './questionnaires.css';

const Questionnaires = (props) => {
    const [questionnaire, setQuestionnaire] = useState(false);
    let { questionnaireId } = useParams();
    const { currentUser } = useToken();
    console.log(questionnaireId);

    useEffect(() => {
        const getMyQuestionnaire = async (id) => {
            const thisQuestionnaire = await getQuestionnaire(id).then(response => {
                return response;
            });

            setQuestionnaire(thisQuestionnaire);
        }

        // Get questionnaire
        getMyQuestionnaire(questionnaireId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <NavBarStudent home></NavBarStudent>
            {
                questionnaire ?
                    <div className="fullscreen justify-content-between d-flex flex-column">
                        {console.log(questionnaire)}
                        <Container className="w-50 mt-3">
                            <div>
                                <Row>
                                    <h2>{questionnaire.name}</h2>
                                </Row>
                                <Row>
                                    <Col>
                                        <Progress value="10" color="secondary"></Progress>
                                    </Col>
                                </Row>
                                <Row className="mb-5 p-3">
                                    {questionnaire.description}
                                </Row>
                                <Row className="mt-3">
                                    {
                                        questionnaire.name == "Bullying" ?
                                            <Question scale></Question>
                                            :
                                            <Question></Question>
                                    }
                                </Row>
                            </div>
                        </Container>
                        <div className="border-top">
                            <div className="w-50 container d-flex justify-content-between">
                                <Link tag={RRNavLink} to={{ pathname: "/home" }} style={{textDecoration: "none"}}>
                                    <ButtonMain secondary buttonText="Volver" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px" onClick={""}></ButtonMain>
                                </Link>
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