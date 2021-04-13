import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import ButtonMain from '../Buttons/ButtonMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBell, faCog, faUser, faQuestion, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    FormFeedback
} from 'reactstrap';

const NavBarLanding = (props) => {

    return (
        <header class="px-3 py-2 bg-dark text-white">
            <Container>
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavbarBrand href="/" className="logo me-lg-auto"><h1 style={{ fontWeight: "800" }} className="m-0">AUCO</h1></NavbarBrand>
                    <Nav className="col-12 col-lg-auto my-2 justify-content-center my-md-0">
                        <NavItem>
                            <NavLink href="">
                                <FontAwesomeIcon icon={faHome} className="bi d-block mx-auto mb-1" />
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <FontAwesomeIcon icon={faUsers} className="bi d-block mx-auto mb-1" />
                                Clases
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <FontAwesomeIcon icon={faBell} className="bi d-block mx-auto mb-1" />
                                Avisos
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <FontAwesomeIcon icon={faCog} className="bi d-block mx-auto mb-1" />
                                Ajustes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <FontAwesomeIcon icon={faUser} className="bi d-block mx-auto mb-1" />
                                Perfil
                            </NavLink>
                        </NavItem>
                        <span id="vertical-separation"></span>
                        <NavItem>
                            <NavLink href="">
                                <FontAwesomeIcon icon={faQuestion} className="bi d-block mx-auto mb-1" />
                                Ayuda
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="">
                                <FontAwesomeIcon icon={faSignOutAlt} className="bi d-block mx-auto mb-1" />
                                Salir
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Container>
        </header>
    );
}

export default NavBarLanding;