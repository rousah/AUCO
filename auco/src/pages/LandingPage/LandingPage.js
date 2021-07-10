import React from 'react';
import '../../App.css';
import './LandingPage.css';
import NavBarLanding from '../../components/NavBar/NavBarLanding';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import childrenIllustration from '../../assets/illustrations/round.png';
import girlBullied from '../../assets/illustrations/girl-bullied.png';
import boyWinner from '../../assets/illustrations/winner.png';
import kidsTeacher from '../../assets/illustrations/kids-teacher.png';
import { Container, Row, Col } from 'reactstrap';
import ButtonMain from '../../components/Buttons/ButtonMain';

const LandingPage = (props) => {

    return (
        <div className="landing">
            <NavBarLanding landing showregister showlogin></NavBarLanding>
            <section className="entry" id="home">
                <Container style={{ height: "80vh" }} className="d-flex justify-content-center">
                    <Row className="align-items-center">
                        <Col xs="12" md="6">
                            <img src={childrenIllustration} alt="happy children in a field" style={{ width: "100%" }}></img>
                        </Col>
                        <Col className="text-center d-flex flex-column h-50 py-3 justify-content-between align-items-center flex-nowrap">
                            <Row className=" align-content-center justify-content-center align-self-stretch" style={{ flex: "1" }}>
                                <h1 style={{ fontWeight: "600" }}>¡Empieza a crear un buen ambiente en clase con <b>AUCO</b>!</h1>
                            </Row>
                            <Row className=" align-content-center justify-content-center align-self-stretch" style={{ flex: "1" }}>
                                <ButtonMain className="h-50 w-75 fs-3" buttonText={"EMPEZAR"} href="/choose-user" fontWeight="bold"></ButtonMain>
                            </Row>
                            <Row className=" align-content-center justify-content-center align-self-stretch" style={{ flex: "1" }}>
                                <ButtonMain className="h-50 w-75 fs-3" buttonText={"Ya tengo una cuenta"} href="/login" fontWeight="600"></ButtonMain>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="d-md-flex justify-content-center arrow d-none">
                    <a href="#stopbullying" className="text-decoration-none">
                        <h4>SABER MÁS <FontAwesomeIcon icon={faLongArrowAltDown} /></h4>
                    </a>
                </div>
            </section>
            <section id="stopbullying">
                <Container className="section my-md-5">
                    <Row className="">
                        <Col className="col-12 col-md-4 justify-content-center d-flex flex-column">
                            <img src={girlBullied} alt="girl being bullied" style={{ width: "100%" }}></img>
                        </Col>
                        <Col className="justify-content-center d-flex flex-column px-md-5">
                            <h4 style={{ fontWeight: "800", color: "#0d4c8b" }}>STOP bullying!</h4>
                            <p>
                                <b>AUCO</b> pretende ayudar a los niños de las escuelas y el personal académico a combatir el bullying. Ofrece ciertas herramientas al profesorado que pueden utilizar para identificar los posibles problemas que puedan haber en su clase, con colaboración de los estudiantes.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="howitworks">
                <Container className="section my-5">
                    <Row>
                        <Col className="justify-content-center d-flex flex-column px-md-5 text-md-end">
                            <h4 style={{ fontWeight: "800", color: "#0d4c8b" }}>¿Cómo funciona?</h4>
                            <p>
                                Lo que hace <b>AUCO</b> es pedir a los estudiantes que respondan ciertas preguntas acerca del bullying, sus emociones, su entorno... Mediante los resultados de los cuestionarios el profesorado puede tomar decisiones y ayudar a los niños que lo necesiten. A cambio, los alumnos recibirán recompensas en forma de insignias y puntos, para crear una experiencia divertida y motivarlos.
                            </p>
                        </Col>
                        <Col className="col-12 col-md-4 justify-content-center d-flex flex-column px-md-4 align-items-center">
                            <img src={boyWinner} alt="boy winning" style={{ width: "90%" }}></img>
                        </Col>
                    </Row>
                </Container>
            </section>
            <br></br>
            <section id="start" className="d-flex flex-column justify-content-center align-items-center text-center my-md-5 p-1 p-md-4 py-3">
                <p style={{ fontWeight: 500 }}>
                    AUCO es una plataforma diseñada por y para el bienestar de los niños en un ambiente escolar y fomentar un buen clima de trabajo, enfocando principalmente en temas como el bullying.
                    <br />
                    <br />
                    Si eres profesor, regístrate, y hoy mismo podrás ayudar a tus alumnos a tratarse mejor y así ser más felices.
                </p>
                <br></br>
                <ButtonMain className="h-50 fs-3 px-3" buttonText={"EMPEZAR"} href="/choose-user" fontWeight="600"></ButtonMain>
            </section>
            <section id="footer" className="d-flex justify-content-center align-items-center text-center mt-5 flex-column text-muted">
                <img src={kidsTeacher} alt="children with teacher" className="w-100"></img>
                <span>Ilustraciones creadas por <a href="https://www.freepik.com/pch-vector" className="text-muted">pch.vector</a> y <a href="https://www.freepik.com/rawpixel-com" className="text-muted">rawpixel.com</a> - freepik</span>
                <span>Trabajo Fin de Grado © 2020-2021, Emilia Rosa van der Heide. Contacto: <a href = "mailto: emiliarosavdh@gmail.com" className="text-muted">emiliarosavdh@gmail.com</a></span>
            </section>
        </div>
    );
}

export default LandingPage;