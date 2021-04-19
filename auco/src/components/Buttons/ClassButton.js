import React, { useState } from 'react';
import '../../App.css';
import { Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faExclamationCircle, faEllipsisV, faExternalLinkAlt, faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons'

const ClassButton = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

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
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="position-absolute top-0 end-0 mt-3 me-3" direction="left">
                <DropdownToggle tag="span"
                    data-toggle="dropdown"
                    className="p-2"
                    aria-expanded={dropdownOpen}>
                    <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem><FontAwesomeIcon icon={faExternalLinkAlt}/> Abrir</DropdownItem>
                    <DropdownItem><FontAwesomeIcon icon={faUserPlus}/> Invitar</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem><FontAwesomeIcon icon={faTrash}/> Eliminar</DropdownItem>
                </DropdownMenu>
            </Dropdown>
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