import React from 'react';
import '../../App.css';
import './LandingPage.css';
import NavBar from './../NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import childrenIllustration from '../../assets/illustrations/round.png';
import { Container, Row, Col } from 'reactstrap';
import ButtonMain from './../ButtonMain';

const LandingPage = (props) => {

    return (
        <div className="landing">
            <NavBar></NavBar>
            <section className="entry">
                <Container style={{ height: "80vh" }} className="d-flex justify-content-center">
                    <Row className="align-items-center">
                        <Col>
                            <img src={childrenIllustration} alt="happy children in a field" style={{ width: "100%" }}></img>
                        </Col>
                        <Col className="text-center d-flex flex-column h-50 py-3 justify-content-between align-items-center flex-nowrap">
                            <Row className=" align-content-center justify-content-center align-self-stretch" style={{ flex: "1" }}>
                                <h2 style={{fontWeight:"600", fontSize:"40px"}}>Empezar aquí lorem ipsum</h2>
                            </Row>
                            <Row className=" align-content-center justify-content-center align-self-stretch" style={{ flex: "1" }}>
                                <ButtonMain className="h-50 w-75" buttonText={"EMPEZAR"} href="/register" fontWeight="bold" fontSize="38px"></ButtonMain>
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

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor quam. Duis imperdiet non ligula ut volutpat. Fusce imperdiet quam ipsum, at faucibus lectus hendrerit a. Suspendisse vitae dui a ante commodo suscipit et sed nibh. Nulla auctor leo in urna egestas porttitor volutpat et ante. Quisque mollis nibh ut dui commodo consectetur. Nunc euismod egestas nibh, at rhoncus turpis porta eget. Phasellus tristique molestie imperdiet. Praesent laoreet eget ligula ut pellentesque. Fusce varius odio sit amet elit efficitur, non congue orci tempor. Suspendisse eget tellus rhoncus, sagittis nunc rhoncus, ornare erat. Nulla pretium convallis erat feugiat finibus. Phasellus posuere tempor volutpat.

                Nulla imperdiet massa tincidunt libero ornare auctor. Duis lacinia vehicula quam, eget accumsan urna faucibus nec. Donec et massa mi. Sed iaculis libero ac dolor blandit fringilla. Praesent nec dignissim velit, a feugiat sapien. Quisque sagittis ex eu arcu vestibulum dictum. Aenean vehicula, turpis id euismod vulputate, orci elit tristique ligula, non molestie libero lectus eu arcu. Donec facilisis velit a justo interdum tristique. In rutrum faucibus massa ac scelerisque. Donec dictum posuere arcu a suscipit. Sed purus orci, mollis finibus euismod quis, luctus ut ligula. Nulla tincidunt sagittis purus. In pretium mi nunc. Cras non nunc arcu.

                Integer interdum nulla nec gravida lobortis. Curabitur est diam, mattis ut bibendum vitae, feugiat a sem. Aliquam sed purus ut lorem mollis commodo. Cras tincidunt pretium suscipit. Vestibulum non sapien porttitor, rutrum erat sit amet, tempor lacus. Sed fringilla sodales nunc sit amet convallis. Etiam consequat lacus eu nibh accumsan, ut ullamcorper erat varius.

                Etiam efficitur, sapien non lacinia sagittis, dolor ligula placerat mauris, auctor facilisis est nunc ut est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus quam, mollis auctor consectetur non, gravida eget lectus. Etiam placerat augue leo, a dictum purus luctus sit amet. Cras tristique ante quis eros scelerisque congue. Aliquam ullamcorper imperdiet eleifend. Donec nec porttitor leo. Nam iaculis ligula libero, eu laoreet sem posuere sit amet. Morbi convallis tincidunt viverra.

                Phasellus euismod enim mi, at condimentum justo viverra eget. Etiam vestibulum tortor metus, et hendrerit nunc imperdiet varius. Aenean ac nisl velit. Mauris mattis at massa ut porta. Vestibulum eu lorem eget lectus malesuada posuere. Sed odio mi, efficitur ac tincidunt et, elementum eget elit. Suspendisse et quam in ipsum fringilla finibus.

            </section>
            <section id="howitworks">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor quam. Duis imperdiet non ligula ut volutpat. Fusce imperdiet quam ipsum, at faucibus lectus hendrerit a. Suspendisse vitae dui a ante commodo suscipit et sed nibh. Nulla auctor leo in urna egestas porttitor volutpat et ante. Quisque mollis nibh ut dui commodo consectetur. Nunc euismod egestas nibh, at rhoncus turpis porta eget. Phasellus tristique molestie imperdiet. Praesent laoreet eget ligula ut pellentesque. Fusce varius odio sit amet elit efficitur, non congue orci tempor. Suspendisse eget tellus rhoncus, sagittis nunc rhoncus, ornare erat. Nulla pretium convallis erat feugiat finibus. Phasellus posuere tempor volutpat.

                Nulla imperdiet massa tincidunt libero ornare auctor. Duis lacinia vehicula quam, eget accumsan urna faucibus nec. Donec et massa mi. Sed iaculis libero ac dolor blandit fringilla. Praesent nec dignissim velit, a feugiat sapien. Quisque sagittis ex eu arcu vestibulum dictum. Aenean vehicula, turpis id euismod vulputate, orci elit tristique ligula, non molestie libero lectus eu arcu. Donec facilisis velit a justo interdum tristique. In rutrum faucibus massa ac scelerisque. Donec dictum posuere arcu a suscipit. Sed purus orci, mollis finibus euismod quis, luctus ut ligula. Nulla tincidunt sagittis purus. In pretium mi nunc. Cras non nunc arcu.

                Integer interdum nulla nec gravida lobortis. Curabitur est diam, mattis ut bibendum vitae, feugiat a sem. Aliquam sed purus ut lorem mollis commodo. Cras tincidunt pretium suscipit. Vestibulum non sapien porttitor, rutrum erat sit amet, tempor lacus. Sed fringilla sodales nunc sit amet convallis. Etiam consequat lacus eu nibh accumsan, ut ullamcorper erat varius.

                Etiam efficitur, sapien non lacinia sagittis, dolor ligula placerat mauris, auctor facilisis est nunc ut est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus quam, mollis auctor consectetur non, gravida eget lectus. Etiam placerat augue leo, a dictum purus luctus sit amet. Cras tristique ante quis eros scelerisque congue. Aliquam ullamcorper imperdiet eleifend. Donec nec porttitor leo. Nam iaculis ligula libero, eu laoreet sem posuere sit amet. Morbi convallis tincidunt viverra.

                Phasellus euismod enim mi, at condimentum justo viverra eget. Etiam vestibulum tortor metus, et hendrerit nunc imperdiet varius. Aenean ac nisl velit. Mauris mattis at massa ut porta. Vestibulum eu lorem eget lectus malesuada posuere. Sed odio mi, efficitur ac tincidunt et, elementum eget elit. Suspendisse et quam in ipsum fringilla finibus.

            </section>
            <section id="start"></section>
            <section id="footer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tortor quam. Duis imperdiet non ligula ut volutpat. Fusce imperdiet quam ipsum, at faucibus lectus hendrerit a. Suspendisse vitae dui a ante commodo suscipit et sed nibh. Nulla auctor leo in urna egestas porttitor volutpat et ante. Quisque mollis nibh ut dui commodo consectetur. Nunc euismod egestas nibh, at rhoncus turpis porta eget. Phasellus tristique molestie imperdiet. Praesent laoreet eget ligula ut pellentesque. Fusce varius odio sit amet elit efficitur, non congue orci tempor. Suspendisse eget tellus rhoncus, sagittis nunc rhoncus, ornare erat. Nulla pretium convallis erat feugiat finibus. Phasellus posuere tempor volutpat.

                Nulla imperdiet massa tincidunt libero ornare auctor. Duis lacinia vehicula quam, eget accumsan urna faucibus nec. Donec et massa mi. Sed iaculis libero ac dolor blandit fringilla. Praesent nec dignissim velit, a feugiat sapien. Quisque sagittis ex eu arcu vestibulum dictum. Aenean vehicula, turpis id euismod vulputate, orci elit tristique ligula, non molestie libero lectus eu arcu. Donec facilisis velit a justo interdum tristique. In rutrum faucibus massa ac scelerisque. Donec dictum posuere arcu a suscipit. Sed purus orci, mollis finibus euismod quis, luctus ut ligula. Nulla tincidunt sagittis purus. In pretium mi nunc. Cras non nunc arcu.

                Integer interdum nulla nec gravida lobortis. Curabitur est diam, mattis ut bibendum vitae, feugiat a sem. Aliquam sed purus ut lorem mollis commodo. Cras tincidunt pretium suscipit. Vestibulum non sapien porttitor, rutrum erat sit amet, tempor lacus. Sed fringilla sodales nunc sit amet convallis. Etiam consequat lacus eu nibh accumsan, ut ullamcorper erat varius.

                Etiam efficitur, sapien non lacinia sagittis, dolor ligula placerat mauris, auctor facilisis est nunc ut est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam metus quam, mollis auctor consectetur non, gravida eget lectus. Etiam placerat augue leo, a dictum purus luctus sit amet. Cras tristique ante quis eros scelerisque congue. Aliquam ullamcorper imperdiet eleifend. Donec nec porttitor leo. Nam iaculis ligula libero, eu laoreet sem posuere sit amet. Morbi convallis tincidunt viverra.

                Phasellus euismod enim mi, at condimentum justo viverra eget. Etiam vestibulum tortor metus, et hendrerit nunc imperdiet varius. Aenean ac nisl velit. Mauris mattis at massa ut porta. Vestibulum eu lorem eget lectus malesuada posuere. Sed odio mi, efficitur ac tincidunt et, elementum eget elit. Suspendisse et quam in ipsum fringilla finibus.
            </section>
        </div>
    );
}

export default LandingPage;