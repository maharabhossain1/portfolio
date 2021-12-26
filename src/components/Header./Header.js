import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiPencil } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="the-nav">
      <Container className="the-navbar">
        <Navbar.Brand as={Link} to="/">
          <svg
            width="189"
            viewBox="0 0 600 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M175.348 42.3287L180.606 33.7475L171.158 37.2142L114.086 58.1542L112.66 58.6777L112.068 60.0776L80.5338 134.701L76.4541 11.8838L76.2591 6.01276L71.1887 8.97898L6.23267 46.979L4.17095 48.1851L4.54263 50.5446L23.1306 168.545L23.5962 171.5H26.588H39.692H43.192V168V112.394L69.6895 181.257L72.5681 188.738L76.0983 181.541L111.792 108.778V168V171.5H115.292H128.396H131.509L131.872 168.408L139.886 100.197L175.348 42.3287Z"
              stroke="#7510F6"
              stroke-width="7"
            />
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end ">
          <Nav.Link as={HashLink} to="home/#about" className="nav-items my-2">
            ABOUT
          </Nav.Link>
          <Nav.Link as={Link} to="blogs" className="nav-items my-2">
            BLOGS
          </Nav.Link>
          <Nav.Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:maharabhossain0022@gmail.com"
          >
            <button className="my-btn">
              Say Hello <GiPencil className="fs-4" />
            </button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
