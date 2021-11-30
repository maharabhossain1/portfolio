import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FaCode } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar sticky="top" className="the-nav">
      <Container className="the-navbar">
        <Navbar.Brand href="#home">
          <FaCode className="icons" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:maharabhossain0022@gmail.com"
          >
            <button className="my-btn">Say Hello</button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
