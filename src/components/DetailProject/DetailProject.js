import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailProject() {
  const { id } = useParams();
  const [projectData, setProjectData] = useState({});
  useEffect(() => {
    fetch(`https://obscure-headland-70135.herokuapp.com/projects/${id}`)
      .then((res) => res.json())
      .then((data) => setProjectData(data));
  }, [id]);
  const { title, img1, img2, img3, rundown, tools, live, client, server } =
    projectData;
  return (
    <div>
      <div className="text-center w-75 m-auto my-5">
        <div className="my-4">
          <h1>{title}</h1>
        </div>
        {/* img divs */}
        <div>
          <div className="m-2">
            <img className="img-fluid img-style" src={img1} alt="" />
          </div>
          <div className="d-lg-flex">
            <div className="m-2">
              <img className="img-fluid img-style" src={img2} alt="" />
            </div>
            <div className="m-2">
              <img className="img-fluid img-style" src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className="my-3">
          <h5>RUNDOWN : {rundown}</h5>
          <h4>Tools : {tools}</h4>
        </div>
        <div className="">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2"
          >
            <button className="my-btn">Visit site</button>
          </a>
          <a
            href={client}
            target="_blank"
            rel="noopener noreferrer"
            className="m-2"
          >
            <button className="my-btn my-3">Client Code</button>
          </a>
          {projectData?.server && (
            <a
              href={server}
              target="_blank"
              rel="noopener noreferrer"
              className="m-2"
            >
              <button className="my-btn">Server Code</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
