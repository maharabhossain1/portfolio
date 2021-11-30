import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaCode } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="the-nav">
      <Container className="the-navbar">
        <Navbar.Brand href="#home">
          <FaCode className="icons" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end ">
          <Nav.Link href="#about" className="nav-items">
            ABOUT
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:maharabhossain0022@gmail.com"
          >
            <button className="my-btn">Say Hello</button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
