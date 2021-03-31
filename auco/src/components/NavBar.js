import React, { Component } from 'react';
import { useState } from 'react';
import '../App.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const style = {
        backgroundColor: 'white'
    };

    return (
        <Navbar style={style} color="light" dark expand="md" className="sticky-top">
            <NavbarBrand href="/" className="logo"><h1 style={{fontWeight:"800"}}>AUCO</h1></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <UncontrolledDropdown nav inNavbar style={{fontSize: "20px", fontWeight: "600"}}>
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
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default NavBar;