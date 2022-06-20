import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

export default function TopSection() {
  return (
    <div className="top-section">
      <div className="w-75 m-auto my-5 text-center">
        <h1 className="title-font">MERN Stack Developer</h1>
        <div className="w-50 m-auto mt-5 text-center top-text pt-2">
          <p>
            Hi I am <span className="fs-5">Maharab Hossain Opi</span>, MERN
            Stack developer. I build, <br /> Things that lives in Internet, with
            simple code.
          </p>
        </div>
        <a href="resume.pdf" title="" download>
          <button className="my-btn my-3">
            My Resume <AiOutlineDownload className="fs-3" />
          </button>
        </a>
      </div>
    </div>
  );
}
