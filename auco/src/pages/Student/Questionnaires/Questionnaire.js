import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col, Progress } from 'reactstrap';
import Loading from '../../../components/Loading';
import { useParams } from "react-router-dom";
import useToken from '../../../services/useToken';
import Question from '../../../components/Question/Question';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import { getRandomQuestionsOfQuestionnaire } from '../../../services/getRandomQuestionsOfQuestionnaire';
import ConfirmationModal from '../../../components/ConfirmationModal/ConfirmationModal';
import GamificationModal from '../../../components/GamificationModal/GamificationModal';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { saveResponses } from '../../../services/saveResponses';
import { savePoints } from '../../../services/savePoints';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './questionnaires.css';

const Questionnaire = (props) => {
    // Responses of questionnaire
    let { questionnaireId } = useParams();
    const { currentUser } = useToken();
    const initialResponses = Object.freeze({
        id_student: currentUser._id,
        id_questionnaire: questionnaireId
    });
    const [responses, setResponses] = useState(initialResponses);

    // Loading
    const [loading, setLoading] = useState(false);

    // Points received for modal
    const [finalPoints, setPoints] = useState(0);

    // Questionnaire and question (slide) count
    const [questionnaire, setQuestionnaire] = useState(false);
    const [slideCount, setSlide] = useState(1);

    function countSlides() {
        setSlide(slideCount + 1);
    }
    function uncountSlides() {
        setSlide(slideCount - 1);
    }

    // Confirmation modal on exit questionnaire
    const [modal, setModal] = useState(false);
    const toggleConfirmation = () => setModal(!modal);

    // Gamification modal on send questionnaire
    const [gameModal, setGameModal] = useState(false);
    const toggleGameModal = () => setGameModal(!gameModal);

    // back and next buttons for question slides
    const noButtonStyle = {
        background: "none",
        color: "inherit",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "default",
        outline: "inherit"
    }
    const hideButtonStyle = {
        background: "none",
        color: "inherit",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "default",
        outline: "inherit",
        visibility: "hidden"
    }

    // Routing
    const history = useHistory();
    const goBack = useCallback(() => history.push('/home'), [history]);

    // When response to answer changes
    const onChangeSelection = (answer) => {
        setResponses(prevState => ({
            ...prevState,
            ...answer
        }));
    }

    // Save questionnaire responses recorded so far
    const onClickSave = async () => {
        setLoading(true);

        let answersCount = 0;
        // Count responses
        for (var response in responses) {
            if (responses.hasOwnProperty(response)) {
                if (responses[response] != null) answersCount++;
            }
        }

        if (answersCount > 0) {
            // To not take into account ids
            answersCount = answersCount - 2;

            // Save answers
            const res = await saveResponses(responses).then(res => {
                return res;
            });

            if (res) {
                console.log("add points")
                // Add points answers (point per question * number of questions)
                const points = await savePoints(currentUser._id, questionnaire.points * answersCount).then(res => {
                    return res;
                });
                setPoints(questionnaire.points * answersCount);
                console.log(points);
            }

            // Modal well done, sets loading false and goes back to home
            toggleGameModal();
        }
    }

    useEffect(() => {
        const getMyQuestionnaire = async (id) => {
            const thisQuestionnaire = await getRandomQuestionsOfQuestionnaire(id, currentUser._id).then(response => {
                return response;
            });

            setQuestionnaire(thisQuestionnaire);

            /*if (thisQuestionnaire.questions != undefined) {
                let r = [];
                for (let i = 0; i < thisQuestionnaire.totalQuestions; i++) {
                    r.push(null);
                }
                setResponses(prevState => ({
                    ...prevState,
                    ...r
                }));
            } */
        }

        // Get questionnaire
        getMyQuestionnaire(questionnaireId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <NavBarStudent home></NavBarStudent>
            {
                questionnaire && !loading ?
                    <div className="fullscreen justify-content-between d-flex flex-column">
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
                                                            <Question onChangeSelection={onChangeSelection} qNumber={val.questionNumber} choice={val.type} answers={val.answers} question={val.question} description={val.description}></Question>
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
                                    <ButtonBack style={slideCount > 1 ? noButtonStyle : hideButtonStyle} onClick={uncountSlides}>
                                        <ButtonMain secondary buttonText="<" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px"></ButtonMain>
                                    </ButtonBack>
                                    <ButtonMain buttonText="Guardar" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px" onClick={onClickSave}></ButtonMain>
                                    <ButtonNext style={slideCount < questionnaire.questions.length ? noButtonStyle : hideButtonStyle} onClick={countSlides}>
                                        <ButtonMain secondary buttonText=">" className="py-2 px-3 mt-4" fontWeight="600" fontSize="20px"></ButtonMain>
                                    </ButtonNext>
                                </div>
                            </div>
                            <ConfirmationModal isOpen={modal} action={goBack} toggle={toggleConfirmation} modal={modal} headerText="¡Ciudado!" confirmationText={"Estás a punto de salir del questionario " + questionnaire.name + ". Tus respuestas no se guardarán. ¿Estás seguro/a de que quieres salir?"} actionText="Salir" loadingText="" />
                        </CarouselProvider>
                    </div>
                    :
                    <div>
                        <GamificationModal isOpen={gameModal} toggle={toggleGameModal} modal={gameModal} setLoading={setLoading} points={finalPoints} />
                        <Loading></Loading>
                    </div>
            }
        </div>
    );
}

export default Questionnaire;