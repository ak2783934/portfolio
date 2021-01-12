import React, { Component } from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../src/databases/projects.json";

class Projects extends Component {
  render() {
    return (
      <div className={"project-containers"}>
        <h1 className={"project-heading"}>Projects</h1>
        <div className={"card-containers"}>
          {projects.map((project, index) => {
            return (
              <div className="project-card">
                <div className={"project-card-body"}>
                  <h1 className={"skill-name"}>{project.name}</h1>
                  <p className={"para-card"}>{project.desc}</p>
                  <a
                    href={project.github}
                    className="github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1610285746/PORTFOLIO/logos/zxcvzvv_tm3azp.png"
                      alt="git"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                  <a
                    href={project.liveLink}
                    className="deploy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://res.cloudinary.com/dlb1ct3qc/image/upload/v1610286332/PORTFOLIO/logos/deploy_jggoot.png"
                      alt="git"
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
