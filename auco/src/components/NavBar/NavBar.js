import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import ButtonMain from '../ButtonMain';
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
    DropdownItem
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const changeBackground = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else setNavbar(false);
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <Navbar color="light" dark expand="md" className={navbar ? 'sticky-top navigation active' : 'sticky-top navigation'}>
            <NavbarBrand href="/" className="logo"><h1 style={{ fontWeight: "800" }}>AUCO</h1></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <UncontrolledDropdown nav inNavbar style={{ fontSize: "20px", fontWeight: "600" }}>
                        <DropdownToggle nav caret>
                            Español
                        </DropdownToggle>
                        <img src=""></img>
                        <DropdownMenu right>
                            <DropdownItem>
                                Español
                            </DropdownItem>
                            <DropdownItem>
                                English
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem className={navbar ? "" : "hidden"}>
                        <ButtonMain className="px-3 mx-1" buttonText={"REGISTRAR"} href="/register" fontWeight="500" fontSize="20px"></ButtonMain>
                    </NavItem>
                    <NavItem className={navbar ? "" : "hidden"}>
                        <ButtonMain secondary className="px-3 mx-1" buttonText={"INICIAR SESIÓN"} href="/login" fontWeight="500" fontSize="20px"></ButtonMain>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavBar;