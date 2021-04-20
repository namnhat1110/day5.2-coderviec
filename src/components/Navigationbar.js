import React from 'react'
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap'
import logo from "../logo.svg";



const Navigationbar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="mr-auto">
                <img src={logo} alt="CoderSchool" width="50px" />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">
                    Home
        </Nav.Link>
                <Nav.Link as={Link} exact to="/test">
                    Testing
        </Nav.Link>
                <Nav.Link as={Link} exact to="/login">
                    Login
        </Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default Navigationbar