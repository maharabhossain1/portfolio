import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

export default function TopSection() {
  return (
    <div className="top-section my-5">
      <div className="w-75 m-auto my-5 text-center">
        <h1 className="title-font">Junior Front-End Developer</h1>
        <div className="w-50 m-auto mt-5 text-center top-text">
          <p>
            Hi I am Maharab, junor front-end developer. I build, <br /> Things
            that lives in Internet, with simple code.
          </p>
        </div>
        <a href="resume.pdf" title="download">
          <button className="my-btn my-3">
            My Resume <AiOutlineDownload className="fs-3" />
          </button>
        </a>
      </div>
    </div>
  );
}
