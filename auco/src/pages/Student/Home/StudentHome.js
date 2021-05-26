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

const StudentHome = (props) => {
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
        async function getMyStudents(thisClass) {
            const students = await getStudentsFromClass(currentUser.id_class).then(response => {
                // if get students success
                if (response) {
                    return response;
                }
            });

            // Sets gamification info combining student with gamification student
            combineStudentGamification(thisClass, students);
        }

        async function getMyClass() {
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
    }, [])

    return (
        <div>
            <NavBarStudent home></NavBarStudent>
            {
                currentUser && gamification ?
                    <Container>
                        <Row className="p-3 justify-content-between mt-3 mb-4">
                            <Col className="p-0 d-flex align-items-center">
                                <h2>
                                    Bienvenido/a {currentUser.name}
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row className="mb-3">
                                    <DashboardCard title="Progreso" className="h-100" content={
                                        <div className="d-flex">
                                            <Col xs="1" className="me-4">
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
                                                    <Col xs="1" className="d-flex flex-column justify-content-center">
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
                    </Container>
                    :
                    <Loading></Loading>
            }
        </div>
    );
}

export default StudentHome;