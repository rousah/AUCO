import React from 'react';
import '../../App.css';
import './LandingPage.css';
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import childrenIllustration from '../../assets/illustrations/round.png';
import girlBullied from '../../assets/illustrations/girl-bullied.png';
import boyWinner from '../../assets/illustrations/winner.png';
import kidsTeacher from '../../assets/illustrations/kids-teacher.png';
import { Container, Row, Col } from 'reactstrap';
import ButtonMain from '../Buttons/ButtonMain';

const LandingPage = (props) => {

    return (
        <div className="landing">
            <NavBar landing showregister showlogin></NavBar>
            <section className="entry" id="home">
                <Container style={{ height: "80vh" }} className="d-flex justify-content-center">
                    <Row className="align-items-center">
                        <Col>
                            <img src={childrenIllustration} alt="happy children in a field" style={{ width: "100%" }}></img>
                        </Col>
                        <Col className="text-center d-flex flex-column h-50 py-3 justify-content-between align-items-center flex-nowrap">
                            <Row className=" align-content-center justify-content-center align-self-stretch" style={{ flex: "1" }}>
                                <h2 style={{ fontWeight: "600", fontSize: "40px" }}>Empezar aquí lorem ipsum</h2>
                            </Row>
                            <Row className=" align-content-center justify-content-center align-self-stretch" style={{ flex: "1" }}>
                                <ButtonMain className="h-50 w-75" buttonText={"EMPEZAR"} href="/choose-user" fontWeight="bold" fontSize="38px"></ButtonMain>
                            </Row>
                            <Row className=" align-content-center justify-content-center align-self-stretch" style={{ flex: "1" }}>
                                <ButtonMain className="h-50 w-75" buttonText={"Ya tengo una cuenta"} href="/login" fontWeight="600" fontSize="30px"></ButtonMain>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="d-flex justify-content-center arrow">
                    <a href="#stopbullying" className="text-decoration-none">
                        <h4>SABER MÁS <FontAwesomeIcon icon={faLongArrowAltDown} /></h4>
                    </a>
                </div>
            </section>
            <section id="stopbullying">
                <Container className="section my-5">
                    <Row className="">
                        <Col className="col-4 justify-content-center d-flex flex-column">
                            <img src={girlBullied} alt="girl being bullied" style={{ width: "100%" }}></img>
                        </Col>
                        <Col className="justify-content-center d-flex flex-column px-5">
                            <h4 style={{ fontWeight: "800", color: "#0d4c8b" }}>STOP bullying!</h4>
                            <p>
                                AUCO pretende enseñar a los niños la importancia de tratarse bien y así intentar combatir el bullying. También ofrece ciertas herramientas al profesorado que pueden utilizar para identificar posibles problemas que puede haber en su clase.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="howitworks">
                <Container className="section my-5">
                    <Row>
                        <Col className="justify-content-center d-flex flex-column px-5 text-end">
                            <h4 style={{ fontWeight: "800", color: "#0d4c8b" }}>¿Cómo funciona?</h4>
                            <p>
                                Lo que hace AUCO es pedir la completación de ciertos formularios a los alumnos. Mediante los resultados de los formularios el profesorado puede tomar decisiones y ayudar a los niños que lo necesiten. A cambio, los alumnos recibirán recompensas: insignias, puntos... para crear una experiencia divertida
                            </p>
                        </Col>
                        <Col className="col-4 justify-content-center d-flex flex-column px-4">
                            <img src={boyWinner} alt="boy winning" style={{ width: "90%" }}></img>
                        </Col>
                    </Row>
                </Container>
            </section>
            <br></br>
            <section id="start" className="d-flex flex-column justify-content-center align-items-center text-center my-5">
                <p style={{ width: '50%', fontWeight: 500 }}>
                    AUCO es una plataforma diseñada por y para el bienestar de los niños en un ambiente escolar y fomentar su aprendizaje sobre temas como el bullying.
                    <br />
                    <br />
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua esse cillum dolore eu fugiat.
                </p>
                <br></br>
                <ButtonMain className="h-50 w-25" buttonText={"EMPEZAR"} href="/choose-user" fontWeight="600" fontSize="30px"></ButtonMain>
            </section>
            <section id="footer" className="d-flex justify-content-center align-items-center text-center my-5">
                <img src={kidsTeacher} alt="children with teacher" style={{ width: "30%" }}></img>
            </section>
        </div>
    );
}

export default LandingPage;