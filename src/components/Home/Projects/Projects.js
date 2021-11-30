import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Projects() {
  const [myProjects, setMyProjects] = useState([]);
  useEffect(() => {
    fetch("https://obscure-headland-70135.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => setMyProjects(data));
  }, []);
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
          {myProjects.map((project) => {
            const { _id, img1, title, miniDetail } = project;
            return (
              <Card
                style={{ width: "22rem" }}
                className="custom-card my-1"
                key={_id}
              >
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{miniDetail}</Card.Text>
                  <Link to={`project/${_id}`}>
                    <button className="my-btn"> Details</button>{" "}
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
