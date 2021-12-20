import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FloatingLabel, Form } from "react-bootstrap";
import { GiVolleyballBall } from "react-icons/gi";

export default function Contect() {
  const [confirm, setConfirm] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_yr3b1yw",
        form.current,
        "user_LIvVsKtxlltBJQispTT7V"
      )
      .then(
        (result) => {
          setConfirm(true);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="w-75 m-auto ">
      <div className="custom-contect-text">
        <h1>Get In Touch</h1>
        <p>
          My inbox is always open. Whether you have a question or just want to{" "}
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:maharabhossain0022@gmail.com"
          >
            <button className="my-btn my-2">Say Hello</button>
          </a>
          <br /> I’ll try my best to get back to you! Or Your can Sent Me
          Message Direct from here.
        </p>
      </div>
      <Form ref={form} onSubmit={sendEmail} className="my-5">
        <FloatingLabel
          controlId="floatingInput"
          label="Subject"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Subject" name="subject" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Your Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Your name" name="name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Your Email"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="email"
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <button type="submit" className="my-btn my-3 ">
          Sent Me your Message <GiVolleyballBall className="fs-4 mx-1" />
        </button>
      </Form>
      {confirm && (
        <div className="alert alert-success" role="alert">
          Thanks For Your mail , I will reply As Soon As possible
        </div>
      )}
    </div>
  );
}
