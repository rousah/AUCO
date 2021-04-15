import React from 'react';
import '../../App.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faExclamationCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const ClassButton = (props) => {

    const style = {
        boxShadow: '0px 4px 5px 0px rgba(163, 178, 255, 0.59)',
        backgroundColor: "#ffffff",
        borderRadius: '16px',
        cursor: 'pointer',
        color: '#1d2128',
        textDecoration: 'none',
        width: '100%',
        padding: '1rem 2rem',
        position: 'relative'
    };

    return (
        <div style={style}>
            <FontAwesomeIcon icon={faEllipsisV} className="position-absolute top-0 end-0 mt-3 me-3"></FontAwesomeIcon>
            <a href="/clases" className="text-decoration-none text-body">
                <Row>
                    <h3 className="p-0">Ética 2º ESO</h3>
                </Row>
                <Row className="d-flex align-items-center direction-row">
                    <Col xs="1" className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    </Col>
                    <Col>
                        24 alumnos
                    </Col>
                </Row>
                <Row className="d-flex align-items-center direction-row">
                    <Col xs="1" className="d-flex justify-content-center text-primary">
                        <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                    </Col>
                    <Col>
                        2 notificaciones
                    </Col>
                </Row>
                <Row className="d-flex align-items-center direction-row pt-5">
                    Alejandro Mira Abad, Joan Calabuig, Elena Torres Moreno...
                </Row>
            </a>
        </div>
    );
}


export default ClassButton;