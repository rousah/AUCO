import React, { useState, useEffect } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBell, faCog, faUser, faQuestion, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge } from 'reactstrap';
import Notification from '../Notification/Notification';
import { getClasses } from '../../services/getClasses';

import {
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    Container,
} from 'reactstrap';

import useToken from '../../services/useToken';

const notifNumber = (notificationsPerClass) => {
    let notifs = 0;
    notificationsPerClass.forEach((oneClass, i) => {
        oneClass.notifications.forEach((oneNotif, i) => {
            notifs++;
        })
    })
    return notifs;
}

const NavBarTeacher = (props) => {
    const { deleteToken, userId } = useToken();
    const [completeClasses, setCompleteClasses] = useState(null);

    // To get notifs from all classes
    useEffect(() => {
        async function getMyClasses() {
            const classes = await getClasses(userId).then(response => {
                // if get classes success
                if (response) {
                    return response;
                }
            });
            setCompleteClasses(classes);
        }
        getMyClasses();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Alert dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);


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
            <Container>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavbarBrand href="/" className="logo me-lg-auto"><h1 style={{ fontWeight: "800" }} className="m-0">AUCO</h1></NavbarBrand>
                    <Nav className="col-12 col-lg-auto my-2 justify-content-center my-md-0">
                        {/*  <NavItem>
                            <NavLink tag={RRNavLink} to={{ pathname: "/home", state: { userId: userId } }} className={props.home ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faHome} className="bi d-block mx-auto mb-1" size="lg" />
                                Home
                            </NavLink>
                      </NavItem> */}
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
                                role="button"
                                className="position-relative">
                                <Badge className="badge-notifications bg-teal rounded-pill tw-animate-ping text-teal">{completeClasses ? notifNumber(completeClasses) : ""}</Badge>
                                <Badge className="badge-notifications bg-teal rounded-pill">{completeClasses ? notifNumber(completeClasses) : ""}</Badge>
                                <FontAwesomeIcon icon={faBell} className="bi d-block mx-auto mb-1" size="lg" />
                                Avisos
                            </DropdownToggle>
                            <DropdownMenu className="col-sm-6">
                                {
                                    completeClasses ?
                                        completeClasses.map((val, i) => {
                                            return (
                                                <div key={i}>
                                                    <DropdownItem header>{val.name}</DropdownItem>
                                                    <div style={{ padding: "0.5rem 1rem" }}>
                                                        {val.notifications.map((notif, i) => {
                                                            return (
                                                                <Notification key={i} color="auco" content={
                                                                    <span>
                                                                        {notif.details}
                                                                    </span>}
                                                                    incidencia={notif.incident} name={notif.name}
                                                                >
                                                                </Notification>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : <span></span>
                                }
                            </DropdownMenu>
                        </Dropdown>
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
            </Container >
        </header >
    );
}

export default NavBarTeacher;