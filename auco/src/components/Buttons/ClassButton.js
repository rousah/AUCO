import React, { useState } from 'react';
import '../../App.css';
import { Row, Col } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faExclamationCircle, faEllipsisV, faExternalLinkAlt, faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
import { deleteClass } from '../../services/deleteClass';

const ClassButton = (props) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Confirmation modal
    const [modal, setModal] = useState(false);
    const toggleConfirmation = () => setModal(!modal);

    // Dropdown menu
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
        position: 'relative',
        height: '100%'
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
                    <DropdownItem><FontAwesomeIcon icon={faExternalLinkAlt} /> Abrir</DropdownItem>
                    <DropdownItem><FontAwesomeIcon icon={faUserPlus} /> Invitar</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={toggleConfirmation}><FontAwesomeIcon icon={faTrash} /> Eliminar</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Link tag={RRNavLink} to={{ pathname: "/class/" + props.thisClass._id }} className="text-decoration-none text-body">
                <Row>
                    <h3 className="p-0">{props.thisClass.name} {props.thisClass.year}</h3>
                </Row>
                <Row className="d-flex align-items-center direction-row">
                    <Col xs="1" className="d-flex justify-content-center">
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                    </Col>
                    <Col>
                        {props.thisClass.students.length} alumnos
                    </Col>
                </Row>
                {
                    // Only show notif icon etc. when there are actual notifications
                    props.thisClass.notifications.length != 0 ?
                        <Row className="d-flex align-items-center direction-row">
                            <Col xs="1" className={props.thisClass.notifications.length > 0 ? "d-flex justify-content-center text-primary" : "d-flex justify-content-center text-dark"}>
                                <FontAwesomeIcon icon={faExclamationCircle}></FontAwesomeIcon>
                            </Col>
                            <Col>
                                {props.thisClass.notifications.length} {props.thisClass.notifications.length !== 1 ? <span>notificaciones</span> : <span>notificación</span>}
                            </Col>
                        </Row>
                        : <span></span>
                }
                <Row className="d-flex align-items-center direction-row pt-5">
                    {
                        props.thisClass.personalStudents.slice(0, 3).map((val, i) => {
                            let student = null;
                            if (i < 2) {
                                student = val.name + ' ' + val.surname + ', ';
                            }
                            else {
                                student = val.name + ' ' + val.surname + '...';
                            }
                            return student;
                        })
                    }
                </Row>
            </Link>
            <ConfirmationModal server isOpen={modal} action={deleteClass} actionInfo={props.thisClass._id} toggle={toggleConfirmation} modal={modal} headerText="¡Ciudado!" confirmationText={"Estás a punto de eliminar la clase " + props.thisClass.name + ". Se borrará toda la información de la clase, y también las cuentas de los estudiantes. Ya no tendrán acceso a la plataforma. ¿Estás seguro de que quieres eliminar la clase " + props.thisClass.name + "?"} actionText="Eliminar" loadingText="Eliminando clase..." />
        </div>
    );
}


export default ClassButton;