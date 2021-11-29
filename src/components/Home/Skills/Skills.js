import React from "react";
import { Container, Row } from "react-bootstrap";
import { BsFront, BsBack, BsTools } from "react-icons/bs";

export default function Skills() {
  return (
    <div className="">
      <Container className="w-75 py-5 custom-skills bg-light">
        <Row
          xs={1}
          md={2}
          lg={3}
          className="justify-content-evenly align-self-center py-5"
        >
          <div className="text-center">
            <h1>
              <BsFront className="icons my-3" />
            </h1>
            <h2> Front-End</h2>
            <p>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <p>
              HTML/HTML5 <br /> CSS/CSS3,
              <br /> Javascript,
              <br /> React.js,
              <br /> Bootstrap, <br />
              React-Bootstrap, <br />
              React-Router.
            </p>
          </div>
          <div className="text-center border-end border-start">
            <h1>
              <BsBack className="icons my-3" />
            </h1>
            <h2>Backend</h2>
            <p>
              I like to use this things for my website backend , and I like
              this.
            </p>
            <p>
              Node.js,
              <br /> Express,
              <br /> REST API,
              <br /> Firebase-Authentication,
              <br /> NoSQL-MongoDB.
            </p>
          </div>
          <div className="text-center">
            <h1>
              <BsTools className="icons my-3" />
            </h1>
            <h2>Dev Tools</h2>
            <p>
              {" "}
              I like to use this things for my website Tools , and I like this.
            </p>
            <p>
              Chrome Dev-Tool,
              <br /> VS-code,
              <br /> Git,
              <br /> GitHub,
              <br /> Mac-OS,
              <br /> Besh/Zsh,
              <br /> Heroku,
              <br /> Netlify.
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}
