import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBell, faCog, faUser, faQuestion, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Notification from '../Notification/Notification';

import {
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container,
} from 'reactstrap';

import useToken from '../../services/useToken';

const notifications = [
    {
        nombre: "etica",
        notificaciones: [
            {
                nombre: "Lola",
                tipo: "noresp",
                detalle: ""
            },
            {
                nombre: "Pepito",
                tipo: "incidencia",
                detalle: "Jaime ha pegado a Lara"
            }
        ]
    }, {
        nombre: "lengua",
        notificaciones: [
            {
                nombre: "Lola",
                tipo: "noresp",
                detalle: ""
            }
        ]
    }
]

const NavBarTeacher = (props) => {
    const { deleteToken, userId } = useToken();

    // Alert dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);


    const logout = (e) => {
        deleteToken();
        window.location.href = '/';
        // return false;
    }

    return (
        <header className="px-3 pt-1 navbar-teacher text-white">
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
                        <NavItem>
                            <NavLink tag={RRNavLink} state="hello" to={{ pathname: "/clases", state: { userId: userId } }} className={props.clases ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faUsers} className="bi d-block mx-auto mb-1" size="lg" />
                                Clases
                            </NavLink>
                        </NavItem>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="py-0 teacher">
                            <DropdownToggle tag="span"
                                data-toggle="dropdown"
                                aria-expanded={dropdownOpen}
                                role="button">
                                <FontAwesomeIcon icon={faBell} className="bi d-block mx-auto mb-1" size="lg" />
                                        Avisos
                                    </DropdownToggle>
                            <DropdownMenu className="col-sm-6" style={{ minWidth: "400px" }}>
                                {notifications.map((val, i) => {
                                    console.log(val)
                                    return (
                                        <div>
                                            <DropdownItem header>{val.nombre}</DropdownItem>
                                            <div style={{ padding: "0.5rem 1rem" }}>
                                                {val.notificaciones.map((notif, i) => {
                                                    return (
                                                        <Notification color="auco" content={
                                                            <span>
                                                                {notif.tipo}
                                                            </span>}>
                                                        </Notification>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <NavLink href="" className={props.settings ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faCog} className="bi d-block mx-auto mb-1" size="lg" />
                                Ajustes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" className={props.profile ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faUser} className="bi d-block mx-auto mb-1" size="lg" />
                                Perfil
                            </NavLink>
                        </NavItem>
                        <span id="vertical-separation" className="mt-1 mb-2"></span>
                        <NavItem>
                            <NavLink href="" className={props.help ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faQuestion} className="bi d-block mx-auto mb-1" size="lg" />
                                Ayuda
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={logout} className={props.logout ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="bi d-block mx-auto mb-1" size="lg" />
                                Salir
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Container>
        </header >
    );
}

export default NavBarTeacher;