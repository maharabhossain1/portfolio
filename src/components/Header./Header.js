import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaCode } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <FaCode className="icons" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <button className="my-btn">Say Hello</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
