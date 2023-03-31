import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import profilePhoto from '../../assets/gift-habeshaw-KBv5dEN3QtY-unsplash.jpg';
import './Header.css';

const Header = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                <Navbar.Brand className='navbar-brand' href="#home">Programmers Cafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#blogs">blogs</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#profile">
                        <img className='profile-photo' src={profilePhoto} alt="Profile Photo" />
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

    );
};

export default Header;