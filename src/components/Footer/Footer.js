import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="bg-dark pt-5 footer">
      <Container>
        <Row xs={1} md={4} lg={6} className="justify-content-evenly">
          <Col>
            <ul className="text-light">
              <h4>Policy Info</h4>
              <li>Editorial Policy</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </Col>
          <Col>
            <ul className="text-light">
              <h4>Useful Links</h4>
              <li>About </li>
              <li>Contect </li>
              <li>Need Help?</li>
            </ul>
          </Col>
          <Col className="text-light">
            <ul>
              <h4>Social Medial </h4>
              <li>Get in touched by Social media</li>
              <li>
                <a
                  className="linktag"
                  href="https://www.linkedin.com/in/maharab-hossain-opi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="fs-1 m-1 " />
                </a>
                <a
                  href="https://github.com/maharabhossain1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="fs-1 m-1" />
                </a>
                <a
                  href="https://twitter.com/maharab_webDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="fs-1 m-1" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="container mt-3  d-flex  justify-content-center">
        <p className="text-xs-center text-light">
          &copy;{new Date().getFullYear()} Maharab Hossain Opi -All Rights
        </p>
      </div>
    </div>
  );
}
