import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers, faBell, faCog, faUser, faQuestion, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import {
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

const NavBarLanding = (props) => {

    return (
        <header class="px-3 pt-1 navbar-teacher text-white">
            <Container>
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavbarBrand href="/" className="logo me-lg-auto"><h1 style={{ fontWeight: "800" }} className="m-0">AUCO</h1></NavbarBrand>
                    <Nav className="col-12 col-lg-auto my-2 justify-content-center my-md-0">
                        <NavItem>
                            <NavLink href="" className={props.home ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faHome} className="bi d-block mx-auto mb-1" size="lg" />
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" className={props.clases ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faUsers} className="bi d-block mx-auto mb-1" size="lg" />
                                Clases
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="" className={props.notifications ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faBell} className="bi d-block mx-auto mb-1" size="lg" />
                                Avisos
                            </NavLink>
                        </NavItem>
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
                            <NavLink href="" className={props.logout ? "py-0 teacher active" : "py-0 teacher "}>
                                <FontAwesomeIcon icon={faSignOutAlt} className="bi d-block mx-auto mb-1" size="lg" />
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