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
                    console.log(response);
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
                        </Row>
                        <Row>
                            <Col>
                                <DashboardCard customHeader={
                                    <h4 className="text-center" style={leaderboardHeaderStyle}> Leaderboard</h4>
                                }
                                    content={
                                        <Leaderboard users={users} paginate={30} />
                                    }>
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