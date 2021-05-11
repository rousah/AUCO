import React from 'react';
import { useParams } from "react-router-dom";
import NavBarTeacher from '../../../components/NavBar/NavBarTeacher'
import { Container, Row, Col } from 'reactstrap';
import { getClass } from '../../../services/getClass';
import { useState, useEffect } from 'react';
import Loading from '../../../components/Loading';
import DashboardCard from '../../../components/Dashboard/DashboardCard';
import Form from '../../../components/Dashboard/Form';
import Leaderboard from 'react-leaderboard';
import ButtonMain from '../../../components/Buttons/ButtonMain';
import { ResponsivePie } from '@nivo/pie';
import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Leaderboard.css';

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

    const MyResponsivePie = ({ data }) => (
        <ResponsivePie
            data={data}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            colors={{ datum: 'data.color' }}
            theme={{
                "background": "#ffffff",
                "textColor": "#333333",
                "fontSize": 11,
                "axis": {
                    "domain": {
                        "line": {
                            "stroke": "#777777",
                            "strokeWidth": 0
                        }
                    },
                    "ticks": {
                        "line": {
                            "stroke": "#383838",
                            "strokeWidth": 0
                        }
                    }
                },
                "grid": {
                    "line": {
                        "stroke": "#edf1ff",
                        "strokeWidth": 1
                    }
                }
            }
            }
            padAngle={2}
            cornerRadius={3}
            activeOuterRadiusOffset={4}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
            legends={
                [
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
        />
    )

    const leaderboardHeaderStyle = {
        backgroundColor: "#3dd0ae",
        margin: "-1rem -1rem 0 -1rem",
        borderRadius: "7px 7px 0px 0px",
        padding: "1rem",
        color: "#ffffff"
    }


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
                                <ButtonMain buttonText="Volver a clases" className="px-2 rounded-4 me-3 py-1" fontWeight="500" fontSize="18px" href="javascript:history.back()"></ButtonMain>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <DashboardCard title="Respuestas" content={
                                    <div style={{ height: "300px" }}>
                                        <MyResponsivePie data={answered} />
                                    </div>
                                }></DashboardCard>
                            </Col>
                            <Col>
                            </Col>
                            <Col>
                                <DashboardCard title="Notificaciones" content={
                                    <div>
                                        <Alert color="auco" className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faInfoCircle} className="me-2"/>
                                            Pepito ha reportado una incidencia.
                                        </Alert>
                                        <Alert color="auco" className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faInfoCircle} className="me-2"/>
                                            Lola no ha respondido al cuestionario 'Bullying'.
                                        </Alert>
                                    </div>
                                }></DashboardCard>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className="leaderboardCol">
                                <DashboardCard customHeader={
                                    <h4 className="text-center" style={leaderboardHeaderStyle}> Leaderboard</h4>
                                }
                                    content={
                                        <Leaderboard users={users} paginate={30} />
                                    }
                                >
                                </DashboardCard>
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