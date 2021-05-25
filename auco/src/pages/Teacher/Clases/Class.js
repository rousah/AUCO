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
import './Class.css'

// eslint-disable-next-line import/no-webpack-loader-syntax
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';
const formsInitial = [
    {
        name: "Bullying",
        activationMethod: "automatic",
        options: "Semanal",
        active: true
    },
    {
        name: "Cyberbullying",
        activationMethod: "automatic",
        options: "Diario",
        active: true
    },
    {
        name: "Sexismo",
        activationMethod: "automatic",
        options: "Semanal",
        active: false
    }
]

const notifications = [{
    nombre: "Lola",
    incidencia: false,
    detalle: "no resp"
}, {
    nombre: "Pepito",
    incidencia: true,
    detalle: "Jaime ha pegado a Lara"
}]

const Class = (props) => {
    let { id } = useParams();

    const [forms, setForms] = useState(formsInitial);

    const [myClass, setClass] = useState(null);
    const [users, setUsers] = useState(null);

    useEffect(() => {
        async function getMyStudents() {
            const students = await getStudentsFromClass(id).then(response => {
                // if get students success
                if (response) {
                    return response;
                }
            });
            setUsers(students);
        }

        async function getMyClass() {
            const myClass = await getClass(id).then(response => {
                // if get class success
                if (response) {
                    return response;
                }
            });
            setClass(myClass);
        }

        /*function combineStudentGamification() {
            students.forEach(student => {
                setUsers((prevState) => (
                    [...prevState, { name: student.name + " " + student.surname, score: student.score }]
                ))
            });
        }*/
        getMyClass();
        getMyStudents();
    }, [])

    const changeForms = (newSettingsForms) => {
        setForms(newSettingsForms);
    }


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

    const relationships = {
        "nodes": [
            {
                "id": "1",
                "radius": 8,
                "depth": 1,
                "color": "rgb(97, 205, 187)"
            },
            {
                "id": "2",
                "radius": 8,
                "depth": 1,
                "color": "rgb(97, 205, 187)"
            },
            {
                "id": "3",
                "radius": 8,
                "depth": 1,
                "color": "rgb(97, 205, 187)"
            }
        ],
        "links": [
            {
                "source": "2",
                "target": "1",
                "distance": 50
            },
            {
                "source": "1",
                "target": "3",
                "distance": 30
            }
        ]
    }

    return (
        <div>
            <NavBarTeacher clases></NavBarTeacher>
            {
                users && myClass ?
                    <Container>
                        {/* Title and back button */}
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

                        {/* Dashboard content */}
                        <Row className="mb-3">
                            {/* Content column */}
                            <Col>
                                <Row className="mb-3">
                                    <Col xs="6">
                                        <DashboardCard title="Respuestas" content={
                                            <div style={{ height: "300px" }}>
                                                <PieGraph data={answered} />
                                            </div>
                                        }></DashboardCard>
                                    </Col>
                                    <Col xs="6">
                                        <DashboardCard title="Relaciones" content={
                                            <div style={{ height: "300px" }}>
                                                <NetworkGraph data={relationships} />
                                            </div>
                                        }></DashboardCard>
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col>
                                        <DashboardCard title="Notificaciones" className="h-100" content={
                                            <div id="scroll-notifs" style={{ maxHeight: '300px' }}>
                                                {notifications.map((val, i) => {
                                                    console.log(val)
                                                    return (
                                                        <div>
                                                            <Notification color="auco" content={
                                                                <span>
                                                                    {val.detalle}
                                                                </span>}
                                                                incidencia={val.incidencia} name={val.nombre}
                                                            >
                                                            </Notification>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        }></DashboardCard>
                                    </Col>
                                    <Col>
                                        <DashboardCard title="Formularios" content={
                                            <div>
                                                {
                                                    forms.map((val, i) => {
                                                        return (
                                                            <Form key={i} formInfo={val} changeForm={changeForms}></Form>
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
                                <LeaderBoard users={users} className="h-100" />
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