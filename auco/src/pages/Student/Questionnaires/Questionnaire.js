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
import { saveResponses } from '../../../services/saveResponses';
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
        console.log(answer)
        setResponses(prevState => ({
            ...prevState,
            ...answer
        }));
        console.log(responses);
    }

    // Save questionnaire responses recorded so far
    const onClickSave = async () => {
        console.log(responses);
        setLoading(true);
        const res = await saveResponses(responses).then(res => {
            return res;
        });
        console.log(res);
        setLoading(false);
        goBack();
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
                                                            <Question onChangeSelection={onChangeSelection} qNumber={i} choice={val.type} answers={val.answers} question={val.question} description={val.description}></Question>
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
                    <Loading></Loading>
            }
        </div>
    );
}

export default Questionnaire;