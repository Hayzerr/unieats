import React from 'react';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';

const SDUNavbar = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#" style = {{marginLeft: "20px"}}>SDU-Januya</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
            <Navbar.Collapse id="navbarNavAltMarkup">
                <Nav className="mr-auto">
                    <Nav.Link href="#">Меню</Nav.Link>
                    <Nav.Link href="#">Места</Nav.Link>
                    <Nav.Link href="#">Акции</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <Nav>
                <NavItem>
                    <Nav.Link href="#">Корзина <Badge variant="light">0</Badge></Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href="#" style = {{marginRight: "20px"}}>Профиль</Nav.Link>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default SDUNavbar;
