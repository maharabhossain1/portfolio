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
          <a
            target="_blank"
            rel="noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=maharabhossain0022@gmail.com&body="
          >
            <button className="my-btn">Say Hello</button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
