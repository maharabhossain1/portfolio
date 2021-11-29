import React from "react";
import { Container, Row } from "react-bootstrap";

export default function MidAbout() {
  return (
    <div className="mid-about">
      <Container className="py-5">
        <Row
          xs={1}
          md={2}
          lg={3}
          className="justify-content-evenly align-self-center"
        >
          <div>
            <div class="upper-div">
              <div class="image"></div>
            </div>
            <hr className="w-75 bg-light m-auto my-3" />
            <hr className="w-50 bg-light m-auto my-3" />
            <hr className="w-25 bg-light m-auto my-3" />
          </div>
          <div>
            <div className="text-light my-5">
              <p>Hi My Name Is,</p>
              <h1>Maharab Hossain Opi</h1>
              <p>
                I am a <span className="fs-4">Junior front-end developer</span>{" "}
                specializing in building React.js WebApp. I enjoy creating
                things that live on the internet. My interest in web development
                started back in 2021, I use Javascript and React.js to create
                high-end interactive experiences and products. I code
                beautifully simple things, and I love what I do.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
