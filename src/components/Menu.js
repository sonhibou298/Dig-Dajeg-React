import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from "styled-components";




function Menu(){

    return (
        <Navbar className="topNav" bg="#FFFFFF" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand">
                    <a href="#" className="navbar-brand"><i className="fa fa-h-square"></i>Dig-dajeg</a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="menu me-auto ms-lg-auto ms-md-auto">
                        <a href="#home">Accueil</a>
                        <a href="#link">A Propos</a>
                        <a href="#link">Services</a>
                        <a href="#link">Blogs</a>
                        <a href="#link">Contact</a>
                        <a href="#link" className="btn-medecin">Espace Medecin</a>
                        <a href="#link" className="btn-patient">Espace Patient</a>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;