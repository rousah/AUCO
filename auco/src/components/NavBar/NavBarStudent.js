import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCog, faUser, faQuestion, faSignOutAlt, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import ReportModal from '../Notification/ReportModal';
import SuccessAlert from '../Notification/SuccessAlert';

import {
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container,
} from 'reactstrap';

import useToken from '../../services/useToken';

const NavBarStudent = (props) => {
    const { deleteToken, userId } = useToken();

    // Toast success
    const [show, setShow] = useState(false);
    const handleVisible = () => {
        setShow(true)
        setTimeout(() => {
            // 2s
            setShow(false)
        }, 4000);
    }
    // Toast error
    const [showError, setShowError] = useState(false);
    const handleVisibleError = () => {
        setShowError(true)
        setTimeout(() => {
            // 2s
            setShowError(false)
        }, 4000);
    }

    // Report modal
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const logout = (e) => {
        deleteToken();
        window.location.href = '/';
        // return false;
    }

    const pageDoesntExist = () => {
        alert("Ups! Esta página todavía no existe.")
    }

    return (
        <header className="px-3 pt-1 navbar-teacher text-white">
            <SuccessAlert text="¡Reporte enviado con éxito!" show={show}></SuccessAlert>
            <SuccessAlert text="Error al enviar reporte, inténtelo más tarde." error show={showError}></SuccessAlert>
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavbarBrand href="/" className="logo me-lg-auto"><h1 style={{ fontWeight: "800" }} className="m-0">AUCO</h1></NavbarBrand>
                    <Nav className="col-12 col-lg-auto my-2 justify-content-center my-md-0">
                        <NavItem>
                            <NavLink tag={RRNavLink} to={{ pathname: "/home", state: { userId: userId } }} className={props.home ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faHome} className="bi d-block mx-auto mb-1" size="lg" />
                                Home
                            </NavLink>
                        </NavItem>
                        <NavLink onClick={toggle} className="py-0 teacher" style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={faExclamationCircle} className="bi d-block mx-auto mb-1" size="lg" />
                            Reportar
                        </NavLink>
                        <NavItem>
                            <NavLink onClick={pageDoesntExist} className={props.settings ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faCog} className="bi d-block mx-auto mb-1" size="lg" />
                                Ajustes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={RRNavLink} to={{ pathname: "/profile", state: { userId: userId } }} className={props.profile ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faUser} className="bi d-block mx-auto mb-1" size="lg" />
                                Perfil
                            </NavLink>
                        </NavItem>
                        <span id="vertical-separation" className="mt-1 mb-2"></span>
                        <NavItem>
                            <NavLink onClick={pageDoesntExist} className={props.help ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faQuestion} className="bi d-block mx-auto mb-1" size="lg" />
                                Ayuda
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={logout} href="" className={props.logout ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="bi d-block mx-auto mb-1" size="lg" />
                                Salir
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Container>
            <ReportModal isOpen={modal} toggle={toggle} modal={modal} toggleToast={handleVisible} toggleError={handleVisibleError} />
        </header>
    );
}

export default NavBarStudent;