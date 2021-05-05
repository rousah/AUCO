import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import ButtonMain from '../Buttons/ButtonMain';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';

const NavBarLanding = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(true);

    const toggle = () => setIsOpen(!isOpen);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else setNavbar(false);
    }

    if (props.landing) {
        window.addEventListener('scroll', changeBackground);
    }

    return (
        <Navbar color="light" dark expand="md" className={navbar ? 'sticky-top navigation active py-0' : 'sticky-top navigation py-0'}>
            <Container>
                <NavbarBrand href="/" className="logo"><h1 style={{ fontWeight: "800" }} className="m-0">AUCO</h1></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ms-auto align-items-center" navbar>
                        <UncontrolledDropdown nav inNavbar style={{ fontSize: "20px", fontWeight: "600" }}>
                            <DropdownToggle nav caret>
                                Español
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Español
                            </DropdownItem>
                                <DropdownItem>
                                    English
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem className={props.showregister ? "p-2" : "hidden"}>
                            <ButtonMain className="px-3 mx-1" buttonText={"REGISTRAR"} href="/choose-user" fontWeight="500" fontSize="20px"></ButtonMain>
                        </NavItem>
                        <NavItem className={props.showlogin ? "p-2" : "hidden"}>
                            <ButtonMain secondary className="px-3 mx-1" buttonText={"INICIAR SESIÓN"} href="/login" fontWeight="500" fontSize="20px"></ButtonMain>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarLanding;