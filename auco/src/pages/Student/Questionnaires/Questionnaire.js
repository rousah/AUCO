import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col, Progress } from 'reactstrap';
import Loading from '../../../components/Loading';
import { useParams } from "react-router-dom";
import useToken from '../../../services/useToken';
import Question from '../../../components/Question/Question';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import { getQuestionnaire } from '../../../services/getQuestionnaire';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './questionnaires.css';

const Questionnaire = (props) => {
    const [questionnaire, setQuestionnaire] = useState(false);
    const [slideCount, setSlide] = useState(1);

    // Confirmation modal on exit questionnaire
    const [modal, setModal] = useState(false);
    const toggleConfirmation = () => setModal(!modal);

    let { questionnaireId } = useParams();
    const { currentUser } = useToken();

    const noButtonStyle = {
        background: "none",
        color: "inherit",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "default",
        outline: "inherit"
    }
    function countSlides() {
        setSlide(slideCount + 1);
    }
    function uncountSlides() {
        setSlide(slideCount - 1);
    }

    const history = useHistory();
    const goBack = useCallback(() => history.push('/home'), [history]);

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
                            naturalSlideHeight={63}
                            totalSlides={questionnaire.questions.length}
                            touchEnabled={false}
                            dragEnabled={false}
                            visibleSlides={1}
                            isIntrinsicHeight={false}>
                            <Container className="w-50 mt-3">
                                <div>
                                    <Row>
                                        <Col className="d-flex align-items-center justify-content-between mb-1">
                                            <h2>{questionnaire.name}</h2>
                                            <ButtonMain buttonText="x" className="px-3" fontWeight="800" fontSize="25px" onClick={toggleConfirmation}></ButtonMain>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Progress value={slideCount / questionnaire.questions.length * 100} color="secondary"></Progress>
                                        </Col>
                                    </Row>
                                    <Row className="mb-2 p-3">
                                        {questionnaire.description}
                                    </Row>
                                    <Row className="">
                                        <Slider>
                                            {
                                                questionnaire.questions.map((val, i) => {
                                                    return (
                                                        <Slide index={i} key={i}>
                                                            <Question choice={val.type} answers={val.answers} question={val.question} description={val.description}></Question>
                                                        </Slide>
                                                    )
                                                })
                                            }
                                        </Slider>
                                    </Row>
                                </div>
                            </Container>
                            <div className="border-top mt-5">
                                <div className="w-50 container d-flex justify-content-between">
                                    <ButtonBack style={noButtonStyle} onClick={uncountSlides}>
                                        <ButtonMain secondary buttonText="<" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px"></ButtonMain>
                                    </ButtonBack>
                                    <ButtonMain buttonText="Guardar" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px"></ButtonMain>

                                    <ButtonNext style={noButtonStyle} onClick={countSlides}>
                                        <ButtonMain secondary buttonText=">" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px"></ButtonMain>
                                    </ButtonNext>
                                </div>
                            </div>
                            <ConfirmationModal isOpen={modal} action={goBack} toggle={toggleConfirmation} modal={modal} headerText="¡Ciudado!" confirmationText={"Estás a punto de salir del questionario " + questionnaire.name + ". Tus respuestas no se guardarán. ¿Estás seguro/a de que quieres salir?"} actionText="Salir" loadingText="" />
                        </CarouselProvider>
                    </div>
                    :
                    <Loading></Loading>
            }
        </div>
    );
}

export default Questionnaire;