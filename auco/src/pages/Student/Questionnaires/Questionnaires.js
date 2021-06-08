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
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './questionnaires.css';

const Questionnaires = (props) => {
    const [questionnaire, setQuestionnaire] = useState(false);
    let { questionnaireId } = useParams();
    const { currentUser } = useToken();
    console.log(questionnaireId);

    const noButtonStyle = {
        background: "none",
        color: "inherit",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "default",
        outline: "inherit"
    }

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
                        <CarouselProvider
                            naturalSlideWidth={100}
                            naturalSlideHeight={60}
                            totalSlides={questionnaire.questions.length}>
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
                                        <Slider>
                                            {
                                                questionnaire.questions.map((val, i) => {
                                                    return (
                                                        <Slide index={i}>
                                                            <Question choice={val.type} answers={val.answers} question={val.question}></Question>
                                                        </Slide>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </Row>
                                </div>
                            </Container>
                            <div className="border-top">
                                <div className="w-50 container d-flex justify-content-between">
                                    <ButtonBack style={noButtonStyle}>
                                        <Link tag={RRNavLink} to={{ pathname: "/home" }} style={{ textDecoration: "none" }}>
                                            <ButtonMain secondary buttonText="Volver" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px"></ButtonMain>
                                        </Link>
                                    </ButtonBack>
                                    <ButtonNext style={noButtonStyle}>
                                        <ButtonMain buttonText="Siguiente" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px"></ButtonMain>
                                    </ButtonNext>
                                </div>
                            </div>
                        </CarouselProvider>
                    </div>
                    :
                    <Loading></Loading>
            }
        </div>
    );
}

export default Questionnaires;