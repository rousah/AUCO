import React from 'react';
import { useParams } from "react-router-dom";
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import { Container, Row, Col } from 'reactstrap';
import { getClass } from '../../../services/getClass';
import { useState, useEffect } from 'react';
import Loading from '../../../components/Loading';
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import Form from '../../../components/Dashboard/Form';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import PieGraph from '../../../components/Graphs/PieGraph';
import { Button } from 'reactstrap';
import Notification from '../../../components/Notification/Notification';
import LeaderBoard from '../../../components/Leaderboard/LeaderBoard';
import './Class.css'

// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

const Class = (props) => {
    let { id } = useParams();

    const [myClass, setClass] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getMyClasses() {
            const myClass = await getClass(id).then(response => {
                // if get class success
                if (response) {
                    return response;
                }
            });
            myClass.students.forEach(student => {
                setUsers((prevState) => (
                    [...prevState, { name: student.name + " " + student.surname, score: student.score }]
                ))
            });
            setClass(myClass);
        }
        getMyClasses();
    }, [])

    const answered = [
        {
            "id": "Respuestas",
            "label": "Respuestas",
            "value": 20,
            "color": "#fdbf4d"
        },
        {
            "id": "Sin responder",
            "label": "Sin responder",
            "value": 8,
            "color": "#f89f1e"
        }
    ]

    return (
        <div>
            <NavBarTeacher clases></NavBarTeacher>
            {
                myClass ?
                    <Container>
                        <Row className="p-3 justify-content-between mt-3 mb-4">
                            <Col xs="4" className="p-0 d-flex align-items-center">
                                <h2>
                                    {myClass.name + " " + myClass.year}
                                </h2>
                            </Col>
                            <Col xs="4" className="p-0 d-flex align-items-center justify-content-end">
                                <ButtonMain buttonText="Volver a clases" className="px-2 rounded-4 py-1" fontWeight="500" fontSize="18px" href="javascript:history.back()"></ButtonMain>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <DashboardCard title="Respuestas" content={
                                    <div style={{ height: "300px" }}>
                                        <PieGraph data={answered} />
                                    </div>
                                }></DashboardCard>
                            </Col>
                            <Col>
                                <Button>bootstrap</Button>
                            </Col>
                            <Col>
                                <DashboardCard title="Notificaciones" className="h-100" content={
                                    <div id="scroll-notifs" style={{ maxHeight: '300px' }}>
                                        <Notification color="auco" content={
                                            <span>
                                                Pepito ha reportado <a href="#" className="alert-link">una incidencia</a>.
                                            </span>}>
                                        </Notification>
                                        <Notification color="auco" content={
                                            <span>
                                                Lola no ha respondido al cuestionario 'Bullying'.
                                            </span>}>
                                        </Notification>
                                    </div>
                                }></DashboardCard>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <LeaderBoard users={users} />
                            </Col>
                            <Col>
                                <DashboardCard title="Formularios" content={
                                    <div>
                                        <Form formName="Bullying" active></Form>
                                        <Form formName="Cyberbullying"></Form>
                                        <Form formName="Sexismo"></Form>
                                    </div>
                                }></DashboardCard>
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