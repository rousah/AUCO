import React, { useState, useEffect } from 'react';
import NavBarStudent from '../../../components/NavBar/NavBarStudent';
import { Container, Row, Col } from 'reactstrap';
import Loading from '../../../components/Loading';
import useToken from '../../../services/useToken';
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import { Progress } from 'reactstrap';
import levelIllustration from '../../../assets/illustrations/badges/levels/LEVEL1.png';
import { getClass } from '../../../services/getClass';
import { getStudentsFromClass } from '../../../services/getStudentsFromClass';
import LeaderBoard from '../../../components/Leaderboard/LeaderBoard';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import ReportModal from '../../../components/Notification/ReportModal';
import SuccessAlert from '../../../components/Notification/SuccessAlert';
import QuestionnaireButton from '../../../components/Buttons/QuestionnaireButton';
import ReactTooltip from 'react-tooltip';


const StudentHome = (props) => {

    // Toast success
    const [show, setShow] = useState(false);
    const handleVisible = () => {
        setShow(true)
        setTimeout(() => {
            // 2s
            setShow(false)
        }, 4000);
    }
    // Toast error
    const [showError, setShowError] = useState(false);
    const handleVisibleError = () => {
        setShowError(true)
        setTimeout(() => {
            // 2s
            setShowError(false)
        }, 4000);
    }

    // Report modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const { currentUser } = useToken();

    const [gamification, setGamification] = useState();

    function combineStudentGamification(thisClass, stud) {
        console.log(thisClass.students)
        console.log(stud)
        let game = [];
        for (let i = 0; i < thisClass.students.length; i++) {
            game.push({
                name: stud[i].name + " " + stud[i].surname,
                score: thisClass.students[i].score
            })
        }

        // Set all values here because flow wouldn't work otherwise
        setGamification(game);
    }

    useEffect(() => {
        const getMyStudents = async (thisClass) => {
            const students = await getStudentsFromClass(currentUser.id_class).then(response => {
                // if get students success
                if (response) {
                    return response;
                }
            });

            // Sets gamification info combining student with gamification student
            combineStudentGamification(thisClass, students);
        }

        const getMyClass = async () => {
            const thisClass = await getClass(currentUser.id_class).then(response => {
                // if get class success
                if (response) {
                    return response;
                }
            });

            // Get students from this class
            getMyStudents(thisClass);
        }

        // Get class
        getMyClass();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <NavBarStudent home></NavBarStudent>
            {
                currentUser && gamification ?
                    <Container>
                        <SuccessAlert text="¡Reporte enviado con éxito!" show={show}></SuccessAlert>
                        <SuccessAlert text="Error al enviar reporte, inténtelo más tarde." error show={showError}></SuccessAlert>
                        <Row className="mt-3">
                            <Col xs="7" className="d-flex flex-column align-items-center">
                                <Row className="w-75">
                                    <DashboardCard className="mb-4" title="Acciones rápidas" content={
                                        <div className="d-flex text-center flex-column align-items-center">
                                            <Col className="mb-3">
                                                <ButtonMain buttonText="RESPONDER PREGUNTA DEL DÍA" className="py-2 px-3 tw-animate-bounce" fontWeight="600" fontSize="20px"></ButtonMain>
                                            </Col>
                                            <Col data-tip data-for='happyFace'>
                                                <ButtonMain buttonText="REPORTAR INCIDENTE" className="py-2 px-3" fontWeight="600" fontSize="20px" onClick={toggle}></ButtonMain>
                                                <ReactTooltip backgroundColor="#3956f7" id='happyFace' place="bottom" type="info" effect="solid" className="fw-bold">¡Ayuda a tus compañeros y recibe puntos!</ReactTooltip>
                                            </Col>
                                        </div>
                                    }></DashboardCard>
                                    <DashboardCard className="h-100 mb-4" title="Otras preguntas" content={
                                        <Row className="justify-content-between">
                                            <Col xs="6" className="p-0">
                                                <QuestionnaireButton questionnaire="Bullying"></QuestionnaireButton>
                                            </Col>
                                            <Col xs="6" className="p-0">
                                                <QuestionnaireButton questionnaire="Cyberbullying"></QuestionnaireButton>
                                            </Col>
                                            <Col xs="6" className="p-0">
                                                <QuestionnaireButton questionnaire="Sexism"></QuestionnaireButton>
                                            </Col>
                                        </Row>
                                    }></DashboardCard>
                                </Row>
                            </Col>
                            <Col>
                                <Row className="mb-3">
                                    <DashboardCard title="Progreso" className="h-100" content={
                                        <div className="d-flex">
                                            <Col xs="2" className="me-3">
                                                <img src={levelIllustration} alt="level badge" style={{ width: "100%" }}></img>
                                            </Col>
                                            <Col className="d-flex flex-column justify-content-center">
                                                <Row>
                                                    <Col className="text-muted">
                                                        Objetivo: Nivel 2
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="d-flex flex-column justify-content-center">
                                                        <Progress value="50" color="primary" striped animated></Progress>
                                                    </Col>
                                                    <Col xs="2" className="d-flex flex-column justify-content-center p-0">
                                                        <span>50/100</span>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="invisible">
                                                        <Progress value="50" color="primary" striped animated></Progress>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </div>
                                    }></DashboardCard>
                                </Row>
                                <Row className="mb-3">
                                    <LeaderBoard users={gamification} className="h-100" />
                                </Row>
                            </Col>
                        </Row>
                        <ReportModal isOpen={modal} toggle={toggle} modal={modal} toggleToast={handleVisible} toggleError={handleVisibleError} />
                    </Container>
                    :
                    <Loading></Loading>
            }
        </div >
    );
}

export default StudentHome;