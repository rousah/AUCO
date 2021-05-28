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
import Circle from 'react-circle';
import ButtonMain from '../../../components/Buttons/ButtonMain';

const StudentHome = (props) => {
    const styleMain = {
        boxShadow: '0px 4px 0px 0px #a3b2ff',
        backgroundColor: "#c3cdff",
        borderRadius: '16px',
        cursor: 'pointer',
        color: 'white',
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        padding: '0px 5px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '1.5rem',
        width: 'fit-content'
    };

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
                        { /*<Row className="p-3 justify-content-between mt-3 mb-4">
                            <Col className="p-0 d-flex align-items-center">
                                <h2>
                                    Bienvenido/a {currentUser.name}!
                                </h2>
                            </Col>
                        </Row> */}
                        <Row className="mt-3">
                            <Col xs="7" className="d-flex flex-column align-items-center">
                                <Row className="w-75">
                                    <DashboardCard className="mb-4" content={
                                        <div className="d-flex text-center flex-column">
                                            <h3>Pregunta del día</h3>
                                        </div>
                                    }></DashboardCard>
                                    <div className="text-center justify-content-center d-flex flex-column align-items-center">
                                        <h3>Otros cuestionarios:</h3>
                                        <Row className="justify-content-between">
                                            <Col xs="6" style={styleMain} className="p-2 px-3">
                                                <div className="d-flex text-center">
                                                    <Col className="me-3">
                                                        <Circle
                                                            animate={true} // Boolean: Animated/Static progress
                                                            size={70} // Number: Defines the size of the circle.
                                                            lineWidth={50} // Number: Defines the thickness of the circle's stroke. 
                                                            progress={63} // Number: Update to change the progress and percentage.
                                                            progressColor="#3956f7"  // String: Color of "progress" portion of circle.
                                                            bgColor="#a5b0fb" // String: Color of "empty" portion of circle.
                                                            textColor="#ffffff" // String: Color of percentage text color.
                                                            textStyle={{
                                                                font: '7rem "Baloo 2", Helvetica, sans-serif' // CSSProperties: Custom styling for percentage.
                                                            }}
                                                            percentSpacing={0} // Number: Adjust spacing of "%" symbol and number.
                                                            roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                            showPercentage={true} // Boolean: Show/hide percentage.
                                                            showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                                        />
                                                    </Col>
                                                    <Col className="d-flex align-items-center justify-content-center">
                                                        <h3 className="m-0 fw-light">Sexismo</h3>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col xs="6" style={styleMain} className="p-2 px-3">
                                                <div className="d-flex text-center">
                                                    <Col className="me-3">
                                                        <Circle
                                                            animate={true} // Boolean: Animated/Static progress
                                                            size={70} // Number: Defines the size of the circle.
                                                            lineWidth={50} // Number: Defines the thickness of the circle's stroke. 
                                                            progress={63} // Number: Update to change the progress and percentage.
                                                            progressColor="#3956f7"  // String: Color of "progress" portion of circle.
                                                            bgColor="#a5b0fb" // String: Color of "empty" portion of circle.
                                                            textColor="#ffffff" // String: Color of percentage text color.
                                                            textStyle={{
                                                                font: '7rem "Baloo 2", Helvetica, sans-serif' // CSSProperties: Custom styling for percentage.
                                                            }}
                                                            percentSpacing={0} // Number: Adjust spacing of "%" symbol and number.
                                                            roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                            showPercentage={true} // Boolean: Show/hide percentage.
                                                            showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                                        />
                                                    </Col>
                                                    <Col className="d-flex align-items-center justify-content-center">
                                                        <h3 className="m-0 fw-light">Sexismo</h3>
                                                    </Col>
                                                </div>
                                            </Col>
                                            <Col xs="6" style={styleMain} className="p-2 px-3">
                                                <div className="d-flex text-center">
                                                    <Col className="me-3">
                                                        <Circle
                                                            animate={true} // Boolean: Animated/Static progress
                                                            size={70} // Number: Defines the size of the circle.
                                                            lineWidth={50} // Number: Defines the thickness of the circle's stroke. 
                                                            progress={63} // Number: Update to change the progress and percentage.
                                                            progressColor="#3956f7"  // String: Color of "progress" portion of circle.
                                                            bgColor="#a5b0fb" // String: Color of "empty" portion of circle.
                                                            textColor="#ffffff" // String: Color of percentage text color.
                                                            textStyle={{
                                                                font: '7rem "Baloo 2", Helvetica, sans-serif' // CSSProperties: Custom styling for percentage.
                                                            }}
                                                            percentSpacing={0} // Number: Adjust spacing of "%" symbol and number.
                                                            roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                            showPercentage={true} // Boolean: Show/hide percentage.
                                                            showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                                        />
                                                    </Col>
                                                    <Col className="d-flex align-items-center justify-content-center">
                                                        <h3 className="m-0 fw-light">Sexismo</h3>
                                                    </Col>
                                                </div>
                                            </Col>
                                        </Row>
                                        <DashboardCard className="h-100 mb-4 w-75" content={
                                            <div className="d-flex text-center">
                                                <Col>
                                                    <Circle
                                                        animate={true} // Boolean: Animated/Static progress
                                                        size={70} // Number: Defines the size of the circle.
                                                        lineWidth={50} // Number: Defines the thickness of the circle's stroke. 
                                                        progress={63} // Number: Update to change the progress and percentage.
                                                        progressColor="#3dd0ae"  // String: Color of "progress" portion of circle.
                                                        bgColor="whitesmoke" // String: Color of "empty" portion of circle.
                                                        textColor="#1d2128" // String: Color of percentage text color.
                                                        textStyle={{
                                                            font: 'bold 5rem Helvetica, Arial, sans-serif' // CSSProperties: Custom styling for percentage.
                                                        }}
                                                        percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                                        roundedStroke={true} // Boolean: Rounded/Flat line ends
                                                        showPercentage={true} // Boolean: Show/hide percentage.
                                                        showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                                    />
                                                </Col>
                                                <Col className="d-flex align-items-center justify-content-center">
                                                    <h3>Sexismo</h3>
                                                </Col>
                                            </div>
                                        }></DashboardCard>
                                    </div>
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
                    </Container>
                    :
                    <Loading></Loading>
            }
        </div>
    );
}

export default StudentHome;