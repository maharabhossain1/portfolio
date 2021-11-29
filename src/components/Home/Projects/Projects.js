import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import img1 from "./img/project-carcity.png";
import img2 from "./img/project-courier.png";
import img3 from "./img/project-medi.png";

export default function Projects() {
  return (
    <div className="projects mt-5">
      <div className="Projects-start-text w-75 d-lg-flex justify-content-evenly align-items-center">
        <div className="">
          <h1>My Recent Work</h1>
        </div>
        <div>
          <p>Here are a few Websites projects I've worked on recently. </p>
        </div>
        <div>
          <button className="my-btn">Let's Explore</button>
        </div>
      </div>
      <Container className="w-75 py-5 custom-skills my-2">
        <Row
          xs={1}
          md={2}
          lg={3}
          className="justify-content-evenly align-self-center py-5"
        >
          <Card style={{ width: "22rem" }} className="custom-card my-1">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Car-City Application</Card.Title>
              <Card.Text>
                Provide Cars with online support, and users can buy cars and
                give a review, also manage Orders.
              </Card.Text>
              <button className="my-btn"> Details</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }} className="custom-card my-1">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Courier-Sheba Application</Card.Title>
              <Card.Text>
                Presuming Courier service. Users can take any service that the
                website provides.
              </Card.Text>
              <button className="my-btn"> Details</button>
            </Card.Body>
          </Card>
          <Card style={{ width: "22rem" }} className="custom-card my-1">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Medi-Sheba Application</Card.Title>
              <Card.Text>
                Provide Medicine service. Purchasers can take any kind of
                services that the website provides.
              </Card.Text>
              <button className="my-btn"> Details</button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
