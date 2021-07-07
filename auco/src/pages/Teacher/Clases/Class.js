import React from 'react';
import { useParams } from "react-router-dom";
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import { Container, Row, Col } from 'reactstrap';
import { getClass } from '../../../services/getClass';
import { getStudentsFromClass } from '../../../services/getStudentsFromClass';
import { useState, useEffect } from 'react';
import Loading from '../../../components/Loading';
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import Form from '../../../components/Dashboard/Form';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import PieGraph from '../../../components/Graphs/PieGraph';
import NetworkGraph from '../../../components/Graphs/NetworkGraph';
import Notification from '../../../components/Notification/Notification';
import LeaderBoard from '../../../components/Leaderboard/LeaderBoard';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareLeft, faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';
import './Class.css'

// eslint-disable-next-line import/no-webpack-loader-syntax

const Class = (props) => {
    let { id } = useParams();

    const [forms, setForms] = useState(null);
    const [slideN, setSlideN] = useState(0);

    const [myClass, setClass] = useState(null);
    const [relationships, setRelationships] = useState(null);
    const [users, setUsers] = useState(null);
    const [gamification, setGamification] = useState([]);

    function combineStudentGamification(thisClass, stud) {
        let game = [];
        for (let i = 0; i < thisClass.myClass.students.length; i++) {
            game.push({
                name: stud[i].name + " " + stud[i].surname,
                score: thisClass.myClass.students[i].score
            })
        }

        let n = 0;
        // Calculate number of active questionnaires
        thisClass.myClass.questionnaires.forEach(element => {
            if (element.active) {
                n++;
                console.log(slideN);
            }
        });
        setSlideN(n);

        // Set all values here because flow wouldn't work otherwise
        setClass(thisClass.myClass);
        setRelationships(thisClass.relationships)
        setForms(thisClass.myClass.questionnaires);
        setUsers(stud);
        setGamification(game);
    }

    const hideButtonStyle = {
        background: "none",
        color: "#DEE3DE",
        border: "none",
        padding: "0",
        font: "inherit",
        cursor: "pointer",
        outline: "inherit",
        fontSize: '1.5rem'
    }

    useEffect(() => {
        async function getMyStudents(thisClass) {
            const students = await getStudentsFromClass(id).then(response => {
                // if get students success
                if (response) {
                    return response;
                }
            });

            // Sets gamification info combining student with gamification student
            combineStudentGamification(thisClass, students);
        }

        async function getMyClass() {
            const thisClass = await getClass(id).then(response => {
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

    const changeForms = (newSettingsForms) => {
        setForms(newSettingsForms);
    }

    return (
        <div>
            <NavBarTeacher clases></NavBarTeacher>
            {
                users && myClass && relationships && gamification.length > 0 ?
                    <Container>
                        {/* Title and back button */}
                        <Row className="p-3 justify-content-between mt-3 mb-4">
                            <Col xs="4" className="p-0 d-flex align-items-center">
                                <h2>
                                    {myClass.name + " " + myClass.year}
                                </h2>
                            </Col>
                            <Col xs="4" className="p-0 d-flex align-items-center justify-content-end">
                                <Link tag={RRNavLink} to={{ pathname: "/clases/" }} className="text-decoration-none text-body">
                                    <ButtonMain buttonText="Volver a clases" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px"></ButtonMain>
                                </Link>
                            </Col>
                        </Row>

                        {/* Dashboard content */}
                        <Row className="mb-3">
                            {/* Content column */}
                            <Col>
                                <Row className="mb-3">
                                    <Col xs="6">
                                        <DashboardCard title="Respuestas" content={
                                            <Container className="p-0 mt-3">
                                                <CarouselProvider
                                                    naturalSlideWidth={300}
                                                    naturalSlideHeight={300}
                                                    totalSlides={slideN}
                                                    touchEnabled={false}
                                                    dragEnabled={false}
                                                    visibleSlides={1}
                                                    isIntrinsicHeight={false}
                                                >
                                                    <div className="d-flex">
                                                        <ButtonBack style={hideButtonStyle}>
                                                            <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
                                                        </ButtonBack>
                                                        <Slider>{
                                                            myClass.questionnaires.map((val, i) => {
                                                                // Show graph of active questionnaires
                                                                if (val.active) {
                                                                    return (
                                                                        <Slide index={i} key={i}>
                                                                            <h6 className="text-center">Cuestionario {val.name}</h6>
                                                                            <div style={{ height: "300px" }}>
                                                                                <PieGraph data={[
                                                                                    {
                                                                                        "id": "Respondido",
                                                                                        "label": "Respondido",
                                                                                        "value": val.answered / 2,
                                                                                        "color": "#f89f1e"
                                                                                    },
                                                                                    {
                                                                                        "id": "Sin responder",
                                                                                        "label": "Sin responder",
                                                                                        "value": myClass.students.length - val.answered / 2,
                                                                                        "color": "#fdbf4d"
                                                                                    }
                                                                                ]} key={i} />
                                                                            </div>
                                                                        </Slide>
                                                                    )
                                                                }
                                                                else return null;
                                                            })}
                                                        </Slider>
                                                        <ButtonNext style={hideButtonStyle}>
                                                        <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
                                                        </ButtonNext>
                                                    </div>
                                                </CarouselProvider>
                                            </Container>
                                        }></DashboardCard>
                                    </Col>
                                    <Col xs="6">
                                        <DashboardCard title="Sociograma" content={
                                            <div>
                                                <h6 className="invisible">Cuestionario</h6>
                                                <div style={{ height: "320px" }}>
                                                    <NetworkGraph data={relationships} />
                                                </div>
                                            </div>

                                        }></DashboardCard>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <DashboardCard title="Notificaciones" className="h-100" content={
                                            <div id="scroll-notifs" style={{ maxHeight: '300px' }}>
                                                {myClass.notifications.map((val, i) => {
                                                    return (
                                                        <div>
                                                            <Notification color="auco" content={
                                                                <span>
                                                                    {val.details}
                                                                </span>}
                                                                incidencia={val.incident} name={val.name}
                                                            >
                                                            </Notification>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }></DashboardCard>
                                    </Col>
                                    <Col>
                                        <DashboardCard title="Cuestionarios" content={
                                            <div>
                                                {
                                                    forms.map((val, i) => {
                                                        return (
                                                            <Form key={i} formInfo={val} changeForm={changeForms} classid={id}></Form>
                                                        )
                                                    })
                                                }
                                            </div>
                                        }></DashboardCard>
                                    </Col>
                                </Row>
                            </Col>
                            {/* Leaderboard column */}
                            <Col xs="4" className="mb-3">
                                <LeaderBoard users={gamification} className="h-100" />
                            </Col>
                        </Row>
                    </Container>
                    :
                    <Loading></Loading>
            }
        </div >
    );
}

export default Class;