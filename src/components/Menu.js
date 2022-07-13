import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from "styled-components";
import {Link} from "react-router-dom";




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
                        <Link to="">Accueil</Link>
                        <Link to="/#">A Propos</Link>
                        <Link to="/#">Services</Link>
                        <Link to="/#">Blogs</Link>
                        <Link to="/#">Contact</Link>
                        <Link to="/login" className="btn-medecin" >Espace Medecin</Link>
                        <Link to="/#" className="btn-patient">Espace Patient</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Menu;